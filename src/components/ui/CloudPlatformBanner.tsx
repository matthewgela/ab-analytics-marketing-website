"use client";

import Image from "next/image";
import {
  cloudPlatformBannerLabel,
  cloudPlatformHeadline,
  cloudPlatformSubline,
  cloudPlatforms,
  resolvePlatformLogo,
} from "@/content/platforms";
import { assetPath } from "@/lib/assetPath";
import { cn } from "@/lib/cn";

type CloudPlatformBannerProps = {
  variant?: "featured" | "inline";
  label?: string;
  className?: string;
};

export default function CloudPlatformBanner({
  variant = "featured",
  label = cloudPlatformBannerLabel,
  className,
}: CloudPlatformBannerProps) {
  const isInline = variant === "inline";

  const logoHeightClass = (platformId: string) => {
    if (platformId === "aws") return "h-5 sm:h-6";
    if (platformId === "ethio-telecom") return "h-8 sm:h-9";
    return "h-3.5 sm:h-4";
  };

  const featuredLogoHeightClass = (platformId: string) => {
    if (platformId === "aws") return "h-10 sm:h-12 md:h-14 lg:h-16";
    if (platformId === "ethio-telecom") return "h-9 sm:h-10 md:h-12 lg:h-14";
    return "h-7 sm:h-8 md:h-10 lg:h-11";
  };

  if (isInline) {
    return (
      <div
        className={cn(
          "interactive-surface rounded-xl border hairline-border bg-bg-deep/25 px-4 py-4 motion-safe:hover:-translate-y-1 hover:border-brand-cyan/50 hover:shadow-[0_0_28px_rgba(14,165,233,0.18)] sm:px-5 sm:py-5",
          className,
        )}
        aria-label="Cloud platforms we build on"
      >
        <div className="relative flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <p className="eyebrow shrink-0 text-center text-[10px] text-text-muted-on-dark">
            {cloudPlatformBannerLabel}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {cloudPlatforms.map((platform) => (
              <li key={platform.id}>
                <Image
                  src={assetPath(resolvePlatformLogo(platform))}
                  alt={platform.name}
                  width={platform.width}
                  height={platform.height}
                  className={cn(
                    "cloud-platform-logo w-auto",
                    logoHeightClass(platform.id),
                  )}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <section
      className={cn(
        "section-panel relative overflow-hidden px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14",
        className,
      )}
      aria-label="Cloud platforms we build on"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-[0.05]" />
      <div className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-brand-cyan/12 blur-[90px]" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-brand-violet/10 blur-[80px]" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-8 text-center sm:gap-10">
        <div>
          <p className="eyebrow text-brand-cyan">{label}</p>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-text-on-dark sm:text-3xl md:text-4xl">
            {cloudPlatformHeadline}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-text-muted-on-dark sm:text-base">
            {cloudPlatformSubline}
          </p>
        </div>

        <ul className="flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-10 sm:gap-y-8 md:gap-x-12">
          {cloudPlatforms.map((platform) => (
            <li key={platform.id} className="flex items-center justify-center">
              <Image
                src={assetPath(resolvePlatformLogo(platform))}
                alt={platform.name}
                width={platform.width}
                height={platform.height}
                className={cn(
                  "cloud-platform-logo-prominent w-auto max-w-full",
                  featuredLogoHeightClass(platform.id),
                )}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
