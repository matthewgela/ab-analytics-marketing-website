"use client";

import { motion } from "framer-motion";
import { BarChart3, CircleAlert, Sparkles } from "lucide-react";
import { products } from "@/content/products";
import VisualFrame from "@/components/ui/VisualFrame";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/cn";

const productImages: Record<string, string> = {
  adey: "/images/products/adey-dashboard.svg",
  nexio: "/images/products/nexio-dashboard.svg",
  tena: "/images/products/tenaos-concept.svg",
};

const detailBlocks = [
  { label: "Challenge", key: "challenge" as const, icon: CircleAlert },
  { label: "Solution", key: "solution" as const, icon: Sparkles },
  { label: "Impact", key: "impact" as const, icon: BarChart3 },
];

export default function ProductGrid() {
  return (
    <div>
      <nav
        aria-label="Product sections"
        className="sticky top-14 z-20 mb-12 flex flex-wrap gap-2 border-b hairline-border pb-4 sm:top-16 sm:mb-16 sm:gap-3 sm:pb-5"
      >
        {products.map((product) => (
          <a
            key={product.id}
            href={`#${product.id}`}
            className="inline-flex min-h-10 items-center gap-2 rounded-full glass-surface-dark px-4 py-2 text-sm font-medium text-text-muted-on-dark transition-colors hover:text-text-on-dark"
          >
            {product.name}
            {product.status === "validation" && (
              <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-500">
                Roadmap
              </span>
            )}
          </a>
        ))}
      </nav>

      <div className="flex flex-col gap-20 sm:gap-28">
        {products.map((product, index) => {
          const reversed = index % 2 === 1;

          return (
            <motion.section
              key={product.id}
              id={product.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="scroll-mt-28"
            >
              <div
                className={cn(
                  "grid items-start gap-10 lg:grid-cols-2 lg:gap-14",
                  reversed &&
                    "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
                )}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span
                      className="inline-block max-w-full rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em]"
                      style={{
                        backgroundColor: `${product.accent}1f`,
                        color: product.accent,
                        boxShadow: `inset 0 0 0 1px ${product.accent}3d`,
                      }}
                    >
                      {product.domain}
                    </span>
                    {product.status === "live" ? (
                      <span className="rounded-full bg-brand-emerald/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-emerald">
                        In production
                      </span>
                    ) : (
                      <span className="rounded-full bg-amber-500/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-500">
                        Roadmap
                      </span>
                    )}
                  </div>

                  <div className="mt-7 flex items-baseline gap-3 sm:mt-8">
                    <span
                      aria-hidden
                      className="font-mono text-sm font-semibold tracking-[0.2em]"
                      style={{ color: product.accent }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-3xl font-bold tracking-tight text-text-on-dark sm:text-4xl">
                      {product.name}
                    </h3>
                  </div>

                  <div className="mt-10 space-y-4 sm:mt-12 sm:space-y-5">
                    {detailBlocks.map(({ label, key, icon: Icon }) => (
                      <div
                        key={label}
                        className="glass-surface-dark rounded-xl p-4 sm:p-5"
                        style={{ borderLeft: `3px solid ${product.accent}` }}
                      >
                        <div className="mb-2 flex items-center gap-2">
                          <Icon
                            className="h-4 w-4 shrink-0"
                            style={{ color: product.accent }}
                            strokeWidth={1.75}
                          />
                          <p
                            className="eyebrow text-[11px]"
                            style={{ color: product.accent }}
                          >
                            {label}
                          </p>
                        </div>
                        <p className="text-sm leading-relaxed text-text-muted-on-dark sm:leading-7">
                          {product[key]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.18] blur-[110px] lg:block"
                    style={{ backgroundColor: product.accent }}
                  />
                  <VisualFrame
                    src={productImages[product.id]}
                    alt={`${product.name} product preview`}
                    dark
                    glow
                    className="relative aspect-[2/1] w-full sm:aspect-[16/10] lg:aspect-[4/3]"
                  />
                </div>
              </div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
}
