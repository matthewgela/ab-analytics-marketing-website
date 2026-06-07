import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import { cn } from "@/lib/cn";

type BrandLogoProps = {
  size?: "nav" | "footer";
  className?: string;
  asLink?: boolean;
};

const LOGO_WIDTH = 368;
const LOGO_HEIGHT = 91;

const sizeStyles = {
  nav: {
    shell: "gap-2 px-2 py-1 sm:gap-2.5 sm:px-2.5 sm:py-1.5",
    block: "h-4 sm:h-[2.875rem]",
    mark: "h-4 w-[calc(1rem*125/91)] sm:h-[2.875rem] sm:w-[calc(2.875rem*125/91)]",
    title: "text-[11px] font-bold uppercase tracking-[0.22em] sm:text-xs",
    tagline: "text-[9px] leading-[1.35] tracking-[0.04em] sm:text-[10px]",
  },
  footer: {
    shell: "gap-2.5 px-2.5 py-1.5 sm:gap-3 sm:px-3 sm:py-2",
    block: "h-[3.125rem]",
    mark: "h-[3.125rem] w-[calc(3.125rem*125/91)]",
    title: "text-xs font-bold uppercase tracking-[0.22em] sm:text-sm",
    tagline: "text-[10px] leading-[1.4] tracking-[0.04em] sm:text-[11px]",
  },
} as const;

function LogoMark({
  className,
  priority = false,
}: {
  className: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative shrink-0 overflow-hidden", className)} aria-hidden>
      <Image
        src={assetPath("/brand/logo-horizontal.png")}
        alt=""
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        className="absolute top-0 left-0 h-full w-auto max-w-none"
        priority={priority}
      />
    </div>
  );
}

function LogoDivider({ className }: { className: string }) {
  return (
    <div className={cn("w-px shrink-0 bg-white/40", className)} aria-hidden />
  );
}

function LogoText({
  size,
  showTagline = true,
}: {
  size: "nav" | "footer";
  showTagline?: boolean;
}) {
  const styles = sizeStyles[size];

  return (
    <div
      className={cn(
        "flex min-w-0 flex-col justify-center leading-none",
        styles.block,
      )}
    >
      <span className={cn("text-text-on-dark", styles.title)}>Analytics</span>
      {showTagline ? (
        <div
          className={cn(
            "mt-1 font-medium uppercase text-text-on-dark/75",
            styles.tagline,
            size === "nav" && "hidden sm:block",
          )}
        >
          <p>Infrastructure | Systems</p>
          <p className="mt-0.5">Data | Intelligence</p>
        </div>
      ) : null}
    </div>
  );
}

export default function BrandLogo({
  size = "nav",
  className,
  asLink = true,
}: BrandLogoProps) {
  const styles = sizeStyles[size];

  const content = (
    <div
      className={cn(
        "inline-flex items-center rounded-sm bg-bg-deep",
        styles.shell,
        className,
      )}
    >
      <LogoMark className={styles.mark} priority={size === "nav"} />
      <LogoDivider className={styles.block} />
      <LogoText size={size} />
    </div>
  );

  if (!asLink) {
    return content;
  }

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center"
      aria-label="AB Analytics home"
    >
      {content}
    </Link>
  );
}
