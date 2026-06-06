"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState, useSyncExternalStore } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/cn";

function subscribe() {
  return () => {};
}

export default function MobileStickyCta() {
  const { resolvedTheme } = useTheme();
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const [pastHero, setPastHero] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  const isLight = mounted && resolvedTheme === "light";
  const visible = pastHero && !footerVisible;

  useEffect(() => {
    const hero = document.getElementById("hero");
    const footer = document.querySelector("footer");
    if (!hero) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-56px 0px 0px 0px" },
    );

    heroObserver.observe(hero);

    let footerObserver: IntersectionObserver | undefined;
    if (footer) {
      footerObserver = new IntersectionObserver(
        ([entry]) => setFooterVisible(entry.isIntersecting),
        { threshold: 0, rootMargin: "0px 0px -80px 0px" },
      );
      footerObserver.observe(footer);
    }

    return () => {
      heroObserver.disconnect();
      footerObserver?.disconnect();
    };
  }, []);

  if (!isMobile) return null;

  return (
    <div
      className={cn(
        "fixed right-0 bottom-0 left-0 z-40 border-t hairline-border px-4 py-3 transition-transform duration-300 lg:hidden",
        "pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))]",
        isLight && "nav-shell",
        isLight ? "bg-[var(--nav-surface)]" : "bg-bg-deep/95",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!visible}
    >
      <Link
        href="/contact"
        className="flex min-h-11 w-full items-center justify-center rounded-full bg-brand-cyan text-sm font-medium text-bg-deep"
      >
        Initiate Partnership
      </Link>
    </div>
  );
}
