import { Star } from "lucide-react";
import { useAsync } from "../../hooks/useAsync";
import { getUserRepos } from "../../utils/github";

function StarredRepos({ redMode }) {
  const { data: repos = [], loading } = useAsync(getUserRepos, []);

  const topRepos = loading
    ? Array(4).fill({ name: "loading…", stars: "…" })
    : [...repos]

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex justify-between items-start mb-4">
        <Star size={20} className={redMode ? "text-red-600" : "text-neutral-400"} />
        <span className="text-[10px] font-mono text-neutral-600">TOP_REPOS</span>
      </div>
      <div className="space-y-3">
        {topRepos.slice(0, 4).map((repo, i) => (
          <div key={i} className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-white group-hover:text-red-500 transition-colors">
                {repo.name}
              </span>
            </div>
            <span className="text-[10px] font-mono text-neutral-500">{repo.stars} ★</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StarredRepos;
