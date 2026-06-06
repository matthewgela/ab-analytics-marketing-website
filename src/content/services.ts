import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Brain,
  CircuitBoard,
  Cloud,
  Code2,
  Compass,
  LineChart,
  Lock,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  accent?: "cyan" | "violet" | "emerald" | "royal";
};

export const services: Service[] = [
  {
    id: "mlops",
    title: "Industrialized MLOps & DataOps Foundations",
    description:
      "Build automated AI factories using infrastructure-as-code and automated pipelines. Implement model drift, bias monitoring, and real-time operational platform telemetry.",
    icon: CircuitBoard,
    image: "/images/services/mlops.svg",
    accent: "cyan",
  },
  {
    id: "agentic",
    title: "Agentic Workflows & Generative AI",
    description:
      "Architecture of complex LLM ecosystems, Retrieval-Augmented Generation (RAG), and secure conversational agents optimized to interact safely with databases and secure records.",
    icon: Bot,
    image: "/images/services/agentic.svg",
    accent: "violet",
  },
  {
    id: "ml-engineering",
    title: "Production-Grade ML Engineering",
    description:
      "End-to-end model training, fine-tuning, and algorithmic tuning built to scale securely from Day 1.",
    icon: Brain,
    image: "/images/services/ml-engineering.svg",
    accent: "cyan",
  },
  {
    id: "software",
    title: "Custom Software & Digitization Platforms",
    description:
      "Architectural software builds and system integrations customized for large-scale public and private sectors.",
    icon: Code2,
    image: "/images/services/software.svg",
    accent: "royal",
  },
  {
    id: "marketing",
    title: "Data-Driven Marketing Engines",
    description:
      "Algorithmic customer segmentation, programmatic analytics, and machine-learning-driven optimization layers.",
    icon: LineChart,
    image: "/images/services/marketing.svg",
    accent: "cyan",
  },
  {
    id: "pets",
    title: "Sovereign Privacy-Enhancing Technologies (PETs)",
    description:
      "Secure computation frameworks, mathematical safety proofs, and privacy-preserving data access to maintain absolute data sovereignty.",
    icon: Lock,
    image: "/images/services/pets.svg",
    accent: "emerald",
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure & Platform Engineering",
    description:
      "Enterprise-grade cloud architecture, multi-region deployments, and platform engineering for mission-critical AI workloads.",
    icon: Cloud,
    image: "/images/services/cloud.svg",
    accent: "royal",
  },
  {
    id: "strategy",
    title: "Data & AI Transformation Strategy",
    description:
      "Strategic roadmaps for sovereign AI adoption, capability assessments, and organizational transformation aligned to national-scale outcomes.",
    icon: Compass,
    image: "/images/services/strategy.svg",
    accent: "violet",
  },
];
