import type { Metadata } from "next";
import { assetPath } from "@/lib/assetPath";

/** Production domain — matches public/CNAME for GitHub Pages. */
export const productionSiteUrl = "https://www.abanalytics.co.uk";

const defaultSiteUrl = productionSiteUrl;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl;

export const siteConfig = {
  name: "AB Analytics",
  tagline: "Building AI-native software for Ethiopia",
  description:
    "Operating in the UK and Ethiopia. World class machine learning, agentic AI, and software applications for startups, enterprises, and public institutions.",
  url: siteUrl,
  email: "eliyas@abanalytics.co.uk",
  address: {
    city: "",
    country: "United Kingdom",
  },
};

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;
  const pageDescription = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(siteConfig.url),
    icons: {
      icon: assetPath("/brand/monogram.png"),
      apple: assetPath("/brand/apple-touch-icon.png"),
    },
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
  };
}
