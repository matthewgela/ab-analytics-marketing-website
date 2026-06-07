"use client";

import { motion } from "framer-motion";
import StatTile from "@/components/ui/StatTile";
import SectionHeading from "@/components/ui/SectionHeading";
import { stats } from "@/content/pipeline";
import { accentCycle } from "@/lib/accent";
import { staggerContainer } from "@/lib/motion";

export default function StatsGrid() {
  return (
    <section className="section-panel relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14 md:px-10">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-[0.05]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 hidden h-80 w-[32rem] -translate-x-1/2 rounded-full bg-brand-cyan/10 blur-[100px] sm:block" />
      <div className="pointer-events-none absolute right-0 bottom-0 hidden h-64 w-64 rounded-full bg-brand-violet/10 blur-[80px] sm:block" />

      <div className="relative">
        <SectionHeading
          eyebrow="Track Record"
          title="Engineering at National Scale"
          description="Quantified outcomes from production deployments across regulated industries."
          align="center"
          variant="dark"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <StatTile
              key={stat.value}
              value={stat.value}
              label={stat.label}
              variant="dark"
              accent={accentCycle[i % accentCycle.length]}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
