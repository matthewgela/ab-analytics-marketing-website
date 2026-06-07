import type { Metadata } from "next";

/** Production domain — add public/CNAME with this value when ready to go live. */
export const productionSiteUrl = "https://abanalytics.co.uk";

const defaultSiteUrl =
  "https://matthewgela.github.io/ab-analytics-marketing-website";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl;

export const siteConfig = {
  name: "AB Analytics",
  tagline:
    "Engineer AI that runs where stakes are highest",
  description:
    "Practitioner-led AI engineering. Google-vetted standards. Proven deployment across financial, defense, and sovereign environments.",
  url: siteUrl,
  email: "contact@abanalytics.co.uk",
  address: {
    city: "Addis Ababa",
    country: "Ethiopia",
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
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
  };
}
