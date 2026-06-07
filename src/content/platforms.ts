export type CloudPlatform = {
  id: string;
  name: string;
  logo: string;
  logoDark?: string;
  width: number;
  height: number;
};

export const cloudPlatforms: CloudPlatform[] = [
  {
    id: "ethio-telecom",
    name: "Ethio Telecom",
    logo: "/images/platforms/ethio-telecom.png",
    width: 440,
    height: 118,
  },
  {
    id: "aws",
    name: "Amazon Web Services",
    logo: "/images/platforms/aws.svg",
    logoDark: "/images/platforms/aws-dark.svg",
    width: 304,
    height: 182,
  },
  {
    id: "gcp",
    name: "Google Cloud",
    logo: "/images/platforms/gcp.svg",
    width: 181,
    height: 28,
  },
];

/** Prefer light-on-dark logo variants for dark UI surfaces. */
export function resolvePlatformLogo(platform: CloudPlatform) {
  return platform.logoDark ?? platform.logo;
}

export const cloudPlatformBannerLabel = "Cloud platforms";

export const cloudPlatformHeadline = "Built for cloud and local infrastructure";

export const cloudPlatformSubline =
  "We deploy on local Ethiopian infrastructure through Ethio Telecom, alongside AWS and Google Cloud for enterprise AI systems and software applications.";
