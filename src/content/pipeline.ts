export type PipelineStep = {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: "Search" | "Code2" | "Server" | "RefreshCw";
};

export const pipelineSteps: PipelineStep[] = [
  {
    id: "diagnostic",
    step: 1,
    title: "Diagnostic & Strategy Map",
    description:
      "Reviewing requirements, constraints, and infrastructure across your organisation.",
    icon: "Search",
  },
  {
    id: "build",
    step: 2,
    title: "Design & Build",
    description:
      "Designing and building your AI application or software solution to agreed requirements and timelines.",
    icon: "Code2",
  },
  {
    id: "hosting",
    step: 3,
    title: "Hosted Deployment",
    description:
      "Deploying on managed infrastructure — we take care of hosting and operations so your team can use the software without running servers or cloud ops.",
    icon: "Server",
  },
  {
    id: "managed",
    step: 4,
    title: "Managed Services",
    description:
      "Ongoing hosting, monitoring, updates, and support on a yearly subscription or licence fee.",
    icon: "RefreshCw",
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
    title: "Data-Driven Insights",
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
    value: "20+",
    label: "Production AI applications delivered across finance, defence, and retail.",
  },
  {
    value: "16+ Yrs",
    label: "Combined experience in MLOps and enterprise platform engineering.",
  },
  {
    value: "100%",
    label:
      "We take care of infrastructure and day-to-day operations so you can focus on using the software.",
  },
  {
    value: "2",
    label: "Based in the UK, with most of our product work delivered in Ethiopia.",
  },
];
