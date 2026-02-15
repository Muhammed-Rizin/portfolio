import { useEffect, useMemo, useState } from "react";

export default function BootScreen() {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [hide, setHide] = useState(false);

  const accents = useMemo(
    () => [
      "bg-[var(--neo-primary)]",
      "bg-[var(--neo-secondary)]",
      "bg-[var(--neo-accent)]",
      "bg-[var(--neo-lime)]",
      "bg-[var(--neo-orange)]",
      "bg-[var(--neo-blue)]",
    ],
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        const next = prev + Math.floor(Math.random() * 9) + 5;
        return next > 100 ? 100 : next;
      });
    }, 90);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress < 100) return undefined;

    const fadeTimer = setTimeout(() => setExiting(true), 220);
    const hideTimer = setTimeout(() => setHide(true), 760);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [progress]);

  const skipIntro = () => setProgress(100);

  if (hide) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] bg-[var(--neo-bg)] flex items-center justify-center p-4 md:p-8 transition-opacity duration-500 ${
        exiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-12 -left-12 w-36 h-36 border-4 border-black bg-[var(--neo-secondary)] rotate-12" />
        <div className="absolute -bottom-10 right-14 w-28 h-28 border-4 border-black bg-[var(--neo-accent)] -rotate-6" />
        <div className="absolute top-[20%] right-[18%] w-10 h-10 border-4 border-black bg-[var(--neo-lime)] animate-pulse" />
      </div>

      <section className="relative w-full max-w-3xl brutal-card bg-white p-5 md:p-7">
        <button
          type="button"
          onClick={skipIntro}
          className="absolute top-4 right-4 brutal-btn bg-[var(--neo-accent)] text-black px-2.5 py-1 text-[10px] cursor-pointer"
        >
          SKIP
        </button>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="brutal-chip bg-[var(--neo-primary)] text-black">RIZIN</span>
          <span className="brutal-chip bg-[var(--neo-secondary)] text-black">NEO SYSTEM</span>
        </div>

        <h1 className="text-4xl md:text-6xl uppercase leading-[0.9] text-black">Build Loud.</h1>
        <p className="neo-mono text-xs md:text-sm text-black/70 mt-3 max-w-xl">
          Loading portfolio modules with a neo-brutalist visual stack.
        </p>

        <div className="mt-6 brutal-card bg-[var(--neo-bg-2)] p-2 md:p-3">
          <div className="h-5 border-[3px] border-black bg-white overflow-hidden">
            <div
              className="h-full bg-black transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between neo-mono text-[10px] md:text-xs">
            <span>LAUNCHING EXPERIENCE</span>
            <span>{progress}%</span>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-6 gap-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className={`h-5 border-[3px] border-black ${
                accents[i % accents.length]
              } ${i % 3 === 0 ? "animate-pulse" : ""}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
