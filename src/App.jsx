/* eslint-disable react-hooks/purity */
import React, { useState, useEffect } from "react";
import {
  Layers,
  Zap,
  Cpu,
  ArrowUpRight,
  Github,
  Code,
  Terminal,
  X,
  Activity,
  Hash,
  ExternalLink,
  Wifi,
  Star,
  GitFork,
  Download,
  HardDrive,
} from "lucide-react";

const IDENTITY = {
  user: "MUHAMMED RIZIN",
  class: "FULL STACK DEVELOPER",
  spec: "END_TO_END_SYSTEMS_ENGINEER",
  role: "FULL STACK DEVELOPER — REACT | ANGULAR | NODE | AWS",
  flags: [
    "CLEAN_CODE",
    "SCALABLE_ARCH",
    "FAULT_TOLERANT_SYSTEMS",
    "RAPID_DEBUG",
    "UX_MINDED",
    "API_DESIGN",
    "PERFORMANCE_OPTIMIZATION",
  ],
  bio: "Self-taught Developer focused on building high-performance web applications, scalable APIs, and clean, maintainable architecture.",
};
const PROJECTS = [
  {
    id: "01",
    name: "KSEB_PM_E_DRIVE",
    type: "GOV_TECH",
    desc: "EV adoption & subsidy management system for Kerala.",
    stack: ["React", "Node", "Express", "MongoDB"],
    detail:
      "Built subsidy workflow modules & EV charging locator for Kerala’s nodal agency under PM E-DRIVE.",
    live: "https://pmedrivekerala.kseb.in/",
  },
  {
    id: "02",
    name: "ASAP_KERALA_CAREERLINK",
    type: "PLATFORM",
    desc: "Government-backed job & internship portal for Kerala.",
    stack: ["React", "Node", "Express", "MongoDB", "AWS", "Razorpay"],
    detail:
      "Served 14k+ candidates & 125+ colleges. Built CRM, screening tests, and scalable backend workflows.",
    live: "https://careerlink.asapkerala.gov.in",
  },
  {
    id: "03",
    name: "ASAP_KERALA_CSP",
    type: "PLATFORM",
    desc: "Kerala government learning & training platform.",
    stack: ["React", "Node", "Express", "MongoDB", "AWS", "Razorpay", "Firebase"],
    detail:
      "Handled 23k+ yearly leads. Built secure Finance Module & integrated payment workflows worth ₹53M+.",
    live: "https://csp.asapkerala.gov.in",
  },
  {
    id: "04",
    name: "MEDCITY_INTERNATIONAL_ACADEMY",
    type: "ENTERPRISE",
    desc: "End-to-end CRM for Academy, Study Abroad & Placements.",
    stack: ["React", "Node", "Express", "MongoDB", "Razorpay", "Meta Graph API", "UrbanChat"],
    detail: "Automated admissions, visas, placements; handled 25k+ leads & ₹30M+ in payments.",
  },
  {
    id: "05",
    name: "SMOTPRO",
    type: "PLATFORM",
    desc: "Sales, operations & documentation suite for multiple divisions.",
    stack: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "PayU",
      "JustDial API",
      "IVR",
      "TripCrafters API",
    ],
    detail: "Integrated PayU, IVR, JD, TripCrafters; boosted lead acquisition to 500+/week.",
  },
  {
    id: "06",
    name: "SRV_INFOTECH",
    type: "ENTERPRISE",
    desc: "Staff, task & project tracking for 500+ clients.",
    stack: ["React", "Node", "Express", "MongoDB"],
    detail: "Built HRMS + task management handling 650+ simultaneous projects.",
  },
];

const GEAR = [
  {
    category: "COMPUTE_MODULE",
    items: ["MacBook Pro — M1 Max (32GB)", "iPad Pro 12.9 — M1"],
  },
  {
    category: "INPUT_SYSTEM",
    items: ["Keychron Q1 Pro — Gateron Brown", "Logitech MX Master 3S"],
  },
  {
    category: "AUDIO_RIG",
    items: ["Sony WH-1000XM5", "Shure MV7 — USB/XLR"],
  },
];

