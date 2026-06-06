"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import type { Leader } from "@/content/team";
import { type Accent, accentCycle, accentIconClass } from "@/lib/accent";
import { cn } from "@/lib/cn";
import { fadeUp } from "@/lib/motion";

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
    <motion.div variants={fadeUp} className="h-full">
      <SpotlightCard
        accent={accent}
        dark
        className="group flex h-full flex-col overflow-hidden sm:flex-row"
      >
        <div
          className="relative flex shrink-0 items-center justify-center px-8 py-10 sm:w-44 sm:px-6 md:w-48"
          style={{
            background: `linear-gradient(160deg, ${leader.accent}28 0%, transparent 70%)`,
          }}
        >
          <div className="grid-bg absolute inset-0 opacity-15" />
          <div
            className="relative flex h-20 w-20 items-center justify-center rounded-2xl text-2xl font-extrabold text-white shadow-lg md:h-24 md:w-24 md:text-3xl"
            style={{
              background: `linear-gradient(135deg, ${leader.accent} 0%, #0A1430 130%)`,
            }}
          >
            {leader.initials}
          </div>
        </div>

        <div className="flex flex-1 flex-col border-t hairline-border p-6 sm:border-t-0 sm:border-l sm:py-7 sm:pr-7">
          <h3 className="text-xl font-bold leading-tight tracking-tight text-text-on-dark md:text-2xl">
            {leader.name}
          </h3>
          <p
            className={cn(
              "mt-1.5 text-sm font-semibold md:text-base",
              accentIconClass[accent],
            )}
          >
            {leader.role}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {leader.credentials.map((c) => (
              <span
                key={c}
                className="rounded-full hairline-bg-muted px-2.5 py-1 text-[11px] font-medium text-text-muted-on-dark ring-1 hairline-ring"
              >
                {c}
              </span>
            ))}
          </div>

          <p className="mt-4 flex-1 text-sm leading-relaxed text-text-muted-on-dark md:text-[0.9375rem] md:leading-7">
            {leader.bio}
          </p>

          <div className="mt-5 border-t hairline-border pt-4">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-text-muted-on-dark transition-colors group-hover:text-brand-cyan">
              <ExternalLink className="h-4 w-4" />
              View profile
            </span>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}
