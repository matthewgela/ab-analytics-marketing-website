"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import type { Leader } from "@/content/team";
import { type Accent, accentCycle } from "@/lib/accent";
import { fadeUp } from "@/lib/motion";

const leaderAccents: Record<string, Accent> = {
  eliyas: "cyan",
  matthew: "violet",
  solomon: "emerald",
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
        className="group flex h-full flex-col overflow-hidden p-0"
      >
        <div
          className="relative flex h-36 items-end justify-center"
          style={{
            background: `linear-gradient(135deg, ${leader.accent}30 0%, transparent 100%)`,
          }}
        >
          <div className="grid-bg absolute inset-0 opacity-20" />
          <div
            className="relative -mb-10 flex h-24 w-24 items-center justify-center rounded-2xl text-2xl font-extrabold text-white shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${leader.accent} 0%, #0A1430 130%)`,
            }}
          >
            {leader.initials}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6 pt-14">
          <h3 className="text-xl font-bold tracking-tight text-text-on-dark">
            {leader.name}
          </h3>
          <p
            className="mb-4 text-sm font-semibold"
            style={{ color: leader.accent }}
          >
            {leader.role}
          </p>

          <div className="mb-4 flex flex-wrap gap-1.5">
            {leader.credentials.map((c) => (
              <span
                key={c}
                className="rounded-full hairline-bg-muted px-2.5 py-1 text-[11px] font-medium text-text-muted-on-dark ring-1 hairline-ring"
              >
                {c}
              </span>
            ))}
          </div>

          <p className="flex-1 text-sm leading-relaxed text-text-muted-on-dark">
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
