import { cn } from "@/lib/cn";

export default function ComingSoonOverlay({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <div
      className={cn(
        "absolute inset-0 z-[2] flex items-center justify-center bg-bg-deep/50 backdrop-blur-[1px]",
        className,
      )}
      aria-hidden
    >
      <span
        className={cn(
          "rounded-full border border-white/25 bg-white/95 font-bold tracking-[0.14em] text-bg-deep shadow-xl",
          size === "sm" && "px-4 py-2 text-[10px] sm:text-xs",
          size === "md" && "px-5 py-2.5 text-xs sm:text-sm",
          size === "lg" && "px-7 py-3 text-sm sm:text-base",
        )}
      >
        COMING SOON
      </span>
    </div>
  );
}
