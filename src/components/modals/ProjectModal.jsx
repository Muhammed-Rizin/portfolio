import { ExternalLink, X } from "lucide-react";

function ProjectModal({ project, onClose, redMode }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-200 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className={`w-full max-w-2xl bg-black border p-6 md:p-8 relative shadow-2xl max-h-[85vh] overflow-y-auto ${
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
        <h2 className="text-2xl md:text-3xl font-bold font-mono text-white mb-2 wrap-break-word">
          {project.name}
        </h2>
        <div className="text-xs font-mono text-neutral-500 mb-4">{project.role}</div>

        <p className="font-mono text-sm text-neutral-300 leading-relaxed mb-6 border-l-2 border-neutral-800 pl-4">
          {project.summary}
        </p>

        {project.impact && (
          <div className="mb-6">
            <h3 className={`text-xs font-mono mb-2 ${redMode ? "text-red-500" : "text-white"}`}>
              IMPACT_ANALYSIS
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {project.impact.map((item, i) => (
                <li key={i} className="text-xs font-mono text-neutral-400 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.contributions && (
          <div className="mb-6">
            <h3 className={`text-xs font-mono mb-2 ${redMode ? "text-red-500" : "text-white"}`}>
              KEY_CONTRIBUTIONS
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {project.contributions.map((item, i) => (
                <li key={i} className="text-xs font-mono text-neutral-400 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex gap-2 mb-8 flex-wrap">
          {project.stack.map((s) => (
            <span
              key={s}
              className="px-2 py-1 border border-neutral-800 text-[10px] font-mono text-neutral-400"
            >
              {s}
            </span>
          ))}
        </div>

        {project.live && (
          <button
            onClick={() => window.open(project.live, "_blank", "noopener,noreferrer")}
            className={`w-full py-3 font-mono font-bold text-sm flex items-center justify-center gap-2 cursor-pointer ${
              redMode
                ? "bg-red-600 text-black hover:bg-red-500"
                : "bg-white text-black hover:bg-neutral-200"
            }`}
          >
            INITIATE_UPLINK <ExternalLink size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

export default ProjectModal;
