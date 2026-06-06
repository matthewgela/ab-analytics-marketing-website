export type LeaderCertification = {
  id: string;
  provider: "gcp" | "aws";
  name: string;
};

export const matthewCertifications: LeaderCertification[] = [
  {
    id: "gcp-pca",
    provider: "gcp",
    name: "Professional Cloud Architect",
  },
  {
    id: "gcp-pmle",
    provider: "gcp",
    name: "Professional ML Engineer",
  },
  {
    id: "gcp-pde",
    provider: "gcp",
    name: "Professional Data Engineer",
  },
];

export const eliyasCertifications: LeaderCertification[] = [
  {
    id: "aws-saa",
    provider: "aws",
    name: "Solutions Architect",
  },
];
