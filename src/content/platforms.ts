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

export const cloudPlatformBannerLabel = "Cloud platforms";

export const cloudPlatformHeadline = "Built for enterprise cloud";

export const cloudPlatformSubline =
  "Mission-critical systems engineered and deployed on AWS and Google Cloud Platform.";
