export const FALLBACK_SHIPMENTS = [
  {
    id: "01",
    project_id: "01",
    name: "KSEB_PM_E_DRIVE",
    category: "GOV_TECH",
    summary:
      "Government EV subsidy and charging infrastructure platform for Kerala.",
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
    project_id: "02",
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
    project_id: "03",
    name: "ASAP_KERALA_CSP",
    category: "PLATFORM",
    summary:
      "Learning, training, and certification platform for Kerala government programs.",
    role: "Full Stack Engineer (Finance & Payments)",
    impact: [
      "Managed 23,000+ yearly leads",
      "Processed ₹60M+ in secure online payments",
    ],
    contributions: [
      "Designed and implemented secure finance and payment modules",
      "Integrated Razorpay with audit-safe transaction handling",
      "Built admin tooling for reporting and reconciliation",
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS",
      "Razorpay",
      "Firebase",
    ],
    live: "https://csp.asapkerala.gov.in",
  },
  {
    id: "04",
    project_id: "04",
    name: "MEDCITY_INTERNATIONAL_ACADEMY",
    category: "ENTERPRISE",
    summary:
      "End-to-end CRM for admissions, study abroad, and placement operations.",
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
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "Meta Graph API",
      "UrbanChat",
    ],
  },
  {
    id: "05",
    project_id: "05",
    name: "SMOTPRO",
    category: "PLATFORM",
    summary:
      "Sales, operations, and documentation suite for multi-division businesses.",
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
    project_id: "06",
    name: "SRV_INFOTECH",
    category: "ENTERPRISE",
    summary:
      "HRMS, task, and project management system for service-based operations.",
    role: "Full Stack Engineer",
    impact: [
      "Managed 650+ concurrent projects",
      "Used by teams supporting 500+ clients",
    ],
    contributions: [
      "Built HRMS modules for staff and workload management",
      "Designed task tracking and reporting systems",
      "Optimized backend workflows for concurrent usage",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
  },
];

