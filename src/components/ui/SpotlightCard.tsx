"use client";

import { type ReactNode, useRef } from "react";
import {
  type Accent,
  accentBorderHoverClass,
  accentHoverGlowClass,
} from "@/lib/accent";
import { cn } from "@/lib/cn";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  accent?: Accent;
  dark?: boolean;
  surface?: "glass" | "card";
  enableGlow?: boolean;
  /** Skip the inner wrapper so children can participate in a parent/subgrid layout. */
  layout?: "default" | "grid";
};

export default function SpotlightCard({
  children,
  className,
  accent = "cyan",
  dark = true,
  surface = "glass",
  enableGlow = true,
  layout = "default",
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty("--spot-x", `${x}px`);
    ref.current.style.setProperty("--spot-y", `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.setProperty("--spot-x", "50%");
    ref.current.style.setProperty("--spot-y", "50%");
  };

  return (
    <div
      ref={ref}
      data-accent={accent}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "spotlight-card rounded-2xl transition-all duration-500 motion-safe:hover:-translate-y-2 motion-safe:hover:scale-[1.015]",
        dark ? "spotlight-card-dark" : "spotlight-card-light",
        surface === "glass"
          ? dark
            ? "glass-surface-dark"
            : "card-surface"
          : dark
            ? "glass-surface-dark"
            : "card-surface",
        accentBorderHoverClass[accent],
        enableGlow && accentHoverGlowClass[accent],
        className,
      )}
    >
      {layout === "grid" ? (
        children
      ) : (
        <div className="relative z-[1] h-full w-full">{children}</div>
      )}
    </div>
  );
}
