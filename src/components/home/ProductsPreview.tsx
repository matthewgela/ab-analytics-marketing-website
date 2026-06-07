"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import ProductImage from "@/components/ui/ProductImage";
import { products } from "@/content/products";
import { productAssets } from "@/lib/productAssets";
import { fadeUp } from "@/lib/motion";

export default function ProductsPreview() {
  return (
    <section className="section-panel relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14 md:px-10">
      <div className="pointer-events-none absolute -right-20 top-0 hidden h-80 w-80 rounded-full bg-brand-violet/15 blur-[100px] sm:block" />

      <div className="relative">
        <SectionHeading
          eyebrow="Products"
          title="Software Platforms"
          description="Applications we have built and run in Ethiopia — starting with logistics, property, and healthcare."
          align="center"
          variant="dark"
        />
        <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, i) => {
            const assets = productAssets[product.id];

            return (
              <motion.div
                key={product.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex h-full w-full"
              >
                <SpotlightCard
                  accent="violet"
                  dark
                  className="flex h-full w-full flex-col overflow-hidden p-0"
                  enableGlow
                >
                  <ProductImage
                    previewSrc={assets.preview}
                    fullSrc={assets.full}
                    alt={`${product.name} dashboard`}
                    comingSoon={product.status === "validation"}
                    className="rounded-none"
                  />
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span
                        className="inline-block max-w-full rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase leading-tight tracking-[0.1em] sm:px-3 sm:text-[10px] sm:tracking-[0.12em]"
                        style={{
                          backgroundColor: `${product.accent}33`,
                          color: "#ffffff",
                        }}
                      >
                        {product.domain}
                      </span>
                      {product.status === "validation" && (
                        <span className="rounded-full bg-amber-500/15 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-amber-400 sm:text-[10px]">
                          Coming soon
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-text-on-dark sm:text-2xl">
                      {product.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 min-h-[2.75rem] text-sm leading-relaxed text-text-muted-on-dark sm:min-h-[3rem]">
                      {product.solution}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
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
