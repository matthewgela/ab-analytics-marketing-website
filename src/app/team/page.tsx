"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import PipelineSteps from "@/components/ui/PipelineSteps";
import LeadershipCard from "@/components/team/LeadershipCard";
import OrgDiagram from "@/components/team/OrgDiagram";
import { leaders } from "@/content/team";
import { staggerContainer } from "@/lib/motion";

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team & Delivery"
        title="Practitioner-Led Leadership"
        description="Elite practitioners with proven execution across global platforms, sovereign environments, and regional institutions."
      />

      <section className="px-4 pb-16 sm:pb-24 md:px-8 md:pb-28">
        <div className="section-panel mx-auto max-w-7xl p-4 sm:p-6 md:p-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-6 md:grid-cols-3"
          >
            {leaders.map((leader, index) => (
              <LeadershipCard
                key={leader.id}
                leader={leader}
                index={index}
              />
            ))}
          </motion.div>

          <div className="mt-12 sm:mt-24">
            <SectionHeading
              eyebrow="Delivery Model"
              title="Operational Autonomy Pipeline"
              description="A proven four-stage onboarding pipeline that transitions technical capabilities to your internal team."
              variant="dark"
            />
            <PipelineSteps />
          </div>

          <div className="mt-12 sm:mt-24">
            <SectionHeading
              eyebrow="Structure"
              title="Organization & Delivery Model"
              description="Four specialized pods converging on operational autonomy for every engagement."
              variant="dark"
            />
            <OrgDiagram />
          </div>
        </div>
      </section>
    </>
  );
}
