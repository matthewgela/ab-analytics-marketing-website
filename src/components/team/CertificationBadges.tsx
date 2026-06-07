"use client";

import Image from "next/image";
import type { LeaderCertification } from "@/content/certifications";
import { cloudPlatforms, resolvePlatformLogo } from "@/content/platforms";
import { assetPath } from "@/lib/assetPath";
import { cn } from "@/lib/cn";

type CertificationBadgesProps = {
  certifications: LeaderCertification[];
  provider: "gcp" | "aws";
  variant?: "list" | "inline";
  className?: string;
};

const providerLabels = {
  gcp: "Google Cloud Certified",
  aws: "AWS Certified",
};

const platformById = Object.fromEntries(
  cloudPlatforms.map((platform) => [platform.id, platform]),
);

export default function CertificationBadges({
  certifications,
  provider,
  variant = "list",
  className,
}: CertificationBadgesProps) {
  const platform = platformById[provider];

  if (certifications.length === 0 || !platform) return null;

  const logoSrc = resolvePlatformLogo(platform);

  if (variant === "inline") {
    return (
      <div
        className={cn(
          "rounded-xl border hairline-border bg-bg-deep/25 px-4 py-4 sm:px-5 sm:py-5",
          className,
        )}
      >
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <p className="eyebrow shrink-0 text-center text-[10px] text-text-muted-on-dark">
            {providerLabels[provider]}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {certifications.map((cert) => (
              <li key={cert.id}>
                <Image
                  src={assetPath(logoSrc)}
                  alt={platform.name}
                  width={platform.width}
                  height={platform.height}
                  className={cn(
                    "cloud-platform-logo w-auto",
                    provider === "aws" ? "h-5 sm:h-6" : "h-3.5 sm:h-4",
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
    <div className={cn("h-full", className)} aria-label="Cloud certifications">
      <p className="eyebrow mb-3 text-[10px] text-brand-cyan">
        {providerLabels[provider]}
      </p>
      <div className="flex items-start gap-4">
        <Image
          src={assetPath(logoSrc)}
          alt={platform.name}
          width={platform.width}
          height={platform.height}
          className={cn(
            "mt-0.5 shrink-0",
            provider === "aws" ? "h-6 w-auto" : "h-4 w-auto sm:h-5",
          )}
        />
        <ul className="min-w-0 space-y-1.5">
          {certifications.map((cert) => (
            <li
              key={cert.id}
              className="text-sm font-medium leading-snug text-text-on-dark"
            >
              {cert.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
