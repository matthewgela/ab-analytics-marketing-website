import type { LucideIcon } from "lucide-react";
import {
  Bot,
  CircuitBoard,
  Cloud,
  Lock,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  summary: string;
  capabilities: string[];
  outcomes: string[];
  icon: LucideIcon;
  image: string;
  accent?: "cyan" | "violet" | "emerald" | "royal";
};

export const services: Service[] = [
  {
    id: "mlops",
    title: "Industrialized MLOps & Production ML",
    shortTitle: "MLOps & Production ML",
    tagline: "AI factory foundations",
    description:
      "Automated model pipelines, infrastructure-as-code, and production ML engineering built for national-scale deployment.",
    summary:
      "We build the operational backbone that turns experimental models into reliable production systems — automated pipelines, observability, and engineering standards that hold up in regulated, high-stakes environments.",
    capabilities: [
      "MLOps and DataOps pipeline design with infrastructure-as-code",
      "End-to-end model training, fine-tuning, and lifecycle management",
      "Model drift, bias monitoring, and real-time platform telemetry",
      "CI/CD for ML workloads with reproducible training and deployment",
    ],
    outcomes: [
      "Repeatable model deployment without manual intervention",
      "Full operational visibility across training and inference",
      "Production-grade ML that scales securely from day one",
    ],
    icon: CircuitBoard,
    image: "/images/services/mlops.svg",
    accent: "cyan",
  },
  {
    id: "agentic",
    title: "Agentic & Generative AI Systems",
    shortTitle: "Generative AI",
    tagline: "LLM ecosystems at scale",
    description:
      "Complex LLM architectures, RAG pipelines, and secure conversational agents for enterprise and sovereign data environments.",
    summary:
      "We architect generative AI systems that go beyond demos — retrieval-augmented generation, multi-agent workflows, and guardrailed LLM applications designed to interact safely with databases, documents, and secure records.",
    capabilities: [
      "Retrieval-Augmented Generation (RAG) and knowledge-base integration",
      "Multi-agent orchestration and workflow automation",
      "Secure conversational agents with role-based data access",
      "Prompt engineering, evaluation frameworks, and safety guardrails",
    ],
    outcomes: [
      "Production LLM applications with measurable accuracy and safety",
      "Agents that operate within sovereign data boundaries",
      "Generative AI integrated into existing enterprise workflows",
    ],
    icon: Bot,
    image: "/images/services/agentic.svg",
    accent: "violet",
  },
  {
    id: "platform",
    title: "Platform Engineering & Cloud Infrastructure",
    shortTitle: "Platform & Cloud",
    tagline: "Systems that scale",
    description:
      "Custom software platforms, cloud architecture, and digitization systems engineered for mission-critical workloads.",
    summary:
      "From sovereign cloud design to full-stack platform builds, we deliver the software and infrastructure layer that AI systems run on — multi-region deployments, custom digitization platforms, and enterprise integrations for public and private sector institutions.",
    capabilities: [
      "Enterprise cloud architecture and multi-region deployments",
      "Custom software and large-scale digitization platforms",
      "API design, system integration, and data pipeline engineering",
      "Platform engineering with Terraform, Kubernetes, and IaC standards",
    ],
    outcomes: [
      "Mission-critical infrastructure with sovereign deployment options",
      "Unified platforms replacing fragmented legacy systems",
      "Cloud environments optimized for AI and data-intensive workloads",
    ],
    icon: Cloud,
    image: "/images/services/cloud.svg",
    accent: "emerald",
  },
  {
    id: "sovereign",
    title: "Sovereign Data, Privacy & AI Strategy",
    shortTitle: "Sovereign Data & Strategy",
    tagline: "Governance and transformation",
    description:
      "Privacy-enhancing technologies, data sovereignty frameworks, and strategic roadmaps for national-scale AI adoption.",
    summary:
      "We help organizations adopt AI without compromising data sovereignty — privacy-enhancing computation, mathematical safety proofs, capability assessments, and transformation roadmaps aligned to regulated, national-scale outcomes.",
    capabilities: [
      "Privacy-Enhancing Technologies (PETs) and secure computation",
      "Data sovereignty mapping and governance framework design",
      "AI capability assessments and transformation roadmaps",
      "Algorithmic analytics, segmentation, and data-driven decision layers",
    ],
    outcomes: [
      "Absolute data sovereignty with privacy-preserving AI access",
      "Clear strategic path from assessment to production deployment",
      "Organizational readiness for long-term operational autonomy",
    ],
    icon: Lock,
    image: "/images/services/pets.svg",
    accent: "violet",
  },
];
