import { BriefcaseBusiness, ExternalLink, Sparkles, X } from "lucide-react";

const STACK_COLORS = [
  "bg-[var(--neo-primary)]",
  "bg-[var(--neo-secondary)]",
  "bg-[var(--neo-lime)]",
  "bg-[var(--neo-accent)]",
];

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/70 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[88vh] overflow-y-auto brutal-card bg-[var(--neo-surface)] p-5 md:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="brutal-card bg-[var(--neo-primary)] p-4 md:p-5 mb-5 relative overflow-hidden">
          <span className="absolute -top-5 -right-5 w-20 h-20 border-4 border-black bg-[var(--neo-accent)] rotate-12" />
          <span className="absolute -bottom-6 right-16 w-14 h-14 border-4 border-black bg-[var(--neo-secondary)] -rotate-12" />

          <div className="relative z-10 flex justify-between items-start gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="brutal-chip bg-white text-black">{`PROJECT #${project.id}`}</span>
              {project.category && (
                <span className="brutal-chip bg-[var(--neo-lime)] text-black">{project.category}</span>
              )}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="brutal-btn bg-[var(--neo-accent)] text-black p-2 cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          <div className="relative z-10 mt-3">
            <h2 className="text-2xl md:text-5xl uppercase text-black break-words leading-[0.95]">
              {project.name}
            </h2>
            <div className="mt-3 inline-flex items-center gap-2 brutal-chip bg-white text-black max-w-full">
              <BriefcaseBusiness size={12} />
              <span className="truncate">{project.role}</span>
            </div>
          </div>
        </header>

        <div className="brutal-card bg-[var(--neo-bg)] p-4 mb-5">
          <p className="neo-mono text-sm leading-relaxed text-[var(--neo-text)]">{project.summary}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          {project.impact && (
            <section className="brutal-card bg-[var(--neo-lime)] p-4">
              <h3 className="section-title bg-white mb-3">
                <Sparkles size={12} />
                Impact
              </h3>
              <ul className="space-y-2">
                {project.impact.map((item, i) => (
                  <li
                    key={i}
                    className="neo-mono text-xs brutal-card bg-white p-3 leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.contributions && (
            <section className="brutal-card bg-[var(--neo-secondary)] p-4">
              <h3 className="section-title bg-white mb-3">Key Contributions</h3>
              <ul className="space-y-2">
                {project.contributions.map((item, i) => (
                  <li
                    key={i}
                    className="neo-mono text-xs brutal-card bg-white p-3 leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <div className="mb-6">
          <h3 className="section-title bg-[var(--neo-primary)] mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, idx) => (
              <span
                key={tech}
                className={`brutal-chip text-black ${STACK_COLORS[idx % STACK_COLORS.length]}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.live && (
          <button
            type="button"
            onClick={() => window.open(project.live, "_blank", "noopener,noreferrer")}
            className="brutal-btn w-full bg-[var(--neo-orange)] text-black py-3 text-sm inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            OPEN LIVE PROJECT
            <ExternalLink size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

export default ProjectModal;
