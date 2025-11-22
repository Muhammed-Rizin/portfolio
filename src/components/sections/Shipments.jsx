import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useView } from "../../context/ViewContext";
import { PROJECTS } from "../../data/projects";

import ProjectModal from "../modals/ProjectModal";
import Card from "../ui/Card";

function Shipments() {
  const { redMode } = useView();
  const [modalData, setModalData] = useState(null);

  return (
    <>
      <div className="pb-32">
        <h2 className="text-xl font-mono font-bold text-white border-b border-neutral-800 pb-4 mb-8">
          SHIPMENTS
        </h2>

        <div className="grid gap-4">
          {PROJECTS.map((p) => (
            <Card
              key={p.id}
              onClick={() => setModalData(p)}
              className="p-6 cursor-pointer group"
              redMode={redMode}
            >
              <div className="flex flex-col md:flex-row justify-between gap-4">
                {/* LEFT */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    {/* ID */}
                    <span className={`font-mono text-xs text-red-600`}>ID_{p.id}</span>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white tracking-tighter group-hover:underline">
                      {p.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm font-mono text-neutral-400 max-w-xl">{p.desc}</p>
                </div>

                {/* ARROW ICON */}
                <div
                  className={`self-start p-2 border transition-colors 
                    ${
                      redMode
                        ? "border-red-900 text-red-600 group-hover:bg-red-600 group-hover:text-black"
                        : "border-neutral-800 text-neutral-500 group-hover:bg-white group-hover:text-black"
                    }
                  `}
                >
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <ProjectModal project={modalData} onClose={() => setModalData(null)} redMode={redMode} />
    </>
  );
}

export default Shipments;