const GITHUB_REPOS = [
  {
    name: "image-generator",
    desc: "AI image generator using NVIDIA API with React frontend and Node backend.",
    lang: "TypeScript",
    link: "https://github.com/Muhammed-Rizin/image-generator",
  },
  {
    name: "portfolio",
    desc: "Animated 3D developer portfolio built with React, Three.js, and GSAP.",
    lang: "JavaScript",
    link: "https://github.com/Muhammed-Rizin/Portfolio",
  },
  {
    name: "land-value-predictor",
    desc: "ML model predicting land prices across Kerala using Random Forest.",
    lang: "Python",
    link: "https://github.com/Muhammed-Rizin/land-value-predictor",
  },
  {
    name: "finote",
    desc: "Finance management tool for tracking income, expenses, and accounts.",
    lang: "JavaScript",
    link: "https://github.com/Muhammed-Rizin/finote",
  },
  {
    name: "dummyjson",
    desc: "TypeScript utilities and API helpers built on DummyJSON.",
    lang: "TypeScript",
    link: "https://github.com/Muhammed-Rizin/dummyjson",
  },
  {
    name: "skill-learn",
    desc: "Online learning platform with courses, profiles, and skill-sharing.",
    lang: "TypeScript",
    link: "https://github.com/Muhammed-Rizin/Skill-learn",
  },
  {
    name: "node-ts",
    desc: "Node.js + TypeScript boilerplate for scalable backend APIs.",
    lang: "TypeScript",
    link: "https://github.com/Muhammed-Rizin/node-ts",
  },
  {
    name: "e-commerce",
    desc: "Full-stack e-commerce system with payments, admin panel, and CMS features.",
    lang: "JavaScript",
    link: "https://github.com/Muhammed-Rizin/E-Commerce",
  },
  {
    name: "skill-learn-nestjs",
    desc: "NestJS backend for the Skill-Learn platform with modular micro-architecture.",
    lang: "TypeScript",
    link: "https://github.com/Muhammed-Rizin/Skill-learn-nestjs",
  },
  {
    name: "calendar",
    desc: "Next.js calendar app with Clerk auth, Drizzle ORM, and Google Calendar sync.",
    lang: "TypeScript",
    link: "https://github.com/Muhammed-Rizin/calendar",
  },
  {
    name: "payment-gateway",
    desc: "Next.js + Node app supporting multiple payment gateways (Razorpay, PayU).",
    lang: "JavaScript",
    link: "https://github.com/Muhammed-Rizin/payment-gateway",
  },
  {
    name: "gym-membership-management-frontend",
    desc: "Frontend for membership management with plans, users, and analytics.",
    lang: "TypeScript",
    link: "https://github.com/Muhammed-Rizin/Gym-membership-management-frontend",
  },
  {
    name: "gym-membership-management-backend",
    desc: "Backend APIs for membership management with CRUD and JWT auth.",
    lang: "JavaScript",
    link: "https://github.com/Muhammed-Rizin/Gym-membership-management-backend",
  },
  {
    name: "automated-email-frontend",
    desc: "Email automation UI with template editor, history view, and trash feature.",
    lang: "TypeScript",
    link: "https://github.com/Muhammed-Rizin/Automated-Email-frontend",
  },
  {
    name: "automated-email-backend",
    desc: "Backend email automation system with templates and delivery API.",
    lang: "TypeScript",
    link: "https://github.com/Muhammed-Rizin/Automated-Email-Backend",
  },
  {
    name: "book-management-api",
    desc: "REST API for managing books, authors, and categories.",
    lang: "JavaScript",
    link: "https://github.com/Muhammed-Rizin/Book-Management-API",
  },
  {
    name: "data-structures",
    desc: "DSA implementations in JavaScript: LinkedList, Trees, Graphs, Stacks, etc.",
    lang: "JavaScript",
    link: "https://github.com/Muhammed-Rizin/Data-Structures",
  },
  {
    name: "password-generator",
    desc: "Secure password generator built with TypeScript and UI controls.",
    lang: "TypeScript",
    link: "https://github.com/Muhammed-Rizin/Password-generator",
  },
  {
    name: "user-management-angular-frontend",
    desc: "Angular + NGRX frontend for managing user accounts with JWT auth.",
    lang: "TypeScript",
    link: "https://github.com/Muhammed-Rizin/user-managment-angular-frontend",
  },
  {
    name: "user-management-angular-backend",
    desc: "Express backend for authentication and user management with JWT.",
    lang: "JavaScript",
    link: "https://github.com/Muhammed-Rizin/user-managment-angular-backend",
  },
  {
    name: "counter-angular",
    desc: "Angular + NGRX counter example showcasing global state patterns.",
    lang: "TypeScript",
    link: "https://github.com/Muhammed-Rizin/Counter-angular",
  },
];

const FIRMWARE_MODULES = [
  {
    cat: "LANGUAGES",
    items: [
      { id: "JAVASCRIPT_ES6+", ver: "STABLE" },
      { id: "TYPESCRIPT", ver: "v5.x" },
      { id: "MONGODB_MQL", ver: "AGG_v6" },
      { id: "SQL_MYSQL", ver: "CORE" },
    ],
  },
  {
    cat: "FRAMEWORKS",
    items: [
      { id: "REACT_JS", ver: "v18" },
      { id: "ANGULAR", ver: "v17" },
      { id: "NEXT_JS", ver: "v14" },
      { id: "NODE_JS", ver: "v20" },
      { id: "EXPRESS_JS", ver: "v4" },
      { id: "NEST_JS", ver: "v10" },
    ],
  },
  {
    cat: "CLOUD_INFRA",
    items: [
      { id: "AWS", ver: "EC2_S3" },
      { id: "FIREBASE", ver: "v9" },
      { id: "DOCKER", ver: "v24" },
      { id: "GIT_VCS", ver: "v2" },
    ],
  },
  {
    cat: "INTEGRATIONS",
    items: [
      { id: "SOCKET_IO", ver: "WS" },
      { id: "WEBRTC", ver: "P2P" },
      { id: "RAZORPAY", ver: "PG" },
      { id: "PAYU", ver: "PG" },
      { id: "JUSTDIAL", ver: "API" },
      { id: "TWILIO_IVR", ver: "IVR" },
      { id: "CLOUDINARY", ver: "ASSETS" },
    ],
  },
  {
    cat: "ADVANCED_LIBS",
    items: [
      { id: "NGRX", ver: "STORE" },
      { id: "THREE_JS", ver: "WEBGL" },
      { id: "CLERK_AUTH", ver: "AUTH" },
      { id: "GSAP", ver: "ANIM" },
    ],
  },
];

