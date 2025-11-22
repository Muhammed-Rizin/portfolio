import { GitFork, Github, Star } from "lucide-react";
import { getUserRepos } from "../../utils/github";
import Card from "../ui/Card";
import { useView } from "../../context/ViewContext";
import Loading from "../ui/Loading";
import { useAsync } from "../../hooks/useAsync";

function Repositories() {
  const { redMode } = useView();
  const { data: repos = [], loading } = useAsync(getUserRepos, []);

  if (loading) return <Loading />;

  return (
    <div className="pb-32">
      <h2 className="text-xl font-mono font-bold text-white border-b border-neutral-800 pb-4 mb-8">
        GITHUB_REPOSITORIES
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <Card
            key={repo.name}
            className="p-6 flex flex-col justify-between group cursor-pointer hover:bg-neutral-900"
            onClick={() => window.open(repo.url, "_blank")}
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <Github size={20} className={redMode ? "text-red-600" : "text-white"} />
                <span className="text-[10px] font-mono border border-neutral-800 px-2 text-neutral-500">
                  {repo.lang}
                </span>
              </div>

              <h3 className="text-lg font-bold font-mono text-white mb-2 group-hover:underline">
                {repo.name}
              </h3>

              <p className="text-xs font-mono text-neutral-400 leading-relaxed line-clamp-3">
                {repo.desc}
              </p>
            </div>

            <div className="flex gap-4 mt-6 text-xs font-mono text-neutral-500">
              <div className="flex items-center gap-1">
                <Star size={12} /> {repo.stars}
              </div>
              <div className="flex items-center gap-1">
                <GitFork size={12} /> {repo.forks}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Repositories;
