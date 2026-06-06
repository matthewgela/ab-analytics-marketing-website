export type Product = {
  id: string;
  name: string;
  domain: string;
  challenge: string;
  solution: string;
  impact: string;
  status?: "live" | "validation";
  accent: string;
};

export const products: Product[] = [
  {
    id: "adey",
    name: "Adey",
    domain: "LOGISTICS & RENTAL OS",
    challenge:
      "Managing equipment rentals and event logistics across multiple spreadsheets leads to double-bookings, stock shortages, manual pricing errors, and untracked late returns.",
    solution:
      "A centralized system featuring real-time visual availability calendars, automated double-booking prevention, configurable product buffer hours, and localized English/Amharic support.",
    impact:
      "100% elimination of scheduling conflicts, automated tracking of overdue inventory via immediate SMS and email alerts, and fast quote generation workflows.",
    status: "live",
    accent: "#F59E0B",
  },
  {
    id: "nexio",
    name: "Nexio",
    domain: "ENTERPRISE REAL ESTATE PLATFORM",
    challenge:
      "Fragmented, paper-based real estate sales cycles, resulting in massive operational data silos, slow communication, and inaccurate financial reporting.",
    solution:
      "A unified ERP and CRM platform integrating sales, property ledger tracking, HR, programmatic marketing, and internal secure messaging.",
    impact:
      "Complete organizational transparency, granular role-based access control (RBAC), and automated financial auditing for real estate developers.",
    status: "live",
    accent: "#10B981",
  },
  {
    id: "tena",
    name: "Tena",
    domain: "HEALTHCARE OPERATING PLATFORM",
    challenge:
      "Fragmented clinical workflows and disconnected health data systems limit operational visibility and patient care coordination at national scale.",
    solution:
      "A sovereign healthcare operating platform designed for multi-facility orchestration, clinical data interoperability, and privacy-preserving analytics.",
    impact:
      "Unified care pathways, real-time operational dashboards, and sovereign data governance across healthcare networks.",
    status: "validation",
    accent: "#8B5CF6",
  },
];
