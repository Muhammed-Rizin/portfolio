export const FALLBACK_SHIPMENTS = [
  {
    id: "07",
    project_id: "07",
    name: "KIAL_CARGO_MANAGEMENT_SYSTEM",
    category: "ENTERPRISE",
    summary:
      "End-to-end paperless cargo management platform for Kannur International Airport, covering agent onboarding, booking, airline approval, cargo operations, and finance.",
    role: "Full Stack Developer & Project Lead",
    impact: [
      "Handled import, export, inbound, and outbound cargo for airlines like Air India and IndiGo",
      "Delivered 5 role-based portals across web and mobile",
    ],
    contributions: [
      "Built agent mobile app and portals for booking and wallet management",
      "Implemented AWB and invoice handling with airline approval workflow",
      "Automated commodity and airline-based charge calculation with PDA wallet deduction",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://cargo.kannurairport.aero",
  },
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
      "Owning production reliability, security, deployments, and team operations across live government and enterprise systems.",
  },
  {
    display_order: 2,
    date: "01-09-2025",
    code: "CLIENT-650",
    level: "ACTIVE",
    event: "VCMS_KERALA_VIGILANCE",
    detail:
      "Ongoing development of VCMS, a case management system for Kerala Vigilance.",
  },
  {
    display_order: 3,
    date: "01-08-2026",
    code: "CLIENT-640",
    level: "ACTIVE",
    event: "KSEB_TSM",
    detail:
      "Ongoing development of the KSEB TSM platform, building on the KSEB EV ecosystem work.",
  },
  {
    display_order: 4,
    date: "01-05-2026",
    code: "CLIENT-630",
    level: "MAJOR_UPDATE",
    event: "KIAL_CARGO_MANAGEMENT_SYSTEM",
    detail:
      "Led the Kannur Airport cargo platform: 5 role-based portals, agent mobile app, AWB/invoice handling, and airline approval workflow.",
  },
  {
    display_order: 5,
    date: "05-11-2025",
    code: "ML-700",
    level: "INNOVATION",
    event: "ML_LAND_PREDICTOR",
    detail:
      "Built an ML-based Land Price Predictor using Scikit-learn, Pandas, Joblib, and a custom Kannur dataset.",
  },
  {
    display_order: 6,
    date: "05-11-2025",
    code: "CLIENT-620",
    level: "SUCCESS",
    event: "KSEB_PM_E_DRIVE",
    detail:
      "Delivered EV charging and subsidy modules for the KSEB PM E-Drive platform.",
  },
  {
    display_order: 7,
    date: "01-02-2025",
    code: "CLIENT-610",
    level: "INFO",
    event: "SMOTPRO_SYSTEM",
    detail:
      "Enhanced the Smotpro system with new features, bug fixes, and performance improvements.",
  },
  {
    display_order: 8,
    date: "01-09-2024",
    code: "CLIENT-600",
    level: "INFO",
    event: "MEDCITY_PLATFORM",
    detail:
      "Built features and shipped production deployments for the Medcity CRM platform.",
  },
  {
    display_order: 9,
    date: "10-07-2024",
    code: "ASAP-520",
    level: "UPDATE",
    event: "ASAP_SDA",
    detail:
      "4-month engineering support on ASAP SDA: AWS Lightsail, NGINX, load tuning, and deployments.",
  },
  {
    display_order: 10,
    date: "10-01-2024",
    code: "ASAP-500",
    level: "MAJOR_UPDATE",
    event: "ASAP_CSP",
    detail:
      "6-month build of the ASAP CSP platform, with Razorpay webhooks and automated payment workflows.",
  },
  {
    display_order: 11,
    date: "15-12-2023",
    code: "REACT-410",
    level: "MAJOR_UPDATE",
    event: "REACT_MASTER",
    detail:
      "Completed CRM and HRMS platforms end-to-end using the React ecosystem.",
  },
  {
    display_order: 12,
    date: "28-11-2023",
    code: "WORK-400",
    level: "SUCCESS",
    event: "JOIN_SRV_INFOTECH",
    detail: "Joined SRV Infotech as a MERN Stack Developer.",
  },
  {
    display_order: 13,
    date: "08-05-2023",
    code: "PROJECT-320",
    level: "SUCCESS",
    event: "SKILL_LEARN",
    detail:
      "Built SkillLearn with Angular, NestJS, WebRTC, Socket.io, and Razorpay; deployed to production on AWS EC2.",
  },
  {
    display_order: 14,
    date: "01-05-2023",
    code: "PROJECT-310",
    level: "SUCCESS",
    event: "NETFLIX_CLONE",
    detail: "Built a Netflix UI clone with Angular and API integration.",
  },
  {
    display_order: 15,
    date: "24-04-2023",
    code: "ANGULAR-300",
    level: "INFO",
    event: "ANGULAR_BOOT",
    detail: "Learned Angular fundamentals and component architecture.",
  },
  {
    display_order: 16,
    date: "10-04-2023",
    code: "DSA-230",
    level: "INFO",
    event: "DSA_PHASE_3",
    detail:
      "Learned advanced DSA: Trees, BST, Heaps, Trie, Graphs, BFS, and DFS.",
  },
  {
    display_order: 17,
    date: "03-04-2023",
    code: "DSA-220",
    level: "INFO",
    event: "DSA_PHASE_2",
    detail:
      "Mastered core sorting algorithms plus Stacks, Queues, and Hash Tables.",
  },
  {
    display_order: 18,
    date: "27-03-2023",
    code: "DSA-210",
    level: "INFO",
    event: "DSA_PHASE_1",
    detail:
      "Covered Linked Lists, complexity analysis, searching, and recursion.",
  },
  {
    display_order: 19,
    date: "20-03-2023",
    code: "SQL-200",
    level: "INFO",
    event: "SQL_FOUNDATION",
    detail: "Completed SQL fundamentals and relational modeling.",
  },
  {
    display_order: 20,
    date: "19-02-2023",
    code: "PROJECT-160",
    level: "SUCCESS",
    event: "PROJECT_HUFIKO",
    detail:
      "Shipped the Hufiko e-commerce system (Node.js, EJS, MongoDB, Razorpay, Twilio), my first production deployment on AWS EC2.",
  },
  {
    display_order: 21,
    date: "12-02-2023",
    code: "STACK-150",
    level: "UPDATE",
    event: "FIRST_STACK_APP",
    detail:
      "Built my first Node.js + EJS app with sessions, routes, and views.",
  },
  {
    display_order: 22,
    date: "05-02-2023",
    code: "DB-140",
    level: "INFO",
    event: "MONGO_INIT",
    detail: "Learned MongoDB fundamentals and NoSQL schema design.",
  },
  {
    display_order: 23,
    date: "29-01-2023",
    code: "NODE-130",
    level: "INFO",
    event: "NODE_BOOT",
    detail: "Started backend training with Node.js and Express.js.",
  },
  {
    display_order: 24,
    date: "22-01-2023",
    code: "JS-120",
    level: "INFO",
    event: "JAVASCRIPT_CORE",
    detail: "Completed core JavaScript and DOM fundamentals.",
  },
  {
    display_order: 25,
    date: "15-01-2023",
    code: "FRONTEND-110",
    level: "INFO",
    event: "FRONTEND_BASE",
    detail: "Completed HTML and CSS foundation training.",
  },
  {
    display_order: 26,
    date: "02-01-2023",
    code: "BOOT-101",
    level: "INFO",
    event: "BROTOTYPE_INIT",
    detail:
      "Joined the Brototype bootcamp; completed Programming Fundamentals in Java, OOP, C, and algorithmic logic.",
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
