import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Cpu,
  ShieldCheck,
  Radio,
  Terminal,
  Zap,
  Wifi,
  Activity,
  Layers,
  Sparkles,
} from "lucide-react";
import { useView } from "../../context/ViewContext";

const BOOT_LOGS = [
  {
    time: "+0.012s",
    label: "RIZIN_CORE_INIT",
    status: "OK",
    detail: "SYSTEM_LOADED",
  },
  {
    time: "+0.038s",
    label: "HARDWARE_AFFINITY",
    status: "ACTIVE",
    detail: "8_CORES_ALLOC",
  },
  {
    time: "+0.074s",
    label: "MEMORY_CONTROLLER",
    status: "ONLINE",
    detail: "32GB_LPDDR5",
  },
  {
    time: "+0.118s",
    label: "IDENTITY_VERIFICATION",
    status: "VERIFIED",
    detail: "MUHAMMED_RIZIN",
  },
  {
    time: "+0.165s",
    label: "TECH_STACK_RUNTIME",
    status: "PASS",
    detail: "REACT19 • NODE • AWS",
  },
  {
    time: "+0.210s",
    label: "DATABASE_UPLINK",
    status: "ESTABLISHED",
    detail: "SUPABASE_EDGE",
  },
  {
    time: "+0.262s",
    label: "SECURITY_ENCLAVE",
    status: "ARMED",
    detail: "AES_256_GCM",
  },
  {
    time: "+0.315s",
    label: "GLYPH_LIGHT_MATRIX",
    status: "CALIBRATED",
    detail: "240HZ_PWM",
  },
  {
    time: "+0.370s",
    label: "PORTFOLIO_SYSTEMS",
    status: "NOMINAL",
    detail: "READY",
  },
];

const PHASES = [
  {
    min: 0,
    max: 20,
    label: "BOOTLOADER_STAGE_01",
    desc: "INITIALIZING HARDWARE ENCLAVE",
    icon: Cpu,
  },
  {
    min: 21,
    max: 45,
    label: "KERNEL_SYNTHESIS_02",
    desc: "ALLOCATING RUNTIME SUBSYSTEMS",
    icon: Layers,
  },
  {
    min: 46,
    max: 70,
    label: "NETWORK_HANDSHAKE_03",
    desc: "SYNCING SUPABASE & REST APIS",
    icon: Wifi,
  },
  {
    min: 71,
    max: 92,
    label: "GLYPH_CALIBRATION_04",
    desc: "CONFIGURING HARDWARE LIGHT GUIDE",
    icon: Zap,
  },
  {
    min: 93,
    max: 100,
    label: "SYSTEM_ONLINE_05",
    desc: "ALL SUBSYSTEMS OPERATIONAL",
    icon: Sparkles,
  },
];

