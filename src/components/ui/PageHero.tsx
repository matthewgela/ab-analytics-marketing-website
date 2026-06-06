"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { fadeUp, staggerContainer } from "@/lib/motion";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-[0.05]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 hidden h-96 w-[36rem] -translate-x-1/2 rounded-full bg-brand-royal/20 blur-[120px] sm:block" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-7xl px-4 pt-24 pb-6 sm:px-6 sm:pt-32 sm:pb-8 md:px-8 md:pt-40 md:pb-10"
      >
        <motion.p variants={fadeUp} className="eyebrow mb-3 text-brand-cyan sm:mb-4">
          {eyebrow}
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="max-w-3xl text-3xl font-extrabold tracking-tight text-text-on-dark sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-sm leading-relaxed text-text-muted-on-dark sm:mt-5 sm:text-base md:text-lg"
          >
            {description}
          </motion.p>
        )}
        {children}
      </motion.div>
    </section>
  );
}
