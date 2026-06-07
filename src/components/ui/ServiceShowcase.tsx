"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Layers, Target } from "lucide-react";
import { useRef, useState } from "react";
import { services } from "@/content/services";
import CloudPlatformBanner from "@/components/ui/CloudPlatformBanner";
import SpotlightCard from "@/components/ui/SpotlightCard";
import VisualFrame from "@/components/ui/VisualFrame";
import {
  accentBorderHoverClass,
  accentHoverGlowClass,
  accentIconClass,
  accentMobileActiveBorderClass,
  accentRingClass,
  accentSolidClass,
  accentTabHoverGlowClass,
  accentUnderlineHoverClass,
  type Accent,
} from "@/lib/accent";
import { cn } from "@/lib/cn";

const detailBlocks = [
  { label: "What we deliver", key: "capabilities" as const, icon: Layers },
  { label: "Outcomes", key: "outcomes" as const, icon: Target },
];

export default function ServiceShowcase() {
  const [activeId, setActiveId] = useState(services[0].id);
  const detailRef = useRef<HTMLDivElement>(null);
  const active =
    services.find((service) => service.id === activeId) ?? services[0];
  const activeIndex = services.findIndex((service) => service.id === activeId);
  const accent = (active.accent ?? "cyan") as Accent;
  const ActiveIcon = active.icon;

  const selectService = (id: string) => {
    setActiveId(id);
    requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Service capabilities"
        className="flex flex-col gap-2.5 sm:grid sm:grid-cols-2 sm:items-stretch sm:gap-4 lg:grid-cols-4"
      >
        {services.map((service, index) => {
          const isActive = service.id === activeId;
          const serviceAccent = (service.accent ?? "cyan") as Accent;
          const Icon = service.icon;

          return (
            <button
              key={service.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`service-panel-${service.id}`}
              id={`service-tab-${service.id}`}
              onClick={() => selectService(service.id)}
              className={cn(
                "interactive-surface group relative flex w-full items-center gap-3 rounded-2xl border text-left",
                "glass-surface-dark px-3.5 py-3.5 sm:h-full sm:flex-col sm:items-center sm:px-4 sm:py-6 sm:text-center",
                "motion-safe:sm:hover:-translate-y-3 motion-safe:sm:hover:scale-[1.05]",
                accentBorderHoverClass[serviceAccent],
                accentTabHoverGlowClass[serviceAccent],
                isActive
                  ? cn(
                      "bg-bg-deep/30",
                      accentMobileActiveBorderClass[serviceAccent],
                      "sm:ring-2",
                      accentRingClass[serviceAccent],
                    )
                  : "hairline-border sm:hover:bg-bg-deep/35",
              )}
            >
              <span
                className={cn(
                  "hidden font-mono text-[10px] font-semibold tracking-[0.2em] sm:mb-3 sm:block",
                  accentIconClass[serviceAccent],
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div
                className={cn(
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl hairline-bg-muted transition-all duration-500 motion-safe:group-hover:scale-125 motion-safe:sm:group-hover:shadow-[0_0_24px_currentColor] sm:mb-3",
                  accentIconClass[serviceAccent],
                )}
              >
                <Icon
                  className="h-5 w-5 transition-transform duration-500 motion-safe:group-hover:scale-110"
                  strokeWidth={1.75}
                />
              </div>

              <div className="min-w-0 flex-1 sm:w-full sm:flex-none">
                <p className="eyebrow text-[10px] text-brand-cyan">
                  {service.tagline}
                </p>
                <h3 className="mt-1 text-sm font-bold leading-snug tracking-tight text-text-on-dark sm:mt-2">
                  {service.title}
                </h3>
              </div>

              <span
                className={cn(
                  "shrink-0 font-mono text-[10px] font-semibold tracking-[0.2em] sm:hidden",
                  accentIconClass[serviceAccent],
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <ChevronRight
                className={cn(
                  "h-4 w-4 shrink-0 opacity-50 sm:hidden",
                  isActive ? accentIconClass[serviceAccent] : "text-text-muted-on-dark",
                )}
                strokeWidth={1.75}
                aria-hidden
              />

              <span
                className={cn(
                  "mx-auto mt-4 hidden h-1 shrink-0 rounded-full transition-all duration-500 sm:mt-auto sm:block",
                  isActive
                    ? cn("w-12", accentSolidClass[serviceAccent])
                    : cn(
                        "w-8 bg-white/10",
                        "motion-safe:group-hover:w-12",
                        accentUnderlineHoverClass[serviceAccent],
                      ),
                )}
                aria-hidden
              />
            </button>
          );
        })}
      </div>

      <div ref={detailRef} className="mt-6 scroll-mt-28 sm:mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            id={`service-panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`service-tab-${active.id}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <SpotlightCard
              accent={accent}
              dark
              className="overflow-hidden p-0"
            >
              <div className="grid lg:grid-cols-2">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-xl hairline-bg-muted",
                        accentIconClass[accent],
                      )}
                    >
                      <ActiveIcon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="eyebrow text-brand-cyan">{active.tagline}</p>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span
                          className={cn(
                            "font-mono text-xs font-semibold tracking-[0.2em]",
                            accentIconClass[accent],
                          )}
                        >
                          {String(activeIndex + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-xl font-bold tracking-tight text-text-on-dark sm:text-2xl">
                          {active.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-text-muted-on-dark sm:text-[0.9375rem] sm:leading-7">
                    {active.summary}
                  </p>

                  {active.id === "platform" && (
                    <CloudPlatformBanner
                      variant="inline"
                      className="mt-6"
                    />
                  )}

                  <div className="mt-6 space-y-4 sm:mt-8">
                    {detailBlocks.map(({ label, key, icon: BlockIcon }) => (
                      <div
                        key={label}
                        className={cn(
                          "interactive-surface rounded-xl border hairline-border bg-bg-deep/25 p-4 sm:p-5",
                          "motion-safe:hover:-translate-y-1.5 hover:bg-bg-deep/40",
                          accentBorderHoverClass[accent],
                          accentHoverGlowClass[accent],
                        )}
                      >
                        <div className="mb-3 flex items-center gap-2">
                          <BlockIcon
                            className={cn("h-4 w-4", accentIconClass[accent])}
                            strokeWidth={1.75}
                          />
                          <p
                            className={cn(
                              "eyebrow text-[11px]",
                              accentIconClass[accent],
                            )}
                          >
                            {label}
                          </p>
                        </div>
                        <ul className="space-y-2.5">
                          {active[key].map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-sm leading-relaxed text-text-muted-on-dark"
                            >
                              <CheckCircle2
                                className={cn(
                                  "mt-0.5 h-4 w-4 shrink-0",
                                  accentIconClass[accent],
                                )}
                                strokeWidth={1.75}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t hairline-border p-6 sm:p-8 md:border-t-0 md:border-l">
                  <VisualFrame
                    src={active.image}
                    alt={active.title}
                    dark
                    glow
                    fit="contain"
                    canvas="dark"
                    className="aspect-[16/10] w-full"
                  />
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
