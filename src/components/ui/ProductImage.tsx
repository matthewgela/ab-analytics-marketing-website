"use client";

import { useState } from "react";
import { ZoomIn } from "lucide-react";
import ComingSoonOverlay from "@/components/ui/ComingSoonOverlay";
import ImageLightbox from "@/components/ui/ImageLightbox";
import { assetPath } from "@/lib/assetPath";
import { cn } from "@/lib/cn";

type ProductImageProps = {
  previewSrc: string;
  fullSrc: string;
  alt: string;
  className?: string;
  comingSoon?: boolean;
};

export default function ProductImage({
  previewSrc,
  fullSrc,
  alt,
  className,
  comingSoon = false,
}: ProductImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#f8fafc] text-left",
          "cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan",
          className,
        )}
        aria-label={`Enlarge ${alt}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath(previewSrc)}
          alt={alt}
          className="h-full w-full object-contain transition-transform duration-300 motion-safe:group-hover:scale-[1.02]"
        />
        {comingSoon && <ComingSoonOverlay size="md" />}
        <div
          className={cn(
            "absolute inset-0 z-[3] flex items-center justify-center bg-bg-deep/0 transition-colors motion-safe:group-hover:bg-bg-deep/45",
            comingSoon && "motion-safe:group-hover:bg-bg-deep/25",
          )}
          aria-hidden
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-bg-deep opacity-0 shadow-lg transition-opacity motion-safe:group-hover:opacity-100 group-focus-visible:opacity-100">
            <ZoomIn className="h-3.5 w-3.5" />
            Enlarge
          </span>
        </div>
      </button>
      <ImageLightbox
        src={fullSrc}
        alt={alt}
        open={open}
        onClose={() => setOpen(false)}
        comingSoon={comingSoon}
      />
    </>
  );
}
