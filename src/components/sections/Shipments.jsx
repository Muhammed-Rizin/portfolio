import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../../data/projects";
import ProjectModal from "../modals/ProjectModal";
import Card from "../ui/Card";

const CARD_COLORS = [
  "bg-white",
  "bg-[var(--neo-secondary)]",
  "bg-[var(--neo-lime)]",
  "bg-[var(--neo-accent)]",
  "bg-[var(--neo-primary)]",
  "bg-[var(--neo-blue)]",
];

function Shipments() {
  const [modalData, setModalData] = useState(null);

  return (
    <>
      <div className="pb-44">
        <h2 className="section-title mb-8">Shipments</h2>

        <div className="grid gap-5">
          {PROJECTS.map((project, idx) => (
            <Card
              key={project.id}
              onClick={() => setModalData(project)}
              className={`p-5 md:p-6 ${CARD_COLORS[idx % CARD_COLORS.length]}`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-3">
                  <span className="brutal-chip bg-black text-white">{`ID_${project.id}`}</span>
                  <h3 className="text-2xl md:text-3xl uppercase break-words">{project.name}</h3>
                  <p className="neo-mono text-sm leading-relaxed text-black/80 max-w-3xl">
                    {project.summary}
                  </p>
                </div>
                <div className="brutal-btn bg-white text-black p-3 self-start">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <ProjectModal project={modalData} onClose={() => setModalData(null)} />
    </>
  );
}

export default Shipments;
