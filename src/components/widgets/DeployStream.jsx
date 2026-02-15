import { useAsync } from "../../hooks/useAsync";
import { getRecentPushEvents } from "../../utils/github";
import Loading from "../ui/Loading";

function DeployStream() {
  const { data: commits = [], loading } = useAsync(getRecentPushEvents, []);

  if (loading) return <Loading />;

  return (
    <div className="h-full">
      <div className="flex justify-between items-center mb-3">
        <span className="brutal-chip bg-white text-black">DEPLOY LOG</span>
        <span className="brutal-chip bg-black text-white">CI ACTIVE</span>
      </div>
      <div className="space-y-2">
        {(commits || []).map((commit, i) => (
          <div key={i} className="brutal-card bg-white p-2.5">
            <div className="flex justify-between items-center gap-2">
              <span className="neo-mono text-[11px] font-bold truncate">{commit.repo}</span>
              <span className="brutal-chip bg-[var(--neo-primary)] text-black">{commit.branch}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeployStream;