export default function BootScreen({ onComplete }) {
  const { redMode } = useView();
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [booted, setBooted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [uptime, setUptime] = useState(0);

  // Uptime counter simulation
  useEffect(() => {
    const start = performance.now();
    const interval = setInterval(() => {
      setUptime(((performance.now() - start) / 1000).toFixed(2));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const finishBoot = useCallback(() => {
    setBooted(true);
    setTimeout(() => {
      setHidden(true);
      if (onComplete) onComplete();
    }, 650);
  }, [onComplete]);

  // Handle ESC or Space to fast-skip
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" || e.code === "Space") {
        e.preventDefault();
        finishBoot();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [finishBoot]);

  // Smooth realistic boot progression
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          finishBoot();
          return 100;
        }

        // Varied step increments simulating step processing
        const step =
          prev < 30
            ? Math.floor(Math.random() * 5) + 3
            : prev < 75
              ? Math.floor(Math.random() * 7) + 4
              : Math.floor(Math.random() * 10) + 6;

        const next = Math.min(100, prev + step);

        const currentLog = Math.min(
          BOOT_LOGS.length - 1,
          Math.floor((next / 100) * BOOT_LOGS.length),
        );
        setLogIndex(currentLog);

        return next;
      });
    }, 65);

    return () => clearInterval(interval);
  }, [finishBoot]);

  const activePhase = useMemo(() => {
    return PHASES.find((p) => progress >= p.min && progress <= p.max) || PHASES[0];
  }, [progress]);

  const PhaseIcon = activePhase.icon;

  if (hidden) return null;

  // Nothing OS Volume / Progress Track (28 segments)
  const totalBars = 28;
  const activeBars = Math.round((progress / 100) * totalBars);

  // Dynamic Audio / Pulse Equalizer Bars (16 simulated bands)
  const eqBars = [35, 60, 45, 80, 95, 70, 50, 85, 100, 65, 40, 75, 90, 55, 30, 70];

  return (
    <div
      onClick={finishBoot}
      role="button"
      tabIndex={0}
      aria-label="Muhammed Rizin System Boot Screen"
      className={`fixed inset-0 z-9999 bg-black text-white font-mono select-none cursor-pointer flex flex-col justify-between p-4 md:p-8 transition-all duration-700 ease-out ${
        booted ? "opacity-0 scale-105 pointer-events-none filter blur-sm" : "opacity-100 scale-100"
      }`}
    >
      {/* Background Matrix & Subtle Technical Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#ff2222_1px,transparent_1px)] bg-size-[20px_20px]" />
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(20,0,0,0.15)_50%,rgba(0,0,0,0.7)_100%)]" />

      {/* Technical Corner Crosshairs (Nothing OS Industrial Touch) */}
      <div className="absolute top-3 left-3 text-[9px] text-neutral-600 pointer-events-none">
        + [SYS_INIT_001]
      </div>
      <div className="absolute top-3 right-3 text-[9px] text-neutral-600 pointer-events-none hidden sm:block">
        [LOC: 11.2588° N, 75.7804° E] +
      </div>
      <div className="absolute bottom-3 left-3 text-[9px] text-neutral-600 pointer-events-none hidden sm:block">
        + [RIZIN_KERNEL // REV_3.0]
      </div>
      <div className="absolute bottom-3 right-3 text-[9px] text-neutral-600 pointer-events-none">
        [STATUS: 100% NOMINAL] +
      </div>

      {/* TOP INDUSTRIAL HEADER BAR */}
      <header className="relative z-10 flex items-center justify-between border-b border-neutral-900 pb-3 text-[10px] text-neutral-500">
        <div className="flex items-center gap-3">
          {/* Pulsing Recording Dot */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600 shadow-[0_0_8px_#ef4444]" />
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-white font-extrabold tracking-wider font-mono">
                MUHAMMED RIZIN
              </span>
              <span className="text-red-500 font-bold text-[9px] px-1 py-0.5 border border-red-500/40 rounded-xs bg-red-950/40 tracking-wider">
                OS
              </span>
            </div>
          </div>
          <span className="text-neutral-700 hidden sm:inline">|</span>
          <span className="hidden sm:inline text-neutral-400">KERNEL_BOOT // BUILD_2026.10</span>
          <span className="hidden md:inline text-neutral-600">[SYS_TIME: +{uptime}s]</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-neutral-400">
            <ShieldCheck size={12} className="text-red-500" />
            <span className="text-neutral-400">ENCLAVE: ACTIVE</span>
          </div>
          {/* Skip pill button */}
          <button
            type="button"
            onClick={finishBoot}
            className="flex items-center gap-1.5 border border-neutral-800 bg-neutral-950/80 hover:border-red-600 hover:text-white px-2.5 py-1 rounded-full transition-all duration-200 group shadow-xs"
          >
            <span className="text-neutral-400 group-hover:text-red-500 font-bold text-[9px]">
              ESC / SPACE
            </span>
            <span className="text-neutral-600 group-hover:text-neutral-300 text-[9px]">SKIP</span>
          </button>
        </div>
      </header>

      {/* CENTER GLYPH INTERFACE & TACHOMETER HUD */}
      <main className="relative z-10 flex flex-col items-center justify-center my-auto py-4">
        {/* The Nothing Glyph Lightmap Container */}
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 flex items-center justify-center mb-4">
          {/* Outer Technical Degree Dial */}
          <div className="absolute inset-0 rounded-full border border-neutral-800/80 animate-[spin_40s_linear_infinite]" />
          <div className="absolute inset-2 rounded-full border border-dashed border-neutral-800/60 animate-[spin_20s_linear_infinite_reverse]" />

          {/* Cardinal Coordinate Markers */}
          <span className="absolute top-1 text-[8px] text-neutral-600 font-mono tracking-widest">
            000°
          </span>
          <span className="absolute right-1 text-[8px] text-neutral-600 font-mono tracking-widest">
            090°
          </span>
          <span className="absolute bottom-1 text-[8px] text-neutral-600 font-mono tracking-widest">
            180°
          </span>
          <span className="absolute left-1 text-[8px] text-neutral-600 font-mono tracking-widest">
            270°
          </span>

          {/* SVG Glyph Geometry: Camera loop, diagonal slash, wireless loop, exclamation bottom */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200">
            {/* Top-Left Camera Loop Arc */}
            <path
              d="M 50,45 A 30,30 0 0,1 110,45"
              fill="none"
              stroke={progress >= 20 ? "#ffffff" : "#262626"}
              strokeWidth="2.5"
              strokeDasharray="4 2"
              className="transition-colors duration-300"
              style={{
                filter: progress >= 20 ? "drop-shadow(0 0 6px #ffffff)" : "none",
              }}
            />

            {/* Top-Right Diagonal Slash Light Guide */}
            <line
              x1="135"
              y1="35"
              x2="165"
              y2="65"
              stroke={progress >= 40 ? "#ff2222" : "#262626"}
              strokeWidth="3"
              strokeLinecap="round"
              className="transition-colors duration-300"
              style={{
                filter: progress >= 40 ? "drop-shadow(0 0 8px #ff2222)" : "none",
              }}
            />

            {/* Central Circular Progress Track (Background) */}
            <circle
              cx="100"
              cy="100"
              r="62"
              className="stroke-neutral-900"
              strokeWidth="4.5"
              fill="transparent"
            />

            {/* Active Circular Progress Ring */}
            <circle
              cx="100"
              cy="100"
              r="62"
              className="stroke-red-600 transition-all duration-150 ease-out"
              strokeWidth="4.5"
              strokeDasharray="389.5"
              strokeDashoffset={389.5 - (389.5 * progress) / 100}
              strokeLinecap="round"
              fill="transparent"
              transform="rotate(-90 100 100)"
              style={{
                filter: "drop-shadow(0 0 10px rgba(239, 68, 68, 0.7))",
              }}
            />

            {/* Bottom Exclamation Stem (Nothing Phone 1/2 Iconic Indicator) */}
            <line
              x1="100"
              y1="168"
              x2="100"
              y2="182"
              stroke={progress >= 75 ? "#ffffff" : "#262626"}
              strokeWidth="3"
              strokeLinecap="round"
              className="transition-colors duration-300"
              style={{
                filter: progress >= 75 ? "drop-shadow(0 0 6px #ffffff)" : "none",
              }}
            />

            {/* Bottom Red Recording Dot */}
            <circle
              cx="100"
              cy="192"
              r="3"
              className={progress >= 90 ? "fill-red-600 animate-ping" : "fill-neutral-800"}
            />
            <circle
              cx="100"
              cy="192"
              r="3"
              className={
                progress >= 90 ? "fill-red-600 shadow-[0_0_8px_#ef4444]" : "fill-neutral-800"
              }
            />
          </svg>

          {/* Central HUD Content */}
          <div className="flex flex-col items-center justify-center text-center z-10 px-4">
            <PhaseIcon
              size={22}
              className={`mb-1 transition-colors duration-300 ${
                redMode ? "text-red-500 animate-pulse" : "text-red-600 animate-pulse"
              }`}
            />
            {/* Bold Nothing Dot Percentage */}
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-white font-mono flex items-baseline">
              <span>{String(progress).padStart(2, "0")}</span>
              <span className="text-xs sm:text-sm text-red-500 font-bold ml-1">%</span>
            </div>

            <div className="text-[9px] tracking-widest text-neutral-400 uppercase mt-0.5 font-bold">
              {progress === 100 ? "INITIALIZED" : "SYNCHRONIZING"}
            </div>

            <div className="text-[8px] text-neutral-600 font-mono mt-0.5">
              {Math.round((progress / 100) * 4096)}MB / 4096MB
            </div>
          </div>
        </div>

        {/* Phase Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-950/90 border border-neutral-800/90 rounded-full mb-3 backdrop-blur-sm shadow-inner">
          <Radio size={11} className="text-red-500 animate-pulse shrink-0" />
          <span className="text-[10px] tracking-wider text-neutral-300 font-bold uppercase">
            {activePhase.label}
          </span>
          <span className="text-[10px] text-neutral-600 hidden sm:inline">
            // {activePhase.desc}
          </span>
        </div>

        {/* Nothing OS Segmented Volume Track */}
        <div className="flex items-center gap-1 max-w-xs sm:max-w-sm md:max-w-md w-full px-4 mb-3">
          {Array.from({ length: totalBars }).map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-[1px] transition-all duration-100 ${
                i < activeBars
                  ? i === activeBars - 1
                    ? "bg-white shadow-[0_0_10px_#ffffff]"
                    : "bg-red-600 shadow-[0_0_4px_#ef4444]"
                  : "bg-neutral-900"
              }`}
            />
          ))}
        </div>

        {/* Simulated Micro Equalizer Visualizer */}
        <div className="flex items-end justify-center gap-1 h-4 max-w-xs w-full opacity-60">
          {eqBars.map((height, i) => {
            const barHeight = Math.max(15, Math.min(100, (height * (progress + 20)) / 100));
            return (
              <div
                key={i}
                className="w-1 bg-neutral-800 transition-all duration-150 rounded-xs"
                style={{
                  height: `${barHeight}%`,
                  backgroundColor: i % 3 === 0 ? "#ef4444" : i % 2 === 0 ? "#ffffff" : "#404040",
                }}
              />
            );
          })}
        </div>
      </main>

      {/* FOOTER DIAGNOSTICS & TELEMETRY STREAM */}
      <footer className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-neutral-900 pt-3 text-[10px]">
        {/* Terminal Live Output Feed */}
        <div className="md:col-span-2 space-y-1 overflow-hidden h-24 flex flex-col justify-end">
          <div className="flex items-center gap-2 text-neutral-500 pb-1 border-b border-neutral-900/60 mb-1">
            <Terminal size={11} className="text-red-500" />
            <span className="font-bold text-[9px] tracking-wider text-neutral-400">
              SYS_DIAGNOSTICS_STREAM
            </span>
            <span className="text-[8px] text-neutral-600">// LIVE PIPELINE</span>
          </div>

          {BOOT_LOGS.slice(0, logIndex + 1).map((log, i) => (
            <div key={i} className="flex items-center gap-2 text-neutral-400 leading-tight">
              <span className="text-neutral-600 font-mono shrink-0">[{log.time}]</span>
              <span className="text-neutral-300 font-bold shrink-0">&gt; {log.label}</span>
              <span className="text-neutral-800 hidden sm:inline truncate">
                ................................
              </span>
              <span className="text-neutral-500 hidden sm:inline text-[9px]">{log.detail}</span>
              <span className="text-red-500 font-bold shrink-0 ml-auto sm:ml-0">
                [{log.status}]
              </span>
            </div>
          ))}

          <div className="flex items-center gap-1.5 text-red-500">
            <Activity size={10} className="animate-spin text-red-500" />
            <span className="font-bold">&gt; EXEC_SUBSYSTEM_ONLINE</span>
            <span className="w-1.5 h-3 bg-red-600 animate-pulse ml-0.5" />
          </div>
        </div>

        {/* System Specs & Operator Dossier */}
        <div className="hidden md:flex flex-col justify-end items-end space-y-1.5 text-right text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="text-neutral-600">OPERATOR:</span>
            <span className="text-white font-bold tracking-wider">MUHAMMED RIZIN</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-neutral-600">ROLE:</span>
            <span className="text-neutral-300">FULL STACK & DISTRIBUTED SYSTEMS</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-neutral-600">STACK:</span>
            <span className="text-neutral-300">REACT 19 • NODE • AWS • SUPABASE</span>
          </div>
          <div className="flex items-center gap-2 pt-1 border-t border-neutral-900 w-full justify-end">
            <span className="text-neutral-600">GLYPH TELEMETRY:</span>
            <span className="text-red-500 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              240Hz_ACTIVE
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
