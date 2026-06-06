import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Eight enterprise AI capabilities: MLOps, generative AI, ML engineering, custom software, marketing, PETs, cloud infrastructure, and transformation strategy.",
  path: "/services",
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
