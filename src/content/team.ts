export type Leader = {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  accent: string;
  credentials: string[];
};

export const leaders: Leader[] = [
  {
    id: "eliyas",
    name: "Dr. Eliyas Woldegeorgis",
    role: "Chief Executive Officer",
    bio: "PhD in AI Robustness and Privacy. Over 8 years leading data science. Former Managing Data Scientist leading massive privacy evaluations for global, highly-regulated platforms (TikTok).",
    initials: "EW",
    accent: "#0EA5E9",
    credentials: ["PhD, AI Privacy", "Ex-TikTok", "Data Science Lead"],
  },
  {
    id: "matthew",
    name: "Matthew Gela",
    role: "Chief Technology Officer",
    bio: "Principal AI Engineer and former Technical Delivery Lead on behalf of a premier global Google Cloud Partner of the Year. Triple-certified Google Cloud Architect, ML Engineer, and Data Engineer. Terraform Certified Associate.",
    initials: "MG",
    accent: "#1E3A8A",
    credentials: [
      "Google Cloud Architect",
      "ML Engineer",
      "Terraform Certified",
    ],
  },
  {
    id: "solomon",
    name: "Solomon Tesfaye",
    role: "Development Lead",
    bio: "Over 10 years of experience in full-stack architecture and local banking frameworks. Formerly led software builds and systems optimization at Awash Bank and other regional institutions.",
    initials: "ST",
    accent: "#10B981",
    credentials: ["Full-Stack Architect", "Banking Systems", "10+ Years"],
  },
];

export const orgPods = [
  {
    id: "strategy",
    name: "Strategy Pod",
    description: "Diagnostic assessments, sovereignty mapping, and transformation roadmaps.",
  },
  {
    id: "engineering",
    name: "Engineering Pod",
    description: "Full-stack development, ML engineering, and platform architecture.",
  },
  {
    id: "mlops",
    name: "MLOps & PETs Pod",
    description: "Pipeline automation, privacy protocols, and operational telemetry.",
  },
  {
    id: "success",
    name: "Client Success Pod",
    description: "Tech transfer, upskilling, and long-term operational autonomy.",
  },
];
