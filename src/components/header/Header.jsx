import { ExternalLink, Search } from "lucide-react";
import { useView } from "../../context/ViewContext";
import TimeWidget from "./TimeWidget";

const Header = () => {
  const { setCmdOpen } = useView();

  return (
    <header className="sticky top-0 z-50 px-3 md:px-6 pt-4">
      <div className="max-w-7xl mx-auto brutal-card bg-[var(--neo-surface)] px-4 md:px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-[3px] border-black bg-[var(--neo-primary)] shadow-[3px_3px_0_#000]" />
          <div className="text-left leading-none">
            <p className="text-lg md:text-xl uppercase text-[var(--neo-ink)]">Rizin</p>
            <p className="neo-mono text-[9px] md:text-[10px] font-bold tracking-wider text-[var(--neo-muted)]">
              FULL STACK PORTFOLIO
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={() =>
              window.open("https://muhammedrizin.in/", "_blank", "noopener,noreferrer")
            }
            className="brutal-btn bg-[var(--neo-primary)] text-black px-3 py-2 text-[10px] md:text-xs inline-flex items-center gap-2 cursor-pointer"
            aria-label="Open terminal portfolio"
          >
            <ExternalLink size={14} />
            TERMINAL
          </button>
          <button
            type="button"
            onClick={() => setCmdOpen(true)}
            className="brutal-btn bg-[var(--neo-lime)] text-black px-3 py-2 text-[10px] md:text-xs inline-flex items-center gap-2 cursor-pointer"
            aria-label="Open command palette"
          >
            <Search size={14} />
            CMD+K
          </button>
          <TimeWidget />
        </div>
      </div>
    </header>
  );
};

export default Header;
