"use client";

import { motion } from "framer-motion";
import SimpleContactForm from "@/components/contact/SimpleContactForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeUp } from "@/lib/motion";

export default function IntakeForm() {
  return (
    <section
      id="intake"
      className="section-panel relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14 md:px-10"
    >
      <div className="mx-auto max-w-xl">
        <SectionHeading
          eyebrow="Contact Us"
          title="Get in touch"
          description="Tell us what you're building. We respond within 48 hours."
          align="center"
          variant="dark"
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SimpleContactForm formType="intake" dark />
        </motion.div>
      </div>
    </section>
  );
}
