"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { cn } from "@/lib/cn";

const PARTICLE_COUNT = 70;
const CONNECTION_DISTANCE = 1.5;

function createParticleData() {
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const velocities = new Float32Array(PARTICLE_COUNT * 3);
  const basePositions = new Float32Array(PARTICLE_COUNT * 3);

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const x = 1 + Math.random() * 4;
    const y = (Math.random() - 0.5) * 5;
    const z = (Math.random() - 0.5) * 2;
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    basePositions[i * 3] = x;
    basePositions[i * 3 + 1] = y;
    basePositions[i * 3 + 2] = z;
    velocities[i * 3] = (Math.random() - 0.5) * 0.012;
    velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.012;
    velocities[i * 3 + 2] = 0;
  }

  return { positions, velocities, basePositions };
}

function ParticleField({ interactive }: { interactive: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouse = useRef(new THREE.Vector2(0, 0));
  const initialData = useMemo(() => createParticleData(), []);
  const particleData = useRef(initialData);

  useEffect(() => {
    if (!interactive) return;
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [interactive]);

  useFrame(() => {
    if (!pointsRef.current) return;
    const { velocities, basePositions } = particleData.current;
    const pos = pointsRef.current.geometry.attributes.position
      .array as Float32Array;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      pos[i3] += velocities[i3];
      pos[i3 + 1] += velocities[i3 + 1];

      if (Math.abs(pos[i3]) > 5) velocities[i3] *= -1;
      if (Math.abs(pos[i3 + 1]) > 3) velocities[i3 + 1] *= -1;

      if (interactive) {
        const dx = mouse.current.x * 5 - pos[i3];
        const dy = mouse.current.y * 3 - pos[i3 + 1];
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 2.5 && dist > 0) {
          const force = (2.5 - dist) / 2.5;
          pos[i3] -= (dx / dist) * force * 0.06;
          pos[i3 + 1] -= (dy / dist) * force * 0.06;
        }
      }

      pos[i3] += (basePositions[i3] - pos[i3]) * 0.002;
      pos[i3 + 1] += (basePositions[i3 + 1] - pos[i3 + 1]) * 0.002;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    if (linesRef.current) {
      const linePositions: number[] = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < CONNECTION_DISTANCE) {
            linePositions.push(
              pos[i * 3],
              pos[i * 3 + 1],
              pos[i * 3 + 2],
              pos[j * 3],
              pos[j * 3 + 1],
              pos[j * 3 + 2],
            );
          }
        }
      }
      linesRef.current.geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(linePositions, 3),
      );
    }
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[initialData.positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#0EA5E9"
          transparent
          opacity={0.65}
          sizeAttenuation
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#0EA5E9" transparent opacity={0.12} />
      </lineSegments>
    </>
  );
}

type GravityFieldR3FProps = {
  contained?: boolean;
  interactive?: boolean;
};

export default function GravityFieldR3F({
  contained = false,
  interactive = false,
}: GravityFieldR3FProps) {
  return (
    <div
      className={cn(
        "pointer-events-none bg-transparent",
        contained ? "absolute inset-0" : "fixed inset-0 -z-10",
      )}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: "none", background: "transparent" }}
      >
        <ParticleField interactive={interactive} />
      </Canvas>
    </div>
  );
}
