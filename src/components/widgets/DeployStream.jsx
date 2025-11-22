import { useAsync } from "../../hooks/useAsync";
import { getRecentPushEvents } from "../../utils/github";
import Loading from "../ui/Loading";
import { useView } from "../../context/ViewContext";

function DeployStream() {
  const { redMode } = useView();
  const { data: commits = [], loading } = useAsync(getRecentPushEvents, []);

  if (loading) return <Loading />;

  return (
    <>
      <div className="flex justify-between items-center border-b border-neutral-800 pb-2 mb-3">
        <span className="text-[10px] font-mono text-neutral-500">DEPLOY_LOG</span>
        <span className="text-[10px] font-mono text-neutral-600">CI/CD: ACTIVE</span>
      </div>
      <div className="space-y-3">
        {(commits || []).map((c, i) => (
          <div key={i} className="flex flex-col gap-0.5 group">
            <div className="flex justify-between items-center">
              <span
                className={`text-[10px] font-mono ${redMode ? "text-red-600" : "text-blue-400"}`}
              >
                {c.repo}
              </span>
              <span className="text-[8px] font-mono text-neutral-600 border border-neutral-900 px-1 rounded">
                {c.branch}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DeployStream;
