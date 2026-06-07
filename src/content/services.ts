import type { LucideIcon } from "lucide-react";
import {
  Bot,
  CircuitBoard,
  Code2,
  Lock,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
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
    title: "Machine Learning at Scale",
    tagline: "Production ML",
    description:
      "Automated model pipelines, infrastructure-as-code, and production ML engineering for larger deployments.",
    summary:
      "We help teams turn experimental models into reliable production systems with automated pipelines, observability, and engineering standards that work in regulated settings.",
    capabilities: [
      "MLOps and DataOps pipeline design with infrastructure-as-code",
      "End-to-end model training, fine-tuning, and lifecycle management",
      "Model drift, bias monitoring, and platform telemetry",
      "CI/CD for ML workloads with reproducible training and deployment",
    ],
    outcomes: [
      "Repeatable model deployment without manual intervention",
      "Clear visibility across training and inference",
      "Production ML that scales securely from day one",
    ],
    icon: CircuitBoard,
    image: "/images/services/mlops_pipeline.png",
    accent: "cyan",
  },
  {
    id: "agentic",
    title: "Agentic AI Systems",
    tagline: "Agentic AI",
    description:
      "LLM architectures, RAG pipelines, and secure conversational agents for enterprise data environments.",
    summary:
      "We build generative AI systems that go beyond demos: retrieval-augmented generation, multi-agent workflows, and guardrailed LLM applications that work safely with databases, documents, and secure records.",
    capabilities: [
      "Retrieval-Augmented Generation (RAG) and knowledge-base integration",
      "Multi-agent orchestration and workflow automation",
      "Secure conversational agents with role-based data access",
      "Prompt engineering, evaluation frameworks, and safety guardrails",
    ],
    outcomes: [
      "Production LLM applications with measurable accuracy and safety",
      "Agents that operate within secure enterprise data boundaries",
      "Generative AI integrated into existing enterprise workflows",
    ],
    icon: Bot,
    image: "/images/services/agentic_systems.png",
    accent: "violet",
  },
  {
    id: "platform",
    title: "Application Development",
    tagline: "Software applications",
    description:
      "Full-stack web and mobile applications, platforms, and integrations built for Ethiopian organisations.",
    summary:
      "We design and build software applications that people actually use — from customer-facing products to internal tools — alongside the cloud infrastructure needed to run them reliably in Ethiopia.",
    capabilities: [
      "Full-stack web and mobile application development",
      "Product engineering with UX, APIs, and third-party integrations",
      "Custom platforms for operations, finance, logistics, and public services",
      "Cloud deployment on AWS and Google Cloud Platform",
      "Platform engineering with Terraform, Kubernetes, and IaC standards",
    ],
    outcomes: [
      "Applications tailored to local language, workflow, and connectivity needs",
      "Unified platforms replacing fragmented spreadsheets and legacy tools",
      "Reliable infrastructure with flexible deployment options",
    ],
    icon: Code2,
    image: "/images/services/full_stack_software.png",
    accent: "emerald",
  },
  {
    id: "sovereign",
    title: "Data Privacy & AI Strategy",
    tagline: "Privacy & governance",
    description:
      "Privacy-enhancing technologies, data governance frameworks, and practical roadmaps for AI adoption.",
    summary:
      "We help organisations adopt AI with strong privacy and governance: privacy-enhancing computation, capability assessments, and transformation roadmaps aligned to regulated outcomes.",
    capabilities: [
      "Privacy-Enhancing Technologies (PETs) and secure computation",
      "Data governance mapping and framework design",
      "AI capability assessments and transformation roadmaps",
      "Algorithmic analytics, segmentation, and data-driven decision layers",
    ],
    outcomes: [
      "Privacy-preserving access to data for AI workloads",
      "Clear path from assessment to production deployment",
      "Teams ready to run systems independently over time",
    ],
    icon: Lock,
    image: "/images/services/pets.svg",
    accent: "violet",
  },
];
