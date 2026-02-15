import { Star } from "lucide-react";
import { useAsync } from "../../hooks/useAsync";
import { getUserRepos } from "../../utils/github";

function StarredRepos() {
  const { data: repos = [], loading } = useAsync(getUserRepos, []);

  const topRepos = loading
    ? Array(4).fill({ name: "loading...", stars: "..." })
    : [...repos].sort((a, b) => b.stars - a.stars).slice(0, 4);

  return (
    <div className="flex flex-col justify-between h-full text-black">
      <div className="flex justify-between items-start mb-4">
        <Star size={20} />
        <span className="brutal-chip bg-white text-black">TOP REPOS</span>
      </div>

      <div className="space-y-2">
        {topRepos.map((repo, i) => (
          <button
            key={i}
            type="button"
            disabled={!repo.url}
            onClick={() => repo.url && window.open(repo.url, "_blank", "noopener,noreferrer")}
            className={`w-full brutal-card bg-white px-3 py-2 flex items-center justify-between text-left ${
              repo.url ? "cursor-pointer hover:-translate-x-[1px] hover:-translate-y-[1px]" : "opacity-85"
            }`}
            title={repo.url ? `Open ${repo.name}` : undefined}
          >
            <span className="neo-mono text-xs font-bold truncate pr-2">{repo.name}</span>
            <span className="neo-mono text-[11px]">{`${repo.stars} *`}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default StarredRepos;