const LEETCODE_STATS = {
  total: 379,
  easy: 153,
  medium: 178,
  hard: 48,
};

// --- 2. UTILS & HOOKS ---

const useSystemMonitor = () => {
  const [stats, setStats] = useState({ temp: 40, ram: 30, bat: 100 });
  useEffect(() => {
    const i = setInterval(() => {
      setStats((p) => ({
        temp: Math.floor(38 + Math.random() * 15),
        ram: Math.floor(30 + Math.random() * 40),
        bat: Math.max(0, p.bat - 0.01),
      }));
    }, 3000);
    return () => clearInterval(i);
  }, []);
  return stats;
};

const useKonami = (cb) => {
  useEffect(() => {
    const code = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    let idx = 0;
    const handler = (e) => {
      if (e.key === code[idx]) {
        idx++;
        if (idx === code.length) {
          cb();
          idx = 0;
        }
      } else idx = 0;
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [cb]);
};

const ScrambleText = ({ text }) => {
  const [disp, setDisp] = useState(text || "");
  const scramble = () => {
    let i = 0;
    const t = setInterval(() => {
      setDisp(() =>
        text
          .split("")
          .map((c, idx) => (idx < i ? text[idx] : "X7#9"[Math.floor(Math.random() * 4)]))
          .join("")
      );
      if (i >= text.length) clearInterval(t);
      i += 1 / 3;
    }, 30);
  };
  return (
    <span onMouseEnter={scramble} className="cursor-default">
      {disp}
    </span>
  );
};

function DottedBg() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 opacity-[0.15]"
      style={{
        backgroundImage: "radial-gradient(#888 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />
  );
}

function Scanline() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 h-full w-full overflow-hidden">
      <div className="w-full h-1 bg-white/10 absolute top-0 left-0 animate-[scan_8s_linear_infinite]" />
      <style jsx>{`
        @keyframes scan {
          0% {
            top: -10%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 110%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

function Card({ children, className = "", onClick, active, redMode }) {
  const border = active
    ? redMode
      ? "border-red-600"
      : "border-white"
    : "border-neutral-800 hover:border-neutral-500";
  return (
    <div
      onClick={onClick}
      className={`relative bg-black border transition-all duration-300 group overflow-hidden ${border} ${className}`}
    >
      {[
        "top-0 left-0 border-t border-l",
        "top-0 right-0 border-t border-r",
        "bottom-0 left-0 border-b border-l",
        "bottom-0 right-0 border-b border-r",
      ].map((pos, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 transition-colors ${pos} ${
            active ? (redMode ? "border-red-600" : "border-white") : "border-neutral-500"
          } opacity-0 group-hover:opacity-100`}
        />
      ))}
      {children}
    </div>
  );
}

function BootScreen({ onComplete }) {
  const [lines, setLines] = useState([]);
  useEffect(() => {
    const sequence = [
      "NOTHING(R) BOOTLOADER v3.0",
      "VERIFYING_IDENTITY... [FULL_STACK_ENGINEER]",
      "LOADING_FIRMWARE... [REACT, TS, NODE, AWS]",
      "CHECKING_PERIPHERALS... OK",
      "ESTABLISHING_UPLINK... OK",
      "SYSTEM_READY.",
    ];
    let delay = 100;
    sequence.forEach((line, index) => {
      setTimeout(() => {
        setLines((prev) => [...prev, line]);
        if (index === sequence.length - 1) setTimeout(onComplete, 800);
      }, delay);
      delay += 300;
    });
  }, []); // eslint-disable-line

  return (
    <div className="fixed inset-0 bg-black z-999 flex flex-col justify-end p-8 font-mono text-xs text-red-600 pointer-events-none select-none">
      {lines.map((l, i) => (
        <div key={i}>&gt; {l}</div>
      ))}{" "}
      {/* Fixed: escaped > to &gt; */}
      <div className="w-2 h-4 bg-red-600 animate-pulse mt-2" />
    </div>
  );
}

