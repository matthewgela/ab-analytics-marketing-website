"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, RefreshCw, Search, Server } from "lucide-react";
import { useRef } from "react";
import { pipelineSteps } from "@/content/pipeline";
import {
  accentChipBgClass,
  accentIconClass,
  accentSolidClass,
} from "@/lib/accent";
import { fadeUp } from "@/lib/motion";

const iconMap = {
  Search,
  Code2,
  Server,
  RefreshCw,
};

const stepAccents = ["cyan", "violet", "emerald", "cyan"] as const;

export default function PipelineSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative">
      <div className="absolute top-9 right-8 left-8 hidden h-0.5 bg-[var(--hairline)] lg:block">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-brand-cyan via-brand-violet to-brand-emerald"
          style={{ width: lineWidth }}
        />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {pipelineSteps.map((step, index) => {
          const Icon = iconMap[step.icon];
          const accent = stepAccents[index];
          return (
            <motion.div
              key={step.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.12 }}
              className="relative"
            >
              <div
                className={`relative mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-2xl glass-surface-dark shadow-md transition-all duration-300 hover:-translate-y-1 hover:glow-cyan ${accentChipBgClass[accent]}`}
              >
                <Icon
                  className={`h-7 w-7 ${accentIconClass[accent]}`}
                  strokeWidth={1.5}
                />
                <span
                  className={`absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold shadow-sm ${accentSolidClass[accent]}`}
                >
                  {step.step}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold tracking-tight text-text-on-dark">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted-on-dark">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
