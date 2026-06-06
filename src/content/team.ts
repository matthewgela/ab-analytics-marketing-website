import type { LeaderCertification } from "@/content/certifications";
import {
  eliyasCertifications,
  matthewCertifications,
} from "@/content/certifications";

export type Leader = {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  accent: string;
  credentials: string[];
  certifications: LeaderCertification[];
  linkedin: string;
};

export const leaders: Leader[] = [
  {
    id: "eliyas",
    name: "Eliyas Woldegeorgis",
    role: "Chief Executive Officer",
    bio: "PhD in AI Robustness and Privacy. Over 8 years leading data science. Former Managing Data Scientist leading massive privacy evaluations for global, highly-regulated platforms (TikTok).",
    initials: "EW",
    accent: "#0EA5E9",
    credentials: ["PhD, AI Privacy", "Ex-TikTok", "Data Science Lead"],
    certifications: eliyasCertifications,
    linkedin: "https://uk.linkedin.com/in/eliyas-woldegeorgis-850767b9",
  },
  {
    id: "matthew",
    name: "Matthew Gela",
    role: "Chief Technology Officer",
    bio: "Principal AI Engineer and former Technical Delivery Lead on behalf of a premier global Google Cloud Partner of the Year. Triple-certified Google Cloud Professional — Cloud Architect, ML Engineer, and Data Engineer. Terraform Certified Associate.",
    initials: "MG",
    accent: "#8B5CF6",
    credentials: ["Terraform Certified Associate"],
    certifications: matthewCertifications,
    linkedin: "https://uk.linkedin.com/in/mgela",
  },
];

export type DeliveryDiscipline = {
  id: string;
  name: string;
  description: string;
};

export const deliveryDisciplines: DeliveryDiscipline[] = [
  {
    id: "frontend",
    name: "Frontend Developers",
    description:
      "Production-grade interfaces, design systems, and performant client applications.",
  },
  {
    id: "backend",
    name: "Backend Developers",
    description:
      "APIs, data layers, integrations, and platform services built for scale.",
  },
  {
    id: "design",
    name: "UI/UX Designers",
    description:
      "User research, interaction design, and cohesive product experiences.",
  },
  {
    id: "ai",
    name: "AI Engineers",
    description:
      "ML engineering, generative AI systems, and production model deployment.",
  },
  {
    id: "cloud",
    name: "Cloud Architects",
    description:
      "Infrastructure-as-code, sovereign cloud design, and operational telemetry.",
  },
];
