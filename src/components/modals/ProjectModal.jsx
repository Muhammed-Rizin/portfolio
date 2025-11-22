import { ExternalLink, X } from "lucide-react";

function ProjectModal({ project, onClose, redMode }) {
  if (!project) return null;
  return (
    <div
      className="fixed inset-0 z-200 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
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

export default ProjectModal;
