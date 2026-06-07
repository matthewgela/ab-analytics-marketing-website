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
  const isMobile = useMediaQuery("(max-width: 767px)");
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const [pastHero, setPastHero] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const [intakeVisible, setIntakeVisible] = useState(false);

  const isLight = mounted && resolvedTheme === "light";
  const visible = pastHero && !footerVisible && !intakeVisible;

  useEffect(() => {
    const hero = document.getElementById("hero");
    const footer = document.querySelector("footer");
    const intake = document.getElementById("intake");
    if (!hero) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-64px 0px 0px 0px" },
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

    let intakeObserver: IntersectionObserver | undefined;
    if (intake) {
      intakeObserver = new IntersectionObserver(
        ([entry]) => setIntakeVisible(entry.isIntersecting),
        { threshold: 0, rootMargin: "0px 0px -72px 0px" },
      );
      intakeObserver.observe(intake);
    }

    return () => {
      heroObserver.disconnect();
      footerObserver?.disconnect();
      intakeObserver?.disconnect();
    };
  }, []);

  if (!isMobile) return null;

  return (
    <div
      className={cn(
        "fixed right-0 bottom-0 left-0 z-40 border-t hairline-border px-4 py-3 transition-transform duration-300 md:hidden",
        "pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))]",
        isLight && "nav-shell",
        isLight ? "bg-[var(--nav-surface)]" : "bg-bg-deep/95",
        visible
          ? "pointer-events-auto translate-y-0"
          : "pointer-events-none translate-y-full",
      )}
      aria-hidden={!visible}
    >
      <Link
        href="/contact"
        tabIndex={visible ? 0 : -1}
        className="flex min-h-11 w-full items-center justify-center rounded-full bg-brand-cyan text-sm font-medium text-bg-deep"
      >
        Contact Us
      </Link>
    </div>
  );
}
