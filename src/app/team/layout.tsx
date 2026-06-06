import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Team & Delivery",
  description:
    "Meet AB Analytics leadership and explore our operational autonomy delivery pipeline and organizational structure.",
  path: "/team",
});

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
