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
              className="p-6 cursor-pointer hover:border-white group"
              redMode={redMode}
            >
              <div className="flex flex-col md:flex-row justify-between gap-4">
                {/* LEFT */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`font-mono text-xs text-red-600 shrink-0`}>ID_{p.id}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tighter group-hover:underline wrap-break-word">
                      {p.name}
                    </h3>
                  </div>
                  <p className="text-sm font-mono text-neutral-400 max-w-xl wrap-break-word whitespace-normal">
                    {p.desc}
                  </p>
                </div>

                {/* ARROW */}
                <div
                  className={`self-start p-2 border transition-colors shrink-0 ${
                    redMode
                      ? "border-red-900 text-red-600 group-hover:bg-red-600 group-hover:text-black"
                      : "border-neutral-800 text-neutral-500 group-hover:bg-white group-hover:text-black"
                  }`}
                >
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <ProjectModal project={modalData} onClose={() => setModalData(null)} redMode={redMode} />
    </>
  );
}

export default Shipments;
