import { type ReactNode } from "react";
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
        "relative overflow-hidden rounded-2xl",
        dark
          ? cn(
              "border hairline-border-strong",
              glow
                ? "shadow-md shadow-brand-royal/20 sm:shadow-[0_0_50px_rgba(139,92,246,0.18),0_25px_50px_rgba(0,0,0,0.45)]"
                : "shadow-lg shadow-brand-royal/20 sm:shadow-2xl sm:shadow-brand-royal/30",
            )
          : "border border-border-light shadow-xl shadow-brand-royal/10",
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-2xl",
          dark
            ? "bg-gradient-to-br from-brand-cyan/15 via-brand-violet/5 to-brand-violet/15"
            : "bg-gradient-to-br from-brand-cyan/5 via-transparent to-brand-royal/5",
        )}
      />
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="relative h-full w-full object-cover"
        />
      ) : (
        children
      )}
    </div>
  );
}
