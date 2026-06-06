"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import VisualFrame from "@/components/ui/VisualFrame";
import { products } from "@/content/products";
import { fadeUp } from "@/lib/motion";

const productImages: Record<string, string> = {
  adey: "/images/products/adey-dashboard.svg",
  nexio: "/images/products/nexio-dashboard.svg",
  tena: "/images/products/tenaos-concept.svg",
};

export default function ProductsPreview() {
  return (
    <section className="section-panel relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14 md:px-10">
      <div className="pointer-events-none absolute -right-20 top-0 hidden h-80 w-80 rounded-full bg-brand-violet/15 blur-[100px] sm:block" />

      <div className="relative">
        <SectionHeading
          eyebrow="Products"
          title="Software Platforms"
          description="Production-grade platforms engineered for sovereign, high-stakes environments."
          variant="dark"
        />
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:flex-wrap sm:justify-center">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-full max-w-sm sm:w-80"
            >
              <SpotlightCard
                accent="violet"
                dark
                className="overflow-hidden p-0"
                enableGlow
              >
                <VisualFrame
                  src={productImages[product.id]}
                  alt={`${product.name} dashboard`}
                  dark
                  className="mb-0 aspect-[2/1] rounded-none border-0 shadow-none sm:aspect-[16/10]"
                />
                <div className="p-4 sm:p-5">
                  <span
                    className="mb-2 inline-block max-w-full rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase leading-tight tracking-[0.1em] sm:px-3 sm:text-[10px] sm:tracking-[0.12em]"
                    style={{
                      backgroundColor: `${product.accent}33`,
                      color: "#ffffff",
                    }}
                  >
                    {product.domain}
                  </span>
                  <h3 className="font-display text-xl font-bold tracking-tight text-text-on-dark sm:text-2xl">
                    {product.name}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-text-muted-on-dark sm:line-clamp-2">
                    {product.solution}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 text-center sm:mt-8">
          <Link
            href="/products"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-brand-violet transition-colors hover:text-white"
          >
            Explore product ecosystem
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
