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
    bio: "Leads strategy and delivery at AB Analytics, with experience guiding data science teams in privacy-sensitive settings. Specialises in privacy-enhancing technologies — from differential privacy to data protection — and production ML spanning computer vision and embedded systems.",
    initials: "EW",
    accent: "#0EA5E9",
    credentials: ["Privacy-Enhancing Technologies", "Computer Vision"],
    certifications: eliyasCertifications,
    linkedin: "https://uk.linkedin.com/in/eliyas-woldegeorgis-850767b9",
  },
  {
    id: "matthew",
    name: "Matthew Gela",
    role: "Chief Technology Officer",
    bio: "Drives technical strategy and delivery at AB Analytics, with experience leading multidisciplinary data science and engineering teams. Specialises in LLM and generative AI — from chatbots to production-scale deployments — and end-to-end machine learning on cloud-native platforms.",
    initials: "MG",
    accent: "#8B5CF6",
    credentials: ["LLM & Generative AI", "Cloud-Native ML Engineering"],
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
      "Production interfaces, design systems, and performant client applications.",
  },
  {
    id: "backend",
    name: "Backend Developers",
    description:
      "APIs, data layers, integrations, and platform services built to scale.",
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
      "Infrastructure-as-code, cloud design, and operational telemetry.",
  },
  {
    id: "data-engineer",
    name: "Data Engineers",
    description:
      "Data pipelines, warehousing, and platform engineering that keep models and applications fed with reliable data.",
  },
  {
    id: "project-manager",
    name: "Project Managers",
    description:
      "Delivery planning, stakeholder coordination, and clear communication from discovery through managed services.",
  },
];
