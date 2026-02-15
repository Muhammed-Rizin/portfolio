import { useEffect, useState } from "react";

export default function BootScreen({ duration = 260 }) {
  const [lines, setLines] = useState([]);
  const [booted, setBooted] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const sequence = [
      "NEXUS-OS BOOTLOADER v3.7",
      "INITIALIZING CORE MODULES...",
      "IDENTITY CHECK... [MUHAMMED_RIZIN]",
      "ROLE VERIFIED... [FULL_STACK_ENGINEER]",
      "LOADING RUNTIME... [REACT | NODE | TYPESCRIPT | AWS]",
      "STARTING SERVICES... AUTH | API | CACHE | DB_CLUSTER",
      "NETWORK HANDSHAKE... STABLE (24ms)",
      "SECURITY PROTOCOLS... PASSED",
      "SYSTEM OPTIMIZATION... COMPLETE",
      "ENVIRONMENT READY.",
    ];

    let delay = 90;

    sequence.forEach((line, index) => {
      setTimeout(() => {
        setLines((prev) => [...prev, line]);
        if (index === sequence.length - 1) {
          setTimeout(() => {
            setBooted(true);
            setTimeout(() => setHide(true), 550);
          }, 650);
        }
      }, delay);

      delay += duration;
    });
  }, [duration]);

  if (hide) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-end p-4 md:p-8 transition-opacity duration-700 pointer-events-none ${
        booted ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-3xl brutal-card bg-black text-[var(--neo-primary)] p-4 md:p-6 neo-mono text-[10px] md:text-xs">
        {lines.map((line, i) => (
          <div key={i} className="mb-1">{`> ${line}`}</div>
        ))}
        <div className="w-2 h-4 bg-[var(--neo-primary)] animate-pulse mt-2" />
      </div>
    </div>
  );
}
