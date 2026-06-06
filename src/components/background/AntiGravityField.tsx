"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.size = Math.random() * 2 + 1;
  }

  update(
    canvas: HTMLCanvasElement,
    mouse: { x: number | null; y: number | null; radius: number },
  ) {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < mouse.radius && distance > 0) {
        const force = (mouse.radius - distance) / mouse.radius;
        this.x -= (dx / distance) * force * 1.5;
        this.y -= (dy / distance) * force * 1.5;
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D, nodeColor: string) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = nodeColor;
    ctx.fill();
  }
}

type AntiGravityFieldProps = {
  interactive?: boolean;
};

export default function AntiGravityField({
  interactive = false,
}: AntiGravityFieldProps) {
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );
  const isLight = mounted && resolvedTheme === "light";
  const nodeColor = isLight
    ? "rgba(2, 132, 199, 0.58)"
    : "rgba(14, 165, 233, 0.72)";
  const linePeak = isLight ? 0.38 : 0.46;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: null as number | null, y: null as number | null, radius: 100 };

    const init = () => {
      const width = wrapper.clientWidth;
      const height = wrapper.clientHeight;
      if (width === 0 || height === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = [];
      const density = Math.floor((width * height) / 22000);
      for (let i = 0; i < Math.min(density, 70); i++) {
        const x = width * 0.35 + Math.random() * width * 0.65;
        const y = Math.random() * height;
        particles.push(new Particle(x, y));
      }
    };

    const animate = () => {
      const width = wrapper.clientWidth;
      const height = wrapper.clientHeight;
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const alpha = linePeak * (1 - dist / 130);
            ctx.strokeStyle = isLight
              ? `rgba(2, 132, 199, ${alpha})`
              : `rgba(14, 165, 233, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
        particles[i].update(canvas, mouse);
        particles[i].draw(ctx, nodeColor);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = wrapper.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    init();
    animate();

    const resizeObserver = new ResizeObserver(() => {
      init();
    });
    resizeObserver.observe(wrapper);

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [interactive, isLight, linePeak, nodeColor]);

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none absolute inset-0 size-full overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="block h-full w-full bg-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
