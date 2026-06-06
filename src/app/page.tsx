import Hero from "@/components/home/Hero";
import IntakeForm from "@/components/home/IntakeForm";
import ProductsPreview from "@/components/home/ProductsPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import StatsGrid from "@/components/home/StatsGrid";
import CloudPlatformBanner from "@/components/ui/CloudPlatformBanner";
import MobileStickyCta from "@/components/ui/MobileStickyCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-7xl space-y-8 px-4 pb-8 pt-6 sm:space-y-8 sm:pb-12 sm:pt-8 md:space-y-10 md:px-8 md:pb-20 md:pt-10">
        <CloudPlatformBanner variant="featured" />
        <StatsGrid />
        <ServicesPreview />
        <ProductsPreview />
        <IntakeForm />
      </div>
      <MobileStickyCta />
    </>
  );
}
