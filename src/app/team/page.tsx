"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import PipelineSteps from "@/components/ui/PipelineSteps";
import LeadershipCard, {
  LEADER_BOARD_ROW_TRACKS,
} from "@/components/team/LeadershipCard";
import OrgDiagram from "@/components/team/OrgDiagram";
import { leaders } from "@/content/team";
import { cn } from "@/lib/cn";
import { staggerContainer } from "@/lib/motion";

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team & Delivery"
        title="Leadership"
        description="A UK-founded team with hands-on experience delivering AI and software for Ethiopian businesses, institutions, and international clients."
      />

      <section className="px-4 pb-16 sm:pb-24 md:px-8 md:pb-28">
        <div className="section-panel mx-auto max-w-7xl p-4 sm:p-6 md:p-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className={cn(
              "grid min-w-0 items-stretch gap-6 lg:grid-cols-2 lg:gap-8",
              LEADER_BOARD_ROW_TRACKS,
            )}
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
              title="Delivery approach"
              description="We take care of your infrastructure needs. A four-stage process from discovery through to software your team can use on a yearly subscription or licence."
              variant="dark"
            />
            <PipelineSteps />
          </div>

          <div className="mt-12 sm:mt-24">
            <SectionHeading
              eyebrow="Structure"
              title="Organisation & delivery model"
              description="A multidisciplinary team spanning design, engineering, and cloud architecture, building software we host and manage so you can focus on your business."
              variant="dark"
            />
            <OrgDiagram />
          </div>
        </div>
      </section>
    </>
  );
}
