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
      "Managing equipment rentals and event logistics across spreadsheets leads to double-bookings, stock shortages, pricing errors, and untracked late returns.",
    solution:
      "A central system with real-time availability calendars, automated double-booking prevention, configurable product buffer hours, and localised English/Amharic support.",
    impact:
      "Fewer scheduling conflicts, automated overdue alerts by SMS and email, and faster quote workflows.",
    status: "live",
    accent: "#F59E0B",
  },
  {
    id: "nexio",
    name: "Nexio",
    domain: "ENTERPRISE REAL ESTATE PLATFORM",
    challenge:
      "Paper-based real estate sales cycles create data silos, slow communication, and inaccurate financial reporting.",
    solution:
      "A unified ERP and CRM platform integrating sales, property ledger tracking, HR, marketing, and internal messaging.",
    impact:
      "Better organisational visibility, role-based access control, and automated financial auditing for property developers.",
    status: "live",
    accent: "#10B981",
  },
  {
    id: "tena",
    name: "Tena",
    domain: "HEALTHCARE OPERATING PLATFORM",
    challenge:
      "Disconnected clinical workflows and health data systems limit operational visibility and care coordination across facilities.",
    solution:
      "A healthcare operating platform for multi-facility orchestration, clinical data interoperability, and privacy-preserving analytics.",
    impact:
      "Unified care pathways, real-time operational dashboards, and stronger data governance across healthcare networks.",
    status: "validation",
    accent: "#8B5CF6",
  },
];
