"use client";

import { motion } from "framer-motion";
import { Compass, Code2, ShieldCheck, Users } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { orgPods } from "@/content/team";
import {
  accentChipBgClass,
  accentCycle,
  accentIconClass,
} from "@/lib/accent";
import { fadeUp, staggerContainer } from "@/lib/motion";

const podIcons = [Compass, Code2, ShieldCheck, Users];

export default function OrgDiagram() {
  return (
    <div className="relative">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {orgPods.map((pod, i) => {
          const Icon = podIcons[i] ?? Compass;
          const accent = accentCycle[i % accentCycle.length];
          return (
            <motion.div key={pod.id} variants={fadeUp} className="h-full">
              <SpotlightCard accent={accent} dark className="h-full p-6">
                <div
                  className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${accentChipBgClass[accent]}`}
                >
                  <Icon
                    className={`h-5 w-5 ${accentIconClass[accent]}`}
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="mb-2 text-base font-bold tracking-tight text-text-on-dark">
                  {pod.name}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted-on-dark">
                  {pod.description}
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
        className="mx-auto max-w-xl"
      >
        <SpotlightCard
          accent="royal"
          dark
          className="bg-gradient-to-br from-brand-royal/80 to-bg-deep p-8 text-center"
        >
          <p className="eyebrow text-brand-cyan">Delivery Model</p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-text-on-dark">
            Operational Autonomy
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-muted-on-dark">
            All four pods converge on a single outcome: your team owns the full
            technology stack, end to end.
          </p>
        </SpotlightCard>
      </motion.div>
    </div>
  );
}
