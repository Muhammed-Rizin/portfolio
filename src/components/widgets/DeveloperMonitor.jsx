import { Activity } from "lucide-react";
import { getDeveloperStats } from "../../utils/github";
import { useAsync } from "../../hooks/useAsync";
import Loading from "../ui/Loading";

function DeveloperMonitor() {
  const { data: stats, loading } = useAsync(getDeveloperStats, []);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col justify-between h-full text-black">
      <div className="flex justify-between items-start mb-4">
        <Activity size={20} />
        <span className="brutal-chip bg-white text-black">DEV ACTIVITY 30D</span>
      </div>

      <div className="space-y-2 neo-mono text-xs">
        <div className="brutal-card bg-white px-3 py-2 flex justify-between">
          <span>COMMITS</span>
          <span className="font-bold">{stats.commits}</span>
        </div>
        <div className="brutal-card bg-white px-3 py-2 flex justify-between">
          <span>ACTIVE REPOS</span>
          <span className="font-bold">{stats.activeRepos}</span>
        </div>
        <div className="brutal-card bg-white px-3 py-2 flex justify-between">
          <span>EVENTS</span>
          <span className="font-bold">{stats.eventCount}</span>
        </div>
      </div>
    </div>
  );
}

export default DeveloperMonitor;
