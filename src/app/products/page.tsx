"use client";

import PageHero from "@/components/ui/PageHero";
import ProductGrid from "@/components/ui/ProductGrid";
import { products } from "@/content/products";

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Gateway"
        title="Products"
        description="Production-grade software platforms built for sovereign, high-stakes operational environments."
      />

      <section className="px-4 pb-16 sm:pb-24 md:px-8 md:pb-28">
        <div className="section-panel mx-auto max-w-7xl p-4 sm:p-6 md:p-8">
          <ProductGrid />

          <div className="mt-10 sm:mt-16">
            <h3 className="eyebrow mb-6 text-brand-violet">Roadmap</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {products
                .filter((p) => p.status === "validation")
                .map((product) => (
                  <div
                    key={product.id}
                    className="glass-surface-dark rounded-xl p-5"
                  >
                    <p className="text-lg font-bold text-text-on-dark">
                      {product.name}
                    </p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-text-muted-on-dark">
                      {product.domain}
                    </p>
                    <p className="mt-3 text-[10px] font-semibold text-brand-violet">
                      Undergoing National Validation Pipelines
                    </p>
                  </div>
                ))}
              <div className="flex items-center justify-center rounded-xl border border-dashed hairline-border-strong p-5">
                <p className="text-xs text-text-muted-on-dark">
                  Future platforms in development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
