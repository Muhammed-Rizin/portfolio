import { Activity } from "lucide-react";
import { getDeveloperStats } from "../../utils/github";
import { useAsync } from "../../hooks/useAsync";
import { useView } from "../../context/ViewContext";
import Loading from "../ui/Loading";

function DeveloperMonitor() {
  const { redMode } = useView();
  const { data: stats, loading } = useAsync(getDeveloperStats, []);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex justify-between items-start">
        <Activity size={20} className={redMode ? "text-red-600" : "text-neutral-400"} />
        <span className="text-[10px] font-mono text-neutral-600">DEV_ACTIVITY_30D</span>
      </div>

      <div className="space-y-2 font-mono text-xs mt-2">
        <div className="flex justify-between text-neutral-400">
          <span>COMMITS</span>
          <span className="text-white font-bold">{stats.commits}</span>
        </div>

        <div className="flex justify-between text-neutral-400">
          <span>ACTIVE_REPOS</span>
          <span className="text-white font-bold">{stats.activeRepos}</span>
        </div>

        <div className="flex justify-between text-neutral-400">
          <span>EVENTS</span>
          <span className={redMode ? "text-red-600" : "text-white"}>{stats.eventCount}</span>
        </div>
      </div>
    </div>
  );
}

export default DeveloperMonitor;
