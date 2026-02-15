import { Code } from "lucide-react";
import { useAsync } from "../../hooks/useAsync";
import { getLeetCodeStats } from "../../utils/leetcode";
import Loading from "../ui/Loading";

function LeetCodeWidget() {
  const { data: stats, loading } = useAsync(getLeetCodeStats, []);

  if (loading) return <Loading />;

  const { total = 0, easy = 0, medium = 0, hard = 0, rank = 0 } = stats || {};
  const easyPct = total > 0 ? (easy / total) * 100 : 0;
  const mediumPct = total > 0 ? (medium / total) * 100 : 0;
  const hardPct = total > 0 ? (hard / total) * 100 : 0;

  return (
    <div className="flex flex-col justify-between h-full text-black">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <Code size={20} />
          <span className="brutal-chip bg-white text-black">LEETCODE</span>
        </div>

        <div className="brutal-chip bg-black text-white">{`RANK #${(rank || 0).toLocaleString()}`}</div>
      </div>

      <div>
        <div className="text-4xl leading-none">{total}</div>
        <p className="neo-mono text-xs mt-1 mb-3">PROBLEMS SOLVED</p>

        <div className="h-4 brutal-card bg-white overflow-hidden flex">
          <div className="h-full bg-[var(--neo-lime)]" style={{ width: `${easyPct}%` }} />
          <div className="h-full bg-[var(--neo-primary)]" style={{ width: `${mediumPct}%` }} />
          <div className="h-full bg-[var(--neo-orange)]" style={{ width: `${hardPct}%` }} />
        </div>

        <div className="grid grid-cols-3 gap-2 mt-3 neo-mono text-[11px]">
          <span className="brutal-chip bg-white text-black text-center">{`EASY ${easy}`}</span>
          <span className="brutal-chip bg-white text-black text-center">{`MID ${medium}`}</span>
          <span className="brutal-chip bg-white text-black text-center">{`HARD ${hard}`}</span>
        </div>
      </div>
    </div>
  );
}

export default LeetCodeWidget;
