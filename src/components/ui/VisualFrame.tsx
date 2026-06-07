import { type ReactNode } from "react";
import { assetPath } from "@/lib/assetPath";
import { cn } from "@/lib/cn";

type VisualFrameProps = {
  src?: string;
  alt?: string;
  children?: ReactNode;
  className?: string;
  dark?: boolean;
  glow?: boolean;
};

export default function VisualFrame({
  src,
  alt = "",
  children,
  className,
  dark = false,
  glow = false,
}: VisualFrameProps) {
  return (
    <div
      className={cn(
        "interactive-surface relative overflow-hidden rounded-2xl",
        dark
          ? cn(
              "border hairline-border-strong",
              glow
                ? "shadow-md shadow-brand-royal/20 motion-safe:hover:scale-[1.02] sm:shadow-[0_0_50px_rgba(139,92,246,0.18),0_25px_50px_rgba(0,0,0,0.45)] motion-safe:hover:shadow-[0_0_70px_rgba(139,92,246,0.32),0_30px_60px_rgba(0,0,0,0.5)]"
                : "shadow-lg shadow-brand-royal/20 sm:shadow-2xl sm:shadow-brand-royal/30",
            )
          : "border border-border-light shadow-xl shadow-brand-royal/10",
        className,
      )}
    >
      {dark && (
        <div
          className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-br from-brand-cyan/15 via-brand-violet/5 to-brand-violet/15"
          aria-hidden
        />
      )}
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={assetPath(src)}
          alt={alt}
          className="relative z-[1] h-full w-full object-cover"
        />
      ) : (
        children
      )}
    </div>
  );
}
