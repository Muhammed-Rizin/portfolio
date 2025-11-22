import React, { useState, useEffect } from "react";

export default function BootScreen({ duration = 300 }) {
  const [lines, setLines] = useState([]);
  const [booted, setBooted] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const sequence = [
      "NEXUS-OS BOOTLOADER v3.7",
      "INITIALIZING_CORE_MODULES...",
      "IDENTITY_CHECK... [MUHAMMED_RIZIN]",
      "ROLE_VERIFIED... [FULL_STACK_ENGINEER]",
      "LOADING_RUNTIME... [REACT • NODE • TYPESCRIPT • AWS]",
      "STARTING_SERVICES... AUTH | API | CACHE | DB_CLUSTER",
      "NETWORK_HANDSHAKE... STABLE (24ms)",
      "SECURITY_PROTOCOLS... PASSED",
      "SYSTEM_OPTIMIZATION... COMPLETE",
      "ENVIRONMENT_READY.",
    ];

    let delay = 100;

    sequence.forEach((line, index) => {
      setTimeout(() => {
        setLines((prev) => [...prev, line]);

        // When last line is done → trigger boot complete
        if (index === sequence.length - 1) {
          setTimeout(() => {
            setBooted(true);

            // fade out animation
            setTimeout(() => setHide(true), 600);
          }, 800);
        }
      }, delay);

      delay += duration;
    });
  }, [duration]);

  if (hide) return null;

  return (
    <div
      className={`fixed inset-0 bg-black z-[999] flex flex-col justify-end p-8 font-mono text-xs text-red-600 pointer-events-none select-none transition-opacity duration-700
        ${booted ? "opacity-0" : "opacity-100"}`}
    >
      {lines.map((l, i) => (
        <div key={i}>&gt; {l}</div>
      ))}
      <div className="w-2 h-4 bg-red-600 animate-pulse mt-2" />
    </div>
  );
}
