import { Code } from "lucide-react";
import { useAsync } from "../../hooks/useAsync";
import { getLeetCodeStats } from "../../utils/leetcode";
import Loading from "../ui/Loading";
import { useView } from "../../context/ViewContext";

function LeetCodeWidget() {
  const { redMode } = useView();

  const { data: stats, loading } = useAsync(getLeetCodeStats, []);

  if (loading) return <Loading />;

  const { total, easy, medium, hard, rank } = stats;

  const easyPct = total > 0 ? (easy / total) * 100 : 0;
  const mediumPct = total > 0 ? (medium / total) * 100 : 0;
  const hardPct = total > 0 ? (hard / total) * 100 : 0;

  return (
    <div className="flex flex-col justify-between h-full w-full">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <Code size={20} className={redMode ? "text-red-600" : "text-neutral-400"} />
          <span className="text-[10px] font-mono text-neutral-600">LEETCODE</span>
        </div>

        <div className="flex flex-col items-end">
          <span className="text-[10px] font-mono text-neutral-500">RANK</span>
          <span
            className={`text-xs font-mono font-bold ${redMode ? "text-red-600" : "text-white"}`}
          >
            #{(rank || 0).toLocaleString()}
          </span>
        </div>
      </div>

      <div>
        <div className="text-2xl font-bold text-white font-mono">{total}</div>
        <div className="text-[10px] text-neutral-500 font-mono mb-2">PROBLEMS_SOLVED</div>

        {/* Difficulty Bar */}
        <div className="flex gap-1 h-1.5 overflow-hidden rounded-full w-full">
          <div
            className="bg-green-500 h-full transition-all duration-500"
            style={{ width: `${easyPct}%` }}
          />
          <div
            className="bg-yellow-500 h-full transition-all duration-500"
            style={{ width: `${mediumPct}%` }}
          />
          <div
            className="bg-red-500 h-full transition-all duration-500"
            style={{ width: `${hardPct}%` }}
          />
        </div>

        <div className="flex justify-between mt-2 text-[8px] font-mono text-neutral-500">
          <span>EASY: {easy}</span>
          <span>MID: {medium}</span>
          <span>HARD: {hard}</span>
        </div>
      </div>
    </div>
  );
}

export default LeetCodeWidget;
