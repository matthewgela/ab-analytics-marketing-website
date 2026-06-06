"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
  variant = "light",
}: SectionHeadingProps) {
  const isDark = variant === "dark";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={cn(
        "mb-8 max-w-3xl sm:mb-12",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="eyebrow mb-2 text-brand-cyan sm:mb-3">{eyebrow}</p>
      )}
      <h2
        className={cn(
          "font-display text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl",
          isDark ? "text-text-on-dark" : "text-text-primary",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 text-sm leading-relaxed sm:mt-4 sm:text-base md:text-lg",
            isDark ? "text-text-muted-on-dark" : "text-text-muted",
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