export const FALLBACK_LOGS = [
  {
    display_order: 1,
    date: "PRESENT",
    code: "SYS-999",
    level: "ACTIVE",
    event: "ACTIVE_SERVICE",
    detail:
      "Maintaining production reliability, security, deployments & team operations.",
  },
  {
    display_order: 2,
    date: "05-11-2025",
    code: "ML-700",
    level: "INNOVATION",
    event: "ML_LAND_PREDICTOR",
    detail:
      "Built machine learning based Land Price Predictor (Scikit-learn, Pandas, custom Kannur dataset, Joblib, JSON configs).",
  },
  {
    display_order: 3,
    date: "05-11-2025",
    code: "CLIENT-620",
    level: "SUCCESS",
    event: "KSEB_PM_E_DRIVE",
    detail: "Implemented EV charging & subsidy modules for KSEB EV ecosystem.",
  },
  {
    display_order: 4,
    date: "01-02-2025",
    code: "CLIENT-610",
    level: "INFO",
    event: "SMOTPRO_SYSTEM",
    detail:
      "Worked on Smotpro system enhancements, bug fixes, and performance improvements.",
  },
  {
    display_order: 5,
    date: "01-09-2024",
    code: "CLIENT-600",
    level: "INFO",
    event: "MEDCITY_PLATFORM",
    detail:
      "Contributed to Medcity platform development, feature updates, and production deployments.",
  },
  {
    display_order: 6,
    date: "10-07-2024",
    code: "ASAP-520",
    level: "UPDATE",
    event: "ASAP_SDA",
    detail:
      "4-month engineering support on ASAP SDA. Managed AWS Lightsail, NGINX, load tuning, and deployments.",
  },
  {
    display_order: 7,
    date: "10-01-2024",
    code: "ASAP-500",
    level: "MAJOR_UPDATE",
    event: "ASAP_CSP",
    detail:
      "6-month development on ASAP CSP platform. Integrated Razorpay webhooks and automated workflows.",
  },
  {
    display_order: 8,
    date: "15-12-2023",
    code: "REACT-410",
    level: "MAJOR_UPDATE",
    event: "REACT_MASTER",
    detail: "Completed CRM + HRMS platforms end-to-end using React ecosystem.",
  },
  {
    display_order: 9,
    date: "28-11-2023",
    code: "WORK-400",
    level: "SUCCESS",
    event: "JOIN_SRV_INFOTECH",
    detail: "Joined SRV Infotech as MERN Stack Developer.",
  },
  {
    display_order: 10,
    date: "08-05-2023",
    code: "PROJECT-320",
    level: "SUCCESS",
    event: "SKILL_LEARN",
    detail:
      "Developed SkillLearn (Angular, NestJS, WebRTC, Socket.io, Razorpay). Production deployment on AWS EC2.",
  },
  {
    display_order: 11,
    date: "01-05-2023",
    code: "PROJECT-310",
    level: "SUCCESS",
    event: "NETFLIX_CLONE",
    detail: "Built Netflix UI clone using Angular + API integration.",
  },
  {
    display_order: 12,
    date: "24-04-2023",
    code: "ANGULAR-300",
    level: "INFO",
    event: "ANGULAR_BOOT",
    detail: "Started Angular fundamentals and component architecture.",
  },
  {
    display_order: 13,
    date: "10-04-2023",
    code: "DSA-230",
    level: "INFO",
    event: "DSA_PHASE_3",
    detail:
      "Learned advanced DSA: Tree, BST, Heap, Heap Sort, Trie, Graphs, BFS & DFS.",
  },
  {
    display_order: 14,
    date: "03-04-2023",
    code: "DSA-220",
    level: "INFO",
    event: "DSA_PHASE_2",
    detail:
      "Mastered sorting algorithms (Bubble, Insertion, Selection, Quick, Merge) and data structures (Stack, Queue, Hash Table).",
  },
  {
    display_order: 15,
    date: "27-03-2023",
    code: "DSA-210",
    level: "INFO",
    event: "DSA_PHASE_1",
    detail:
      "Completed Linked List, Complexity Analysis, Linear Search, Binary Search, Recursion.",
  },
  {
    display_order: 16,
    date: "20-03-2023",
    code: "SQL-200",
    level: "INFO",
    event: "SQL_FOUNDATION",
    detail: "Completed SQL fundamentals and relational modeling.",
  },
  {
    display_order: 17,
    date: "19-02-2023",
    code: "PROJECT-160",
    level: "SUCCESS",
    event: "PROJECT_HUFIKO",
    detail:
      "Completed Hufiko E-Commerce system (Node.js, EJS, MongoDB, Razorpay, Twilio). First production deployment on AWS EC2.",
  },
  {
    display_order: 18,
    date: "12-02-2023",
    code: "STACK-150",
    level: "UPDATE",
    event: "FIRST_STACK_APP",
    detail:
      "Built first Node.js + EJS application with session, routes, views.",
  },
  {
    display_order: 19,
    date: "05-02-2023",
    code: "DB-140",
    level: "INFO",
    event: "MONGO_INIT",
    detail: "Learned MongoDB fundamentals and NoSQL schema design.",
  },
  {
    display_order: 20,
    date: "29-01-2023",
    code: "NODE-130",
    level: "INFO",
    event: "NODE_BOOT",
    detail: "Bootstrapped backend training with Node.js + Express.js.",
  },
  {
    display_order: 21,
    date: "22-01-2023",
    code: "JS-120",
    level: "INFO",
    event: "JAVASCRIPT_CORE",
    detail: "Completed core JavaScript concepts and DOM fundamentals.",
  },
  {
    display_order: 22,
    date: "15-01-2023",
    code: "FRONTEND-110",
    level: "INFO",
    event: "FRONTEND_BASE",
    detail: "Completed HTML & CSS foundational training.",
  },
  {
    display_order: 23,
    date: "02-01-2023",
    code: "BOOT-101",
    level: "INFO",
    event: "BROTOTYPE_INIT",
    detail:
      "Initialized Brototype bootcamp. Completed Programming Fundamentals: Java, OOP, C, algorithmic pattern logic.",
  },
];

export const FALLBACK_CERTIFICATES = [
  {
    id: "META_ADVANCED_REACT",
    certificate_id: "META_ADVANCED_REACT",
    title: "Advanced React",
    issuer: "Coursera",
    date: "2025",
    skills: [
      "Advanced React Patterns",
      "Context Management",
      "Jest",
      "Unit Testing",
      "Software Design Patterns",
      "Front-End Web Development",
    ],
    link: "https://coursera.org/share/96acf2599a10d7c661ce9603d4c7822a",
  },
  {
    id: "META_REACT_BASICS",
    certificate_id: "META_REACT_BASICS",
    title: "React Basics",
    issuer: "Coursera",
    date: "2025",
    skills: ["React.js", "JavaScript"],
    link: "https://coursera.org/share/9feef364974b802a26ba4ea4be251f50",
  },
];

export const FALLBACK_LEETCODE = {
  total: 382,
  easy: 155,
  medium: 179,
  hard: 48,
  rank: 349979,
};

export const FALLBACK_RESUME_URL = "/rizin_resume.pdf";
