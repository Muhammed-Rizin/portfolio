import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Terminal, X } from "lucide-react";
import { useView } from "../../context/ViewContext";
import { SECTIONS } from "../../data/sections";

const CmdPalette = () => {
  const navigate = useNavigate();
  const { cmdOpen, setCmdOpen } = useView();
  const [query, setQuery] = useState("");

  const closePalette = () => {
    setCmdOpen(false);
    setQuery("");
  };

  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCmdOpen((open) => {
          const next = !open;
          if (!next) setQuery("");
          return next;
        });
      }
      if (e.key === "Escape") {
        setCmdOpen(false);
        setQuery("");
      }
    };

    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, [setCmdOpen]);

  const commands = useMemo(
    () =>
      SECTIONS.filter((cmd) =>
        cmd.l.toLowerCase().includes(query.trim().toLowerCase())
      ),
    [query]
  );

  if (!cmdOpen) return null;

  const handleNavigate = (id) => {
    navigate(`/${id === "dashboard" ? "dashboard" : id}`);
    closePalette();
  };

  return (
    <div
      className="fixed inset-0 z-[140] bg-black/60 backdrop-blur-[1px] flex items-start justify-center px-4 pt-24"
      onClick={closePalette}
    >
      <div
        className="w-full max-w-xl brutal-card bg-[var(--neo-surface)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b-4 border-black px-4 py-3 bg-[var(--neo-secondary)]">
          <Terminal size={17} className="text-black" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="TYPE A COMMAND..."
            className="bg-transparent w-full outline-none text-black neo-mono text-sm placeholder:text-black/60"
          />
          <button
            type="button"
            onClick={closePalette}
            className="brutal-btn bg-white text-black p-1"
          >
            <X size={14} />
          </button>
        </div>

        <div className="p-3 grid gap-2 max-h-[360px] overflow-y-auto">
          {commands.map((cmd) => (
            <button
              key={cmd.id}
              onClick={() => handleNavigate(cmd.id)}
              className="brutal-btn bg-[var(--neo-bg)] text-black w-full px-3 py-2 flex items-center gap-3 text-sm"
            >
              <cmd.icon size={15} />
              <span className="neo-mono">{cmd.l}</span>
            </button>
          ))}
          {commands.length === 0 && (
            <div className="neo-mono text-xs text-[var(--neo-muted)] px-2 py-3">
              NO COMMAND MATCHED.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CmdPalette;
