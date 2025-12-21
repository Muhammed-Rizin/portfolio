import { ExternalLink, X } from "lucide-react";

function ProjectModal({ project, onClose, redMode }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-200 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className={`w-full max-w-2xl bg-black border p-5 md:p-8 relative shadow-2xl max-h-[80vh] md:max-h-[90vh] overflow-y-auto wrap-break-word ${
          redMode ? "border-red-600" : "border-neutral-700"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-500 hover:text-white cursor-pointer z-10"
        >
          <X size={24} />
        </button>
        <div className="text-[10px] font-mono text-red-600 mb-2">LOG_#{project.id}</div>
        <h2 className="text-2xl md:text-4xl font-bold font-mono text-white mb-4 pr-8">
          {project.name}
        </h2>
        <p className="font-mono text-sm text-neutral-400 leading-relaxed mb-6">{project.desc}</p>
        <div className="h-24 w-full border border-neutral-800 mb-6 relative overflow-hidden opacity-50 shrink-0">
          <svg className="absolute inset-0 w-full h-full">
            <path
              d="M0 10 H50 V20 H100"
              fill="none"
              stroke={redMode ? "red" : "white"}
              strokeWidth="1"
            />
            <rect x="50" y="15" width="10" height="10" fill={redMode ? "red" : "white"} />
          </svg>
        </div>

        <div className="border-t border-neutral-800 pt-4 mb-4">
          <h3 className="text-xs font-mono text-white mb-2">BRIEF</h3>
          <p className="font-mono text-xs text-neutral-500 leading-relaxed">{project.detail}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((s) => (
            <span
              key={s}
              className="px-2 py-1 border border-neutral-800 text-[10px] font-mono text-neutral-400 whitespace-nowrap"
            >
              {s}
            </span>
          ))}
        </div>

        {project?.live && (
          <button
            onClick={() => window.open(project.live, "_blank", "noopener,noreferrer")}
            className={`w-full py-3 font-mono font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors ${
              redMode
                ? "bg-red-600 text-black hover:bg-red-500"
                : "bg-white text-black hover:bg-neutral-200"
            }`}
          >
            INITIATE_DEMO <ExternalLink size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

export default ProjectModal;
