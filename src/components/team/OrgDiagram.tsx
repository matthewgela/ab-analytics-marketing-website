"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Layout,
  Palette,
  Server,
} from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { deliveryDisciplines } from "@/content/team";
import {
  accentChipBgClass,
  accentCycle,
  accentIconClass,
} from "@/lib/accent";
import { fadeUp, staggerContainer } from "@/lib/motion";

const disciplineIcons = [Layout, Server, Palette, Brain, Cloud];

export default function OrgDiagram() {
  return (
    <div className="relative">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
      >
        {deliveryDisciplines.map((discipline, i) => {
          const Icon = disciplineIcons[i] ?? Layout;
          const accent = accentCycle[i % accentCycle.length];
          return (
            <motion.div key={discipline.id} variants={fadeUp} className="h-full">
              <SpotlightCard accent={accent} dark className="flex h-full flex-col p-6">
                <div
                  className={`mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${accentChipBgClass[accent]}`}
                >
                  <Icon
                    className={`h-5 w-5 ${accentIconClass[accent]}`}
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="mb-2 min-h-[2.5rem] text-base font-bold leading-tight tracking-tight text-text-on-dark">
                  {discipline.name}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted-on-dark">
                  {discipline.description}
                </p>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mx-auto my-6 hidden h-10 w-px bg-gradient-to-b from-[var(--hairline)] to-brand-cyan md:block" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-2xl"
      >
        <SpotlightCard
          accent="cyan"
          dark
          className="bg-gradient-to-br from-brand-cyan/10 to-bg-deep p-8 text-center"
        >
          <p className="eyebrow text-brand-cyan">How we deliver</p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-text-on-dark">
            Multidisciplinary by design
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-muted-on-dark">
            Every engagement draws on frontend developers, backend developers,
            UI/UX designers, AI engineers, and cloud architects — working
            together toward operational autonomy for your team.
          </p>
        </SpotlightCard>
      </motion.div>
    </div>
  );
}
