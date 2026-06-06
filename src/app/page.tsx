import Hero from "@/components/home/Hero";
import IntakeForm from "@/components/home/IntakeForm";
import ProductsPreview from "@/components/home/ProductsPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import StatsGrid from "@/components/home/StatsGrid";
import MobileStickyCta from "@/components/ui/MobileStickyCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:space-y-8 sm:py-12 md:space-y-10 md:px-8 md:pt-16 md:pb-20">
        <StatsGrid />
        <ServicesPreview />
        <ProductsPreview />
        <IntakeForm />
      </div>
      <MobileStickyCta />
    </>
  );
}
