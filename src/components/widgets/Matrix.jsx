import { useAsync } from "../../hooks/useAsync";
import { getContributionMatrix } from "../../utils/github";
import { Calendar } from "lucide-react";
import Loading from "../ui/Loading";
import { useView } from "../../context/ViewContext";

function Matrix() {
  const { redMode } = useView();
  const { data, loading } = useAsync(getContributionMatrix, []);

  if (loading) return <Loading />;

  return (
    <div className="w-full overflow-hidden flex flex-col gap-2">
      <div className="flex justify-between text-[10px] font-mono text-neutral-500">
        <span>GITHUB_DATA</span>
        <span className={redMode ? "text-red-600" : "text-green-500"}>{data.total} COMMITS</span>
      </div>

      <div className="flex gap-1 h-24 opacity-80 mask-linear-fade">
        {data.weeks.slice(-30).map((week, w) => (
          <div key={w} className="flex flex-col gap-1">
            {week.map((count, d) => (
              <div
                key={d}
                className={`w-3 h-3 rounded-[1px] ${
                  count > 0 ? (redMode ? "bg-red-600" : "bg-white") : "bg-neutral-900"
                }`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Matrix;
