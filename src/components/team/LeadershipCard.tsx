"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import CertificationBadges from "@/components/team/CertificationBadges";
import type { Leader } from "@/content/team";
import { type Accent, accentCycle, accentIconClass } from "@/lib/accent";
import { cn } from "@/lib/cn";
import { fadeUp } from "@/lib/motion";

/**
 * Shared row tracks for leadership cards.
 * Row 1 auto-sizes to content (name → tags → bio); rows 2–3 stay fixed so
 * cert dividers align across both columns at lg+.
 */
export const LEADER_BOARD_ROW_TRACKS = "lg:grid-rows-[auto_7rem_3.5rem]";

const LEADER_CARD_ROWS = "sm:grid-rows-[auto_7rem_3.5rem]";

const leaderAccents: Record<string, Accent> = {
  eliyas: "cyan",
  matthew: "violet",
};

export default function LeadershipCard({
  leader,
  index = 0,
}: {
  leader: Leader;
  index?: number;
}) {
  const accent =
    leaderAccents[leader.id] ?? accentCycle[index % accentCycle.length];

  return (
    <motion.div variants={fadeUp} className="contents">
      <SpotlightCard
        accent={accent}
        dark
        layout="grid"
        className={cn(
          "group h-full",
          "grid grid-cols-1 items-stretch",
          "sm:grid-cols-[11rem_1fr]",
          LEADER_CARD_ROWS,
          "lg:row-span-3 lg:grid-rows-subgrid",
        )}
      >
        <div
          className={cn(
            "relative flex h-full min-h-full items-center justify-center px-8 py-10",
            "sm:row-span-3 sm:row-start-1 sm:border-r sm:hairline-border sm:px-6",
          )}
          style={{
            background: `linear-gradient(160deg, ${leader.accent}28 0%, transparent 70%)`,
          }}
        >
          <div className="grid-bg absolute inset-0 opacity-15" />
          <div
            className="relative z-[1] flex h-20 w-20 items-center justify-center rounded-2xl text-2xl font-extrabold text-white shadow-lg md:h-24 md:w-24 md:text-3xl"
            style={{
              background: `linear-gradient(135deg, ${leader.accent} 0%, #0A1430 130%)`,
            }}
          >
            {leader.initials}
          </div>
        </div>

        <div
          className={cn(
            "relative z-[1] flex flex-col border-t hairline-border px-6 py-5",
            "sm:col-start-2 sm:row-start-1 sm:border-t-0 sm:py-5 sm:pr-6 sm:pl-6",
          )}
        >
          <h3 className="text-xl font-bold leading-tight tracking-tight text-text-on-dark md:text-2xl">
            {leader.name}
          </h3>
          <p
            className={cn(
              "mt-1 text-sm font-semibold md:text-base",
              accentIconClass[accent],
            )}
          >
            {leader.role}
          </p>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {leader.credentials.map((c) => (
              <span
                key={c}
                className="rounded-full hairline-bg-muted px-2.5 py-1 text-[11px] font-medium text-text-muted-on-dark ring-1 hairline-ring"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="mt-3 line-clamp-6 text-sm leading-relaxed text-text-muted-on-dark md:text-[0.9375rem] md:leading-7">
            {leader.bio}
          </p>
        </div>

        <div
          className={cn(
            "relative z-[1] border-t hairline-border px-6 py-5",
            "sm:col-start-2 sm:row-start-2 sm:px-6 sm:py-5",
          )}
        >
          {leader.certifications.length > 0 ? (
            <CertificationBadges
              certifications={leader.certifications}
              provider={leader.certifications[0].provider}
            />
          ) : null}
        </div>

        <div
          className={cn(
            "relative z-[1] px-6 py-4",
            "sm:col-start-2 sm:row-start-3 sm:flex sm:items-center sm:px-6 sm:py-0",
          )}
        >
          <a
            href={leader.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-muted-on-dark transition-colors hover:text-brand-cyan"
          >
            <ExternalLink className="h-4 w-4" />
            View LinkedIn profile
          </a>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}
