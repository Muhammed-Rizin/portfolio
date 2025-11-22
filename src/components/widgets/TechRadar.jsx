import { Cpu } from "lucide-react";

import Loading from "../ui/Loading";

import { useAsync } from "../../hooks/useAsync";
import { getLanguageBreakdown } from "../../utils/github";
import { useView } from "../../context/ViewContext";

function TechRadar() {
  const { redMode } = useView();
  const { data: languages = [], loading } = useAsync(getLanguageBreakdown, []);

  if (loading) return <Loading />;

  return (
    <>
      <div className="flex justify-between items-center border-b border-neutral-800 pb-2 mb-2">
        <span className="text-[10px] font-mono text-neutral-500">TECH_RADAR</span>
        <Cpu size={14} className={redMode ? "text-red-600" : "text-neutral-500"} />
      </div>

      <div className="space-y-2">
        {(languages || []).map((tech, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="flex justify-between text-[8px] font-mono text-neutral-400">
              <span>{tech.name}</span>
              <span>{tech.val}%</span>
            </div>

            <div className="h-1 w-full bg-neutral-900">
              <div
                className={`h-full ${
                  redMode ? "bg-red-600" : "bg-white"
                } transition-all duration-1000`}
                style={{ width: `${tech.val}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TechRadar;
