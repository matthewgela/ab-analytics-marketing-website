"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { products } from "@/content/products";
import SpotlightCard from "@/components/ui/SpotlightCard";
import VisualFrame from "@/components/ui/VisualFrame";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/cn";

const productImages: Record<string, string> = {
  adey: "/images/products/adey-dashboard.svg",
  nexio: "/images/products/nexio-dashboard.svg",
  tena: "/images/products/tenaos-concept.svg",
};

export default function ProductGrid() {
  const [activeId, setActiveId] = useState(products[0].id);
  const active = products.find((p) => p.id === activeId) ?? products[0];

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2 sm:mb-8">
        {products.map((product) => (
          <button
            key={product.id}
            type="button"
            onClick={() => setActiveId(product.id)}
            className={cn(
              "min-h-11 rounded-full px-4 py-2.5 text-sm font-medium transition-all sm:px-5",
              activeId === product.id
                ? "bg-brand-violet/20 text-brand-violet ring-1 ring-brand-violet/40 glow-violet"
                : "glass-surface-dark text-text-muted-on-dark hover:border-brand-violet/30 hover:text-text-on-dark",
            )}
          >
            {product.name}
          </button>
        ))}
      </div>

      <motion.div
        key={active.id}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="grid gap-6 lg:grid-cols-2 lg:gap-8"
      >
        <SpotlightCard accent="violet" dark className="space-y-4 p-4 sm:space-y-6 sm:p-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span
              className="inline-block max-w-full rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase leading-tight tracking-[0.1em] sm:px-3 sm:text-[10px] sm:tracking-[0.12em]"
              style={{
                backgroundColor: `${active.accent}33`,
                color: "#ffffff",
              }}
            >
              {active.domain}
            </span>
            {active.status === "validation" && (
              <span className="rounded-full bg-brand-violet/20 px-2.5 py-1 text-[9px] font-semibold text-brand-violet sm:px-3 sm:text-[10px]">
                Undergoing National Validation Pipelines
              </span>
            )}
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-text-on-dark sm:text-3xl">
            {active.name}
          </h3>

          <div className="space-y-4">
            {(["Challenge", "Solution", "Impact"] as const).map((label) => {
              const key = label.toLowerCase() as
                | "challenge"
                | "solution"
                | "impact";
              return (
                <div key={label}>
                  <p className="eyebrow mb-1 text-brand-violet">{label}</p>
                  <p className="text-sm leading-relaxed text-text-muted-on-dark">
                    {active[key]}
                  </p>
                </div>
              );
            })}
          </div>
        </SpotlightCard>

        <VisualFrame
          src={productImages[active.id]}
          alt={`${active.name} product preview`}
          dark
          className="aspect-[2/1] w-full transition-shadow duration-300 hover:glow-violet sm:aspect-[4/3]"
        />
      </motion.div>
    </div>
  );
}
