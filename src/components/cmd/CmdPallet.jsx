import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useView } from "../../context/ViewContext";
import { SECTIONS } from "../../data/sections";
import { Terminal, X } from "lucide-react";

const CmdPalette = () => {
  const navigate = useNavigate();
  const { cmdOpen, setCmdOpen, redMode } = useView();

  // Register global CMD+K listener HERE (safe, isolated)
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCmdOpen((o) => !o);
      }
    };

    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, [setCmdOpen]);

  if (!cmdOpen) return null;

  const handleNavigate = (id) => {
    navigate(`/${id === "dashboard" ? "dashboard" : id}`);
    setCmdOpen(false);
  };

  return (
    <div
      className="fixed inset-0 z-100 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={() => setCmdOpen(false)}
    >
      <div
        className={`w-full max-w-lg border bg-black shadow-2xl ${
          redMode ? "border-red-600" : "border-neutral-800"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
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

        {/* Action List */}
        <div className="p-2 grid gap-1">
          {SECTIONS.map((cmd) => (
            <button
              key={cmd.id}
              onClick={() => handleNavigate(cmd.id)}
              className="w-full flex items-center gap-3 p-3 hover:bg-neutral-900 text-neutral-400 hover:text-white transition-colors font-mono text-sm"
            >
              <cmd.icon size={16} /> {cmd.l}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CmdPalette;
