"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { type ReactNode, useRef } from "react";
import { type Accent } from "@/lib/accent";
import { cn } from "@/lib/cn";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "ghost";
  accent?: Accent;
  className?: string;
};

const variantStyles = {
  primary: {
    cyan: "bg-brand-cyan text-bg-deep hover:bg-brand-cyan/90 shadow-[0_0_24px_rgba(14,165,233,0.3)] hover:shadow-[0_0_32px_rgba(14,165,233,0.45)]",
    violet:
      "bg-brand-violet text-white hover:bg-brand-violet/90 shadow-[0_0_24px_rgba(139,92,246,0.3)] hover:shadow-[0_0_32px_rgba(139,92,246,0.45)]",
    emerald:
      "bg-brand-emerald text-bg-deep hover:bg-brand-emerald/90 shadow-[0_0_24px_rgba(16,185,129,0.3)] hover:shadow-[0_0_32px_rgba(16,185,129,0.45)]",
    royal:
      "bg-brand-royal text-white hover:bg-brand-royal/90 shadow-[0_0_24px_rgba(30,58,138,0.35)] hover:shadow-[0_0_32px_rgba(30,58,138,0.5)]",
  },
  secondary: {
    cyan: "glass-surface-dark text-text-on-dark hover:border-brand-cyan/40 hairline-border hover:shadow-[0_0_20px_rgba(14,165,233,0.15)]",
    violet:
      "glass-surface-dark text-text-on-dark hover:border-brand-violet/40 hairline-border hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]",
    emerald:
      "glass-surface-dark text-text-on-dark hover:border-brand-emerald/40 hairline-border hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
    royal:
      "glass-surface-dark text-text-on-dark hover:border-brand-royal/40 hairline-border hover:shadow-[0_0_20px_rgba(30,58,138,0.15)]",
  },
  ghost: {
    cyan: "text-text-muted hover:text-brand-cyan",
    violet: "text-text-muted hover:text-brand-violet",
    emerald: "text-text-muted hover:text-brand-emerald",
    royal: "text-text-muted hover:text-brand-royal",
  },
};

export default function MagneticButton({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  accent = "cyan",
  className,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const isFullWidth = className?.includes("w-full");
  const isResponsiveAuto = className?.includes("sm:w-auto");

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const radius = 80;
    if (distance < radius) {
      const force = (radius - distance) / radius;
      x.set(dx * force * 0.3);
      y.set(dy * force * 0.3);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const classes = cn(
    "inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-200",
    variantStyles[variant][accent],
    className,
  );

  const content = (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={classes}
    >
      {children}
    </motion.div>
  );

  const wrapperClass = isFullWidth
    ? isResponsiveAuto
      ? "block w-full sm:inline-block sm:w-auto"
      : "block w-full"
    : "inline-block";

  if (href) {
    return (
      <Link href={href} className={wrapperClass}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={wrapperClass}>
      {content}
    </button>
  );
}
