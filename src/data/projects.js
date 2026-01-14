export const PROJECTS = [
  {
    id: "01",
    name: "KSEB_PM_E_DRIVE",
    category: "GOV_TECH",
    summary: "Government EV subsidy and charging infrastructure platform for Kerala.",
    role: "Full Stack Engineer (End-to-End Ownership)",
    impact: [
      "Production system used by a state-level government agency",
      "Designed subsidy workflows and EV service discovery modules",
    ],
    contributions: [
      "Architected Node.js APIs for subsidy validation and approvals",
      "Built React dashboards for operational and administrative users",
      "Implemented role-based access control and secure data flows",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://pmedrivekerala.kseb.in/",
  },

  {
    id: "02",
    name: "ASAP_KERALA_CAREERLINK",
    category: "PLATFORM",
    summary:
      "Government-backed job and internship platform connecting students, colleges, and employers.",
    role: "Full Stack Engineer",
    impact: [
      "Served 14,000+ candidates across 125+ colleges",
      "Handled high-volume application and screening workflows",
    ],
    contributions: [
      "Built scalable backend workflows for candidate screening and assessments",
      "Developed CRM modules for institutions and employers",
      "Optimized API performance for concurrent user access",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "AWS", "Razorpay"],
    live: "https://careerlink.asapkerala.gov.in",
  },

  {
    id: "03",
    name: "ASAP_KERALA_CSP",
    category: "PLATFORM",
    summary: "Learning, training, and certification platform for Kerala government programs.",
    role: "Full Stack Engineer (Finance & Payments)",
    impact: ["Managed 23,000+ yearly leads", "Processed ₹60M+ in secure online payments"],
    contributions: [
      "Designed and implemented secure finance and payment modules",
      "Integrated Razorpay with audit-safe transaction handling",
      "Built admin tooling for reporting and reconciliation",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "AWS", "Razorpay", "Firebase"],
    live: "https://csp.asapkerala.gov.in",
  },

  {
    id: "04",
    name: "MEDCITY_INTERNATIONAL_ACADEMY",
    category: "ENTERPRISE",
    summary: "End-to-end CRM for admissions, study abroad, and placement operations.",
    role: "Lead Full Stack Developer",
    impact: [
      "Handled 25,000+ leads across multiple business units",
      "Processed ₹30M+ in online payments",
    ],
    contributions: [
      "Automated admissions, visa, and placement workflows",
      "Integrated Meta Graph API and UrbanChat for communication",
      "Built payment pipelines with Razorpay and reporting dashboards",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Razorpay", "Meta Graph API", "UrbanChat"],
  },

  {
    id: "05",
    name: "SMOTPRO",
    category: "PLATFORM",
    summary: "Sales, operations, and documentation suite for multi-division businesses.",
    role: "Full Stack Engineer",
    impact: [
      "Boosted lead acquisition to 500+ leads per week",
      "Unified multiple external systems into a single platform",
    ],
    contributions: [
      "Integrated Meta Leads & Marketing APIs with webhook-based ingestion for real-time CRM lead capture",
      "Integrated PayU, IVR, JustDial, and TripCrafters APIs",
      "Built automation pipelines for lead capture and assignment",
      "Designed internal dashboards for sales and ops teams",
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "PayU",
      "JustDial API",
      "IVR",
      "TripCrafters API",
    ],
  },

  {
    id: "06",
    name: "SRV_INFOTECH",
    category: "ENTERPRISE",
    summary: "HRMS, task, and project management system for service-based operations.",
    role: "Full Stack Engineer",
    impact: ["Managed 650+ concurrent projects", "Used by teams supporting 500+ clients"],
    contributions: [
      "Built HRMS modules for staff and workload management",
      "Designed task tracking and reporting systems",
      "Optimized backend workflows for concurrent usage",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
  },
];
