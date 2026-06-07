import PageHero from "@/components/ui/PageHero";
import ServiceShowcase from "@/components/ui/ServiceShowcase";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Services"
        description="Machine learning, agentic AI, application development, and data privacy — built for the organisations and products shaping Ethiopia’s digital economy."
      />

      <section className="px-4 pb-16 sm:pb-24 md:px-8 md:pb-28">
        <div className="section-panel mx-auto max-w-7xl p-4 sm:p-6 md:p-8">
          <ServiceShowcase />
        </div>
      </section>
    </>
  );
}
