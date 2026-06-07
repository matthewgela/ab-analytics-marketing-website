"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  type Accent,
  accentGradientClass,
  accentHoverGlowClass,
} from "@/lib/accent";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/cn";

type StatTileProps = {
  value: string;
  label: string;
  className?: string;
  variant?: "light" | "surface" | "dark";
  accent?: Accent;
};

function parseStatValue(value: string) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { number: null as number | null, suffix: value };
  }
  return {
    number: parseFloat(match[1]),
    suffix: match[2],
  };
}

function useCountUp(
  target: number | null,
  inView: boolean,
  duration = 1.4,
) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView || target === null) return;

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = Math.round(target * eased);
      setCurrent(next);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return target === null ? null : current;
}

export default function StatTile({
  value,
  label,
  className,
  variant = "surface",
  accent = "cyan",
}: StatTileProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { number, suffix } = parseStatValue(value);
  const count = useCountUp(number, inView);
  const isDark = variant === "dark";

  const displayValue =
    number === null
      ? value
      : `${count ?? 0}${suffix}`;

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className={cn(
        "interactive-surface flex flex-col items-center rounded-2xl border-[0.5px] p-5 text-center sm:block sm:p-8 sm:text-left motion-safe:sm:hover:-translate-y-2 motion-safe:sm:hover:scale-[1.02]",
        isDark
          ? "glass-surface-dark hairline-border hover:border-[color:var(--hairline-hover)]"
          : variant === "surface"
            ? "border-border-light bg-bg-surface hover:border-brand-cyan/30"
            : "border-border-grid hover:border-brand-cyan/30",
        accentHoverGlowClass[accent],
        className,
      )}
    >
      <p
        className={cn(
          "font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
          accentGradientClass[accent],
        )}
      >
        {displayValue}
      </p>
      <p
        className={cn(
          "mt-2 max-w-[14rem] text-sm leading-snug sm:mt-3 sm:max-w-none sm:leading-relaxed",
          isDark ? "text-text-muted-on-dark" : "text-text-muted",
        )}
      >
        {label}
      </p>
    </motion.div>
  );
}
