import PageHero from "@/components/ui/PageHero";
import ProductGrid from "@/components/ui/ProductGrid";

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Gateway"
        title="Products"
        description="Real products we have designed and shipped in Ethiopia — for logistics, property, and healthcare."
      />

      <section className="px-4 pb-16 sm:pb-24 md:px-8 md:pb-28">
        <div className="section-panel mx-auto max-w-7xl p-4 sm:p-6 md:p-8">
          <ProductGrid />
        </div>
      </section>
    </>
  );
}