function ProjectModal({ project, onClose, redMode }) {
  if (!project) return null;
  return (
    <div
      className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className={`w-full max-w-2xl bg-black border p-8 relative shadow-2xl ${
          redMode ? "border-red-600" : "border-neutral-700"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-500 hover:text-white cursor-pointer"
        >
          <X size={24} />
        </button>
        <div className="text-[10px] font-mono text-red-600 mb-2">LOG_#{project.id}</div>
        <h2 className="text-4xl font-bold font-mono text-white mb-4">{project.name}</h2>
        <p className="font-mono text-sm text-neutral-400 leading-relaxed mb-6">{project.desc}</p>
        <div className="border-t border-neutral-800 pt-4 mb-4">
          <h3 className="text-xs font-mono text-white mb-2">BRIEF</h3>
          <p className="font-mono text-xs text-neutral-500">{project.detail}</p>
        </div>
        <div className="flex gap-2 mb-8">
          {project.stack.map((s) => (
            <span
              key={s}
              className="px-2 py-1 border border-neutral-800 text-[10px] font-mono text-neutral-400"
            >
              {s}
            </span>
          ))}
        </div>
        {project?.live && (
          <button
            onClick={() => window.open(project.live, "_blank", "noopener,noreferrer")}
            className={`w-full py-3 font-mono font-bold text-sm flex items-center justify-center gap-2 cursor-pointer ${
              redMode ? "bg-red-600 text-black" : "bg-white text-black"
            }`}
          >
            Link <ExternalLink size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

// --- 4. WIDGETS ---

function LeetCodeWidget({ redMode }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex justify-between items-start mb-2">
        <Code size={20} className={redMode ? "text-red-600" : "text-neutral-400"} />
        <span className="text-[10px] font-mono text-neutral-600">LEETCODE</span>
      </div>
      <div>
        <div className="text-2xl font-bold text-white font-mono">{LEETCODE_STATS.total}+</div>
        <div className="text-[10px] text-neutral-500 font-mono mb-2">SOLVED</div>
        <div className="flex gap-1 h-1.5">
          <div className="bg-green-500 h-full w-1/3 rounded-l-full" />
          <div className="bg-yellow-500 h-full w-1/2" />
          <div className="bg-red-500 h-full w-1/6 rounded-r-full" />
        </div>
      </div>
    </div>
  );
}

// --- 5. SECTORS ---

function Matrix({ redMode }) {
  return (
    <div className="w-full overflow-hidden flex flex-col gap-2">
      <div className="flex justify-between text-[10px] font-mono text-neutral-500">
        <span>GITHUB_DATA</span>
        <span className="text-red-600">1,240 COMMITS</span>
      </div>
      <div className="flex gap-1 h-24 opacity-80 mask-linear-fade">
        {Array.from({ length: 30 }).map((_, w) => (
          <div key={w} className="flex flex-col gap-1">
            {Array.from({ length: 7 }).map((_, d) => (
              <div
                key={d}
                className={`w-3 h-3 rounded-[1px] ${
                  Math.random() > 0.7 ? (redMode ? "bg-red-600" : "bg-white") : "bg-neutral-900"
                }`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function AudioGlyph({ redMode }) {
  return (
    <Card className="h-full p-6 flex flex-col justify-between" redMode={redMode}>
      <div className="flex gap-1 h-12 items-end">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-2 bg-red-600 animate-pulse"
            style={{
              height: `${30 + Math.random() * 70}%`,
              animationDuration: `${0.5 + Math.random()}s`,
            }}
          />
        ))}
      </div>
      <div className="mt-4">
        <div className="text-[10px] font-mono text-neutral-500 mb-1">VISUALIZER</div>
        <div className="text-sm font-bold text-white font-mono overflow-hidden whitespace-nowrap">
          DEEP_FOCUS.MP3
        </div>
      </div>
    </Card>
  );
}

function StarredRepos({ redMode }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex justify-between items-start mb-4">
        <Star size={20} className={redMode ? "text-red-600" : "text-neutral-400"} />
        <span className="text-[10px] font-mono text-neutral-600">TOP_REPOS</span>
      </div>
      <div className="space-y-3">
        {GITHUB_REPOS.slice(0, 4).map((repo, i) => (
          <div key={i} className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-white group-hover:text-red-500 transition-colors">
                {repo.name}
              </span>
            </div>
            <span className="text-[10px] font-mono text-neutral-500">{repo.stars} ★</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClusterStatus({ redMode }) {
  const services = [
    { name: "auth-service", port: ":3001", state: "HEALTHY", load: 14 },
    { name: "billing-service", port: ":3002", state: "HEALTHY", load: 41 },
    { name: "redis-cache-cluster", port: ":6379", state: "OPTIMAL", load: 6 },
    { name: "mongo-shard-01", port: ":27017", state: "SYNCING", load: 89 },
  ];

  return (
    <Card className="h-full p-4 flex flex-col" redMode={redMode}>
      <div className="flex justify-between items-center border-b border-neutral-800 pb-2 mb-2">
        <span className="text-[10px] font-mono text-neutral-500">K8S_CLUSTER</span>
        <span className={`text-[10px] font-mono ${redMode ? "text-red-600" : "text-green-500"}`}>
          4 RUNNING
        </span>
      </div>
      <div className="flex flex-col gap-2 overflow-hidden">
        <div className="grid grid-cols-4 text-[8px] font-mono text-neutral-600 mb-1">
          <span className="col-span-2">ID</span>
          <span>PORT</span>
          <span className="text-right">LOAD</span>
        </div>
        {services.map((svc, i) => (
          <div key={i} className="grid grid-cols-4 text-[10px] font-mono group cursor-default">
            <div className="col-span-2 flex items-center gap-2">
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  svc.status === "SYNC"
                    ? "bg-yellow-500 animate-pulse"
                    : redMode
                    ? "bg-red-900"
                    : "bg-green-500"
                }`}
              />
              <span className="text-white group-hover:text-neutral-300">{svc.name}</span>
            </div>
            <span className="text-neutral-500">{svc.port}</span>
            <span className="text-right text-neutral-400">{svc.load}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function DeployStream({ redMode }) {
const commits = [
  { hash: "c41e7a", msg: "fix: auth token sync", branch: "main" },
  { hash: "9db3f2", msg: "feat: enable redis cluster", branch: "dev" },
  { hash: "ae12c9", msg: "chore: refine docker build", branch: "dev" },
];

  return (
    <Card className="h-full p-4 flex flex-col" redMode={redMode}>
      <div className="flex justify-between items-center border-b border-neutral-800 pb-2 mb-3">
        <span className="text-[10px] font-mono text-neutral-500">DEPLOY_LOG</span>
        <span className="text-[10px] font-mono text-neutral-600">CI/CD: ACTIVE</span>
      </div>
      <div className="space-y-3">
        {commits.map((c, i) => (
          <div key={i} className="flex flex-col gap-0.5 group">
            <div className="flex justify-between items-center">
              <span
                className={`text-[10px] font-mono ${redMode ? "text-red-600" : "text-blue-400"}`}
              >
                {c.hash}
              </span>
              <span className="text-[8px] font-mono text-neutral-600 border border-neutral-900 px-1 rounded">
                {c.branch}
              </span>
            </div>
            <span className="text-xs font-mono text-neutral-400 group-hover:text-white truncate">
              {c.msg}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function EndpointLatency({ redMode }) {
  return (
    <Card className="h-full p-4 flex flex-col justify-between" redMode={redMode}>
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono text-neutral-500">LATENCY</span>
          <span className="text-xs font-mono text-white">42ms</span>
        </div>
        <Wifi size={14} className={redMode ? "text-red-600" : "text-neutral-500"} />
      </div>
      <div className="flex items-end gap-0.5 h-12 mt-2 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={`w-1 ${
              redMode ? "bg-red-900" : "bg-neutral-800"
            } hover:bg-white transition-colors`}
            style={{ height: `${20 + Math.random() * 80}%`, opacity: 0.4 + Math.random() * 0.6 }}
          />
        ))}
      </div>
    </Card>
  );
}

function ProcessManager({ redMode }) {
  const tasks = [
    { id: "4412", name: "DEPLOY_PIPELINE", cpu: "14.8%" },
    { id: "9821", name: "SYNC_MONGO_SHARD", cpu: "11.2%" },
    { id: "3370", name: "PROCESS_WEBHOOKS", cpu: "7.4%" },
    { id: "2033", name: "REFACTOR_AUTH_FLOW", cpu: "5.9%" },
    { id: "7720", name: "CLEANUP_BACKGROUND_JOBS", cpu: "2.3%" },
  ];

  return (
    <Card className="h-full p-4 flex flex-col" redMode={redMode}>
      <div className="flex justify-between items-center border-b border-neutral-800 pb-2 mb-2">
        <span className="text-[10px] font-mono text-neutral-500">TASK_MANAGER</span>
        <span className={`text-[10px] font-mono ${redMode ? "text-red-600" : "text-white"}`}>
          4 ACTIVE
        </span>
      </div>
      <div className="flex flex-col gap-2 overflow-hidden">
        <div className="grid grid-cols-4 text-[8px] font-mono text-neutral-600 mb-1">
          <span>PID</span>
          <span className="col-span-2">COMMAND</span>
          <span className="text-right">%CPU</span>
        </div>
        {tasks.map((task) => (
          <div
            key={task.id}
            className="grid grid-cols-4 text-[10px] font-mono group cursor-default"
          >
            <span className="text-neutral-500">{task.id}</span>
            <span className="col-span-2 text-white group-hover:text-red-600 transition-colors">
              {task.name}
            </span>
            <span className="text-right text-neutral-400">{task.cpu}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function NetworkTraffic({ redMode }) {
  return (
    <Card className="h-full p-4 flex flex-col justify-between" redMode={redMode}>
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono text-neutral-500">NET_IO</span>
          <span className="text-xs font-mono text-white">1.2 GB/s</span>
        </div>
        <div
          className={`w-2 h-2 rounded-full animate-pulse ${
            redMode ? "bg-red-600" : "bg-green-500"
          }`}
        />
      </div>
      <div className="flex items-end gap-1 h-16 mt-4 overflow-hidden mask-linear-fade">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className={`w-1.5 ${
              redMode ? "bg-red-900" : "bg-neutral-800"
            } transition-all duration-500`}
            style={{
              height: `${Math.max(10, Math.random() * 100)}%`,
              opacity: 0.5 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>
    </Card>
  );
}

function TerminalLog() {
  const [logs, setLogs] = useState([
    "> INIT_SYSTEM...",
    "> CONNECTING_TO_GITHUB_API... OK",
    "> FETCHING_USER_DATA... 200 OK",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLogs = [
        // ───── SYSTEM BOOT
        "> VALIDATING_OS_FILES...",
        "> LOADING_KERNEL_MODULES...",
        "> CHECKING_SYSTEM_HEALTH...",
        "> BOOT_SEQUENCE_OK.",

        // ───── NETWORK
        "> PINGING_EDGE_NETWORK...",
        "> RESOLVING_DNS...",
        "> NETWORK_BANDWIDTH: 938Mbps",
        "> LATENCY_CHECK: 23ms",
        "> NETWORK_STABLE.",

        // ───── API / BACKEND
        "> CONNECTING_TO_DB_CLUSTER...",
        "> DB_SYNC_COMPLETE.",
        "> QUERY_OPTIMIZATION: PASS",
        "> INDEX_REBUILD: OK",
        "> SCHEMA_VALIDATION: CLEAN.",

        // ───── BUILD PROCESS
        "> ANALYZING_BUNDLE_SIZE...",
        "> TREE_SHAKING_MODULES...",
        "> MINIFYING_ASSETS...",
        "> REMOVING_DEAD_CODE...",
        "> OPTIMIZING_ASSETS... DONE",
        "> COMPILING_TYPESCRIPT...",
        "> COMPILATION_SUCCESS.",
        "> RUNNING_TESTS... PASS",
        "> RUNNING_LINT_CHECK... CLEAN",
        "> PACKAGING_BUILD...",
        "> BUILD_SIZE: 1.7MB_COMPRESSED",

        // ───── SECURITY
        "> RUNNING_SECURITY_AUDIT...",
        "> VERIFYING_DEPENDENCY_INTEGRITY...",
        "> NO_VULNERABILITIES_FOUND.",
        "> TLS_HANDSHAKE_SUCCESS.",
        "> FIREWALL_STATUS: ACTIVE",

        // ───── DEPLOYMENT
        "> DEPLOYING_TO_EDGE...",
        "> UPDATING_CDN_CACHE...",
        "> INVALIDATING_OLD_ASSETS...",
        "> DEPLOYMENT_SUCCESS.",
        "> VERSION: v5.7.22_ACTIVE",

        // ───── SYSTEM PERFORMANCE
        "> CHECKING_LATENCY... 24ms",
        "> CPU_USAGE: 12%",
        "> MEMORY_USAGE: 46%",
        "> GPU_ACCELERATION_ENABLED.",
        "> SYSTEM_STABLE.",
        "> IDLE_MONITOR_ACTIVE.",

        // ───── RIZIN CUSTOM (to build character)
        "> LOADING_RIZIN_CORE_MODULES...",
        "> APPLYING_CLEAN_CODE_PROTOCOL...",
        "> EXECUTING_SCALABILITY_ROUTINES...",
        "> DEBUGGER_READY.",
        "> UX_OPTIMIZATION_ENGINE_ACTIVE.",
      ];
      const randomLog = newLogs[Math.floor(Math.random() * newLogs.length)];
      setLogs((prev) => [...prev.slice(-6), randomLog]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-[10px] text-neutral-500 flex-1 flex flex-col justify-end overflow-hidden">
      {logs.map((log, i) => (
        <div key={i} className={i === logs.length - 1 ? "text-white" : "opacity-50"}>
          {log}
        </div>
      ))}
      <div className="h-2 w-2 bg-red-600 animate-pulse mt-1" />
    </div>
  );
}

function ReposView({ redMode }) {
  return (
    <div className="pb-32">
      <h2 className="text-xl font-mono font-bold text-white border-b border-neutral-800 pb-4 mb-8">
        GITHUB_REPOSITORIES
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {GITHUB_REPOS.map((repo, i) => (
          <Card
            key={i}
            className="p-6 flex flex-col justify-between group cursor-pointer hover:bg-neutral-900"
            redMode={redMode}
            onClick={() => window.open(repo.url, "_blank")}
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <Github size={20} className={redMode ? "text-red-600" : "text-white"} />
                <span className="text-[10px] font-mono border border-neutral-800 px-2 text-neutral-500">
                  {repo.lang}
                </span>
              </div>
              <h3 className="text-lg font-bold font-mono text-white mb-2 group-hover:underline">
                {repo.name}
              </h3>
              <p className="text-xs font-mono text-neutral-400 leading-relaxed">{repo.desc}</p>
            </div>
            <div className="flex gap-4 mt-6 text-xs font-mono text-neutral-500">
              <div className="flex items-center gap-1">
                <Star size={12} /> {repo.stars}
              </div>
              <div className="flex items-center gap-1">
                <GitFork size={12} /> {repo.forks}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Firmware({ redMode }) {
  return (
    <div className="pb-32">
      <h2 className="text-xl font-mono font-bold text-white border-b border-neutral-800 pb-4 mb-8">
        FIRMWARE_MAP
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {FIRMWARE_MODULES.map((mod, i) => (
          <Card key={i} className="p-6" redMode={redMode}>
            <h3 className="text-xs font-mono text-red-600 mb-4 border-b border-neutral-900 pb-2 flex items-center gap-2">
              <Hash size={12} /> {mod.cat}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {mod.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <span className="text-xs font-mono text-white">{item.id}</span>
                  <span className="text-[10px] font-mono text-neutral-500 border border-neutral-800 px-1">
                    {item.ver}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Logs() {
  const SYSTEM_LOGS = [
    {
      date: "2023-11-28",
      event: "INIT_EMPLOYMENT",
      detail: "Joined SRV Infotech as Full Stack Developer.",
    },
    {
      date: "2023-12-10",
      event: "DEPLOY_PORTAL",
      detail: "Built MERN-based university job & internship platform.",
    },
    {
      date: "2024-01-15",
      event: "DB_OPTIMIZE",
      detail: "Reduced query latency on large govt datasets.",
    },
    {
      date: "2024-02-17",
      event: "ELEVATE_ROLE",
      detail: "Promoted to Project Lead; managing a 3-member dev team.",
    },
    {
      date: "2024-03-20",
      event: "CI_PIPELINE",
      detail: "Implemented automated CI/CD for zero-downtime releases.",
    },
    {
      date: "2024-05-05",
      event: "SECURITY_HARDEN",
      detail: "Integrated RBAC, JWT rotation, and secure REST endpoints.",
    },
    {
      date: "2024-06-27",
      event: "SCALABILITY",
      detail: "Scaled systems to support 500+ daily active users.",
    },
    {
      date: "2024-08-12",
      event: "MENTOR_DEV",
      detail: "Mentored junior devs on Clean Code & architecture patterns.",
    },
    {
      date: "PRESENT",
      event: "ACTIVE_SERVICE",
      detail: "Maintaining production stability, security & uptime.",
    },
  ];

  return (
    <div className="pb-32">
      <h2 className="text-xl font-mono font-bold text-white border-b border-neutral-800 pb-4 mb-8">
        SYSTEM_LOGS
      </h2>
      <div className="relative border-l border-neutral-800 ml-3 space-y-8">
        {SYSTEM_LOGS.map((log, i) => (
          <div key={i} className="pl-8 relative">
            <div
              className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border ${
                i === SYSTEM_LOGS.length - 1
                  ? "bg-red-600 border-red-600 animate-pulse"
                  : "bg-black border-neutral-600"
              }`}
            />
            <div className="flex gap-2 mb-1">
              <span className="text-[10px] font-mono text-red-600 border border-neutral-900 px-2 bg-neutral-950">
                {log.date}
              </span>
              <span className="text-sm font-bold font-mono text-white">{log.event}</span>
            </div>
            <p className="text-xs font-mono text-neutral-500">{log.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Shipments({ setModal, redMode }) {
  return (
    <div className="pb-32">
      <h2 className="text-xl font-mono font-bold text-white border-b border-neutral-800 pb-4 mb-8">
        Projects
      </h2>
      <div className="grid gap-4">
        {PROJECTS.map((p) => (
          <Card
            key={p.id}
            onClick={() => setModal(p)}
            className="p-6 cursor-pointer hover:border-white group"
            redMode={redMode}
          >
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-red-600 text-xs">ID_{p.id}</span>
                  <h3 className="text-2xl font-bold text-white tracking-tighter group-hover:underline">
                    {p.name}
                  </h3>
                </div>
                <p className="text-sm font-mono text-neutral-400 max-w-xl">{p.desc}</p>
              </div>
              <div className="self-start p-2 border border-neutral-800 text-neutral-500 group-hover:bg-white group-hover:text-black transition-colors">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Gear({ redMode }) {
  return (
    <div className="pb-32">
      <h2 className="text-xl font-mono font-bold text-white border-b border-neutral-800 pb-4 mb-8">
        HARDWARE_MANIFEST
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {GEAR.map((cat, i) => (
          <Card key={i} className="p-6" redMode={redMode}>
            <h3 className="text-xs font-mono text-red-600 mb-4 border-b border-neutral-900 pb-2">
              {cat.category}
            </h3>
            <ul className="space-y-3">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-xs font-mono text-neutral-400"
                >
                  <div className="w-1 h-1 bg-neutral-600 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}

function TimeWidget() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="font-mono text-xs text-neutral-500 flex items-center gap-2">
      <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
      {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
    </div>
  );
}

function Dashboard({ setView, stats, redMode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-4 pb-32">
      {/* ROW 1 */}
      <Card
        className="md:col-span-2 md:row-span-2 p-8 flex flex-col justify-between bg-neutral-950/50"
        redMode={redMode}
      >
        <div className="space-y-5">
          {/* STATUS + RESUME */}
          <div className="flex justify-between items-start">
            <div
              className={`inline-flex items-center gap-2 px-2 py-1 border rounded-full ${
                redMode ? "border-red-900" : "border-neutral-800"
              }`}
            >
              <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
              <span className="text-[10px] font-mono text-neutral-400 tracking-widest">ONLINE</span>
            </div>

            {/* Resume */}
            <button
              onClick={() => window.open("/rizin_resume.pdf", "_blank")}
              className={`flex items-center gap-2 px-3 py-1 border transition-colors group cursor-pointer ${
                redMode
                  ? "border-red-900 hover:bg-red-900/20"
                  : "border-neutral-800 hover:bg-neutral-900"
              }`}
            >
              <Download
                size={12}
                className={redMode ? "text-red-600" : "text-neutral-400 group-hover:text-white"}
              />
              <span className="text-[10px] font-mono text-neutral-500 group-hover:text-white">
                GET_RESUME
              </span>
            </button>
          </div>

          {/* NAME */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter leading-[0.9]">
              <ScrambleText text={IDENTITY.user.split(" ")[0]} />
              <br />
              <span className="text-neutral-600">
                <ScrambleText text={IDENTITY.user.split(" ")[1]} />
              </span>
            </h1>

            <div className="mt-2 text-xs font-mono text-red-600">{IDENTITY.role}</div>
          </div>

          {/* BIO */}
          <p className="font-mono text-xs text-neutral-500 max-w-sm mt-4">{IDENTITY.bio}</p>
        </div>

        {/* FLAGS */}
        <div className="flex gap-2 flex-wrap mt-6">
          {IDENTITY.flags.map((f) => (
            <span
              key={f}
              className="text-[9px] border border-neutral-800 px-2 py-[2px] text-neutral-500 tracking-wide"
            >
              {f}
            </span>
          ))}
        </div>
      </Card>

      <Card className="md:col-span-1 p-6 flex flex-col justify-between" redMode={redMode}>
        <div className="flex justify-between items-start">
          <Activity size={20} className={redMode ? "text-red-600" : "text-neutral-400"} />
          <span className="text-[10px] font-mono text-neutral-600">SYS_MONITOR</span>
        </div>
        <div className="space-y-2 font-mono text-xs">
          <div className="flex justify-between text-neutral-400">
            <span>CPU_TEMP</span> <span className="text-white">{stats.temp}°C</span>
          </div>
          <div className="flex justify-between text-neutral-400">
            <span>RAM_USAGE</span> <span className="text-white">{stats.ram}%</span>
          </div>
          <div className="flex justify-between text-neutral-400">
            <span>BATTERY</span>
            <span className={stats.bat < 20 ? "text-red-600" : "text-white"}>
              {Math.floor(stats.bat)}%
            </span>
          </div>
        </div>
      </Card>
      <div className="md:col-span-1">
        <AudioGlyph redMode={redMode} />
      </div>

      {/* ROW 2 */}
      <div className="md:col-span-1">
        <NetworkTraffic redMode={redMode} />
      </div>
      <div className="md:col-span-1">
        <EndpointLatency redMode={redMode} />
      </div>

      {/* ROW 3 */}

      <Card
        className="md:col-span-2 p-6 cursor-pointer hover:border-white"
        redMode={redMode}
        onClick={() => window.open("https://leetcode.com/u/muhammed-rizin/")}
      >
        <LeetCodeWidget redMode={redMode} />
      </Card>
      <div className="md:col-span-1">
        <DeployStream redMode={redMode} />
      </div>

      <Card
        onClick={() => setView("repos")}
        className="md:col-span-1 p-6 cursor-pointer hover:border-white"
        redMode={redMode}
      >
        <StarredRepos redMode={redMode} />
      </Card>
      <div className="md:col-span-2">
        <ProcessManager redMode={redMode} />
      </div>
      <div className="md:col-span-2">
        <Card className="p-4 h-48 col-span-2">
          <div className="flex justify-between items-center mb-2 border-b border-neutral-900 pb-2">
            <div className="text-[10px] font-mono text-neutral-500">KERNEL_LOG</div>
            <div className="text-[10px] font-mono text-red-600 animate-pulse">LIVE</div>
          </div>
          <TerminalLog />
        </Card>
      </div>

      {/* ROW 4 */}

      {/* ROW 5 */}
      <div className="md:col-span-2">
        <ClusterStatus redMode={redMode} />
      </div>
      <Card
        className="md:col-span-2 p-6 flex items-center justify-between  hover:border-white"
        redMode={redMode}
      >
        <Matrix redMode={redMode} />
      </Card>
    </div>
  );
}

// --- 6. MAIN APP ---

export default function App() {
  const [view, setView] = useState("dashboard");
  const [booted, setBooted] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [redMode, setRedMode] = useState(false);
  const stats = useSystemMonitor();

  useKonami(() => setRedMode((p) => !p));

  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCmdOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view]);

  return (
    <div
      className={`min-h-screen bg-black text-neutral-200 font-sans selection:bg-red-600/30 relative overflow-x-hidden ${
        redMode ? "selection:bg-red-900/50" : ""
      }`}
    >
      <DottedBg />
      <Scanline />
      <ProjectModal project={modalData} onClose={() => setModalData(null)} redMode={redMode} />
      {!booted && <BootScreen onComplete={() => setBooted(true)} />}

      {cmdOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setCmdOpen(false)}
        >
          <div
            className={`w-full max-w-lg border bg-black shadow-2xl ${
              redMode ? "border-red-600" : "border-neutral-800"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-neutral-800 p-4">
              <Terminal size={18} className="text-red-600" />
              <input
                autoFocus
                placeholder="EXECUTE..."
                className="bg-transparent w-full outline-none font-mono text-white text-sm"
              />
              <button onClick={() => setCmdOpen(false)}>
                <X size={18} className="text-neutral-500 hover:text-white" />
              </button>
            </div>
            <div className="p-2 grid gap-1">
              {[
                { id: "dashboard", icon: Layers, l: "DASHBOARD" },
                { id: "projects", icon: Zap, l: "SHIPMENTS" },
                { id: "repos", icon: Github, l: "REPOS" },
                { id: "firmware", icon: Cpu, l: "FIRMWARE" },
                { id: "logs", icon: Activity, l: "LOGS" },
                { id: "gear", icon: HardDrive, l: "GEAR" },
              ].map((cmd) => (
                <button
                  key={cmd.id}
                  onClick={() => {
                    setView(cmd.id);
                    setCmdOpen(false);
                  }}
                  className="w-full flex items-center gap-3 p-3 hover:bg-neutral-900 text-neutral-400 hover:text-white transition-colors font-mono text-sm"
                >
                  <cmd.icon size={16} /> {cmd.l}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setView("dashboard")}
          >
            <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_red]" />
            <span className="font-mono font-bold text-white tracking-tight">Rizin</span>
          </div>
          <TimeWidget />
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 pt-8 min-h-screen">
        {view === "dashboard" && <Dashboard setView={setView} stats={stats} redMode={redMode} />}
        {view === "repos" && <ReposView redMode={redMode} />}
        {view === "firmware" && <Firmware redMode={redMode} />}
        {view === "logs" && <Logs redMode={redMode} />}
        {view === "projects" && <Shipments setModal={setModalData} redMode={redMode} />}
        {view === "gear" && <Gear redMode={redMode} />}
      </main>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
        <div className="flex justify-between items-center px-2 py-2 bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 rounded-full shadow-2xl">
          {[
            { id: "dashboard", icon: Layers },
            { id: "projects", icon: Zap },
            { id: "repos", icon: Github },
            { id: "firmware", icon: Cpu },
            { id: "logs", icon: Activity },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`relative p-3 rounded-full transition-all group cursor-pointer ${
                view === item.id ? "text-white bg-neutral-800" : "text-neutral-500 hover:text-white"
              }`}
            >
              <item.icon size={20} />
              {view === item.id && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
