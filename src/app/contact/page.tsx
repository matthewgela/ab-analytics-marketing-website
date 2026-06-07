"use client";

import { Mail, MapPin } from "lucide-react";
import SimpleContactForm from "@/components/contact/SimpleContactForm";
import PageHero from "@/components/ui/PageHero";
import GlassCard from "@/components/ui/GlassCard";
import { siteConfig } from "@/lib/seo";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Initiate a partnership conversation. We respond to all enterprise inquiries within 48 hours."
      />

      <section className="px-4 pb-16 sm:pb-24 md:px-8 md:pb-28">
        <div className="section-panel mx-auto max-w-5xl p-4 sm:p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
            <div className="order-2 space-y-4 sm:space-y-5 lg:order-1 lg:col-span-2">
              <GlassCard dark>
                <div className="mb-3 flex items-center gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-brand-cyan" />
                  <h3 className="font-bold text-text-on-dark">Headquarters</h3>
                </div>
                <p className="text-sm leading-relaxed text-text-muted-on-dark">
                  {siteConfig.address.city}, {siteConfig.address.country}
                  <br />
                  International deployment networks across three continents.
                </p>
              </GlassCard>
              <GlassCard dark>
                <div className="mb-3 flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-brand-cyan" />
                  <h3 className="font-bold text-text-on-dark">Email</h3>
                </div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all text-sm text-brand-cyan transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </GlassCard>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-3">
              <SimpleContactForm formType="contact" dark />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
