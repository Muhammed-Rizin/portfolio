import { Cpu } from "lucide-react";
import Loading from "../ui/Loading";
import { useAsync } from "../../hooks/useAsync";
import { getLanguageBreakdown } from "../../utils/github";

function TechRadar() {
  const { data: languages = [], loading } = useAsync(getLanguageBreakdown, []);

  if (loading) return <Loading />;

  return (
    <div className="text-black">
      <div className="flex justify-between items-center mb-3">
        <span className="brutal-chip bg-white text-black">TECH RADAR</span>
        <Cpu size={16} />
      </div>

      <div className="space-y-3">
        {(languages || []).map((tech, i) => (
          <div key={i} className="space-y-1.5">
            <div className="neo-mono text-xs flex justify-between">
              <span>{tech.name}</span>
              <span>{tech.val}%</span>
            </div>
            <div className="h-3 brutal-card bg-white overflow-hidden">
              <div
                className="h-full bg-black transition-all duration-700"
                style={{ width: `${tech.val}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechRadar;
