"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import {
  cloudPlatformBannerLabel,
  cloudPlatformHeadline,
  cloudPlatformSubline,
  cloudPlatforms,
} from "@/content/platforms";
import { assetPath } from "@/lib/assetPath";
import { cn } from "@/lib/cn";

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

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
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );
  const isLight = mounted && resolvedTheme === "light";
  const isInline = variant === "inline";

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
                  src={assetPath(
                    !isLight && platform.logoDark
                      ? platform.logoDark
                      : platform.logo,
                  )}
                  alt={platform.name}
                  width={platform.width}
                  height={platform.height}
                  className={cn(
                    "cloud-platform-logo w-auto",
                    platform.id === "aws" ? "h-5 sm:h-6" : "h-3.5 sm:h-4",
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

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="max-w-md text-center">
          <p className="eyebrow text-brand-cyan">{label}</p>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-text-on-dark sm:text-3xl md:text-4xl">
            {cloudPlatformHeadline}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-muted-on-dark sm:text-base">
            {cloudPlatformSubline}
          </p>
        </div>

        <ul className="flex w-full max-w-xl flex-col items-stretch gap-8 sm:flex-row sm:items-center sm:justify-center sm:gap-12 lg:max-w-none lg:justify-end lg:gap-14">
          {cloudPlatforms.map((platform) => {
            const logoSrc =
              !isLight && platform.logoDark ? platform.logoDark : platform.logo;

            return (
              <li
                key={platform.id}
                className="flex flex-1 items-center justify-center sm:flex-none"
              >
                <Image
                  src={assetPath(logoSrc)}
                  alt={platform.name}
                  width={platform.width}
                  height={platform.height}
                  className={cn(
                    "cloud-platform-logo-prominent w-auto max-w-full",
                    platform.id === "aws"
                      ? "h-10 sm:h-12 md:h-14 lg:h-16"
                      : "h-7 sm:h-8 md:h-10 lg:h-11",
                  )}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
