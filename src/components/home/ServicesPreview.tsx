"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/content/services";
import { staggerContainer } from "@/lib/motion";

export default function ServicesPreview() {
  const preview = services.slice(0, 3);

  return (
    <section className="section-panel relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14 md:px-10">
      <SectionHeading
        eyebrow="Capabilities"
        title="Who We Are"
        description="Elite artificial intelligence engineering specializing in the industrialization of machine learning and generative AI."
        align="center"
        variant="dark"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {preview.map((service) => (
          <ServiceCard key={service.id} service={service} dark />
        ))}
      </motion.div>
      <div className="mt-10 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan transition-colors hover:text-white"
        >
          Explore all services
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
