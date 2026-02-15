import { GitFork, Github, Star } from "lucide-react";
import { getUserRepos } from "../../utils/github";
import Card from "../ui/Card";
import Loading from "../ui/Loading";
import { useAsync } from "../../hooks/useAsync";

function Repositories() {
  const { data: repos = [], loading } = useAsync(getUserRepos, []);

  if (loading) return <Loading />;

  return (
    <div className="pb-44">
      <h2 className="section-title mb-8">Github Repositories</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {repos.map((repo) => (
          <Card
            key={repo.name}
            className="p-5 flex flex-col justify-between gap-6 bg-[var(--neo-bg-2)]"
            onClick={() => window.open(repo.url, "_blank", "noopener,noreferrer")}
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <Github size={20} className="text-black" />
                <span className="brutal-chip bg-[var(--neo-secondary)] text-black">{repo.lang}</span>
              </div>

              <h3 className="text-xl uppercase break-all mb-2">{repo.name}</h3>
              <p className="neo-mono text-xs leading-relaxed text-black/75">{repo.desc}</p>
            </div>

            <div className="flex gap-3 text-xs neo-mono">
              <span className="brutal-chip bg-white text-black inline-flex items-center gap-1">
                <Star size={11} />
                {repo.stars}
              </span>
              <span className="brutal-chip bg-white text-black inline-flex items-center gap-1">
                <GitFork size={11} />
                {repo.forks}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Repositories;
