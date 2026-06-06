import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Four integrated AI capability areas: MLOps, generative AI, platform engineering, and sovereign data strategy for national-scale deployment.",
  path: "/services",
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
