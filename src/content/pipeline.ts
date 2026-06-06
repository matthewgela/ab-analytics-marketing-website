export type PipelineStep = {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: "Search" | "Factory" | "ShieldCheck" | "GraduationCap";
};

export const pipelineSteps: PipelineStep[] = [
  {
    id: "diagnostic",
    step: 1,
    title: "Diagnostic & Strategy Map",
    description:
      "Assessing requirements and sovereignty needs across your organization and infrastructure landscape.",
    icon: "Search",
  },
  {
    id: "mlops",
    step: 2,
    title: "MLOps Factory Deployment",
    description:
      "Setting up automated model pipelines, infrastructure-as-code, and custom engineering foundations.",
    icon: "Factory",
  },
  {
    id: "pets",
    step: 3,
    title: "PETs Integration",
    description:
      "Applying data isolation protocols and mathematical privacy bounds for sovereign data governance.",
    icon: "ShieldCheck",
  },
  {
    id: "transfer",
    step: 4,
    title: "Tech Transfer & Upskilling",
    description:
      "Empowering your internal team to take full ownership of the technology stack and operations.",
    icon: "GraduationCap",
  },
];

export const pillars = [
  {
    id: "trusted",
    title: "Trusted Partner",
    icon: "ShieldCheck" as const,
  },
  {
    id: "foundation",
    title: "Built On Foundation",
    icon: "Layers" as const,
  },
  {
    id: "insights",
    title: "Data Driven Insights",
    icon: "BarChart3" as const,
  },
  {
    id: "solutions",
    title: "Intelligent Solutions",
    icon: "Lightbulb" as const,
  },
  {
    id: "impact",
    title: "Impact That Matters",
    icon: "Users" as const,
  },
];

export const stats = [
  {
    value: "50+",
    label: "Production AI Applications Engineered across Financial, Defense, and Retail Sectors.",
  },
  {
    value: "10 Yrs",
    label: "Deep Specialized MLOps and Enterprise Platform Experience.",
  },
  {
    value: "100%",
    label:
      "Operational Autonomy focus. We transition technical capabilities so organizations own their technology stack.",
  },
  {
    value: "3",
    label: "Continents Deployed — Addis Ababa headquarters with international deployment networks.",
  },
];
