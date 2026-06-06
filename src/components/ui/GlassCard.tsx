import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  spotlight?: boolean;
  dark?: boolean;
  onMouseMove?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export default function GlassCard({
  children,
  className,
  spotlight = false,
  dark = false,
  onMouseMove,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-colors duration-300",
        dark ? "glass-surface-dark" : "card-surface",
        spotlight && "spotlight-card",
        className,
      )}
      onMouseMove={onMouseMove}
    >
      {children}
    </div>
  );
}
