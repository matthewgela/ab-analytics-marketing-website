"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/content/services";
import { staggerContainer } from "@/lib/motion";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Enterprise Capabilities"
        title="Services"
        description="Eight core capabilities engineered for national-scale AI industrialization, sovereign data governance, and operational autonomy."
      />

      <section className="px-4 pb-16 sm:pb-24 md:px-8 md:pb-28">
        <div className="section-panel mx-auto max-w-7xl p-4 sm:p-6 md:p-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
          >
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} dark />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
