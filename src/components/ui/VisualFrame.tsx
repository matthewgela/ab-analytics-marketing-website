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
  /** cover fills the frame; contain shows the full image without cropping */
  fit?: "cover" | "contain";
  /** light canvas suits UI screenshots; none keeps the asset unobstructed */
  canvas?: "dark" | "light" | "none";
};

export default function VisualFrame({
  src,
  alt = "",
  children,
  className,
  dark = false,
  glow = false,
  fit = "cover",
  canvas = "dark",
}: VisualFrameProps) {
  const isContain = fit === "contain";

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
      {dark && canvas === "dark" && (
        <div
          className="absolute inset-0 z-0 rounded-2xl bg-[#0b1531]"
          aria-hidden
        />
      )}
      {canvas === "light" && (
        <div
          className="absolute inset-0 z-0 rounded-2xl bg-[#f8fafc]"
          aria-hidden
        />
      )}
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={assetPath(src)}
          alt={alt}
          className={cn(
            "relative z-[1] w-full",
            isContain
              ? "block h-auto w-full object-contain"
              : "h-full object-cover",
          )}
        />
      ) : (
        children
      )}
    </div>
  );
}
