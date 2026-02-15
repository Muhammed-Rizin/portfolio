import { useMemo } from "react";
import { useAsync } from "../../hooks/useAsync";
import { getContributionMatrix } from "../../utils/github";
import Loading from "../ui/Loading";

function getLevel(count, maxCount) {
  if (!count) return 0;
  if (count >= maxCount * 0.75) return 4;
  if (count >= maxCount * 0.5) return 3;
  if (count >= maxCount * 0.25) return 2;
  return 1;
}

const levelToClass = {
  0: "bg-white",
  1: "bg-[var(--neo-secondary)]",
  2: "bg-[var(--neo-lime)]",
  3: "bg-[var(--neo-primary)]",
  4: "bg-black",
};

function Matrix() {
  const { data, loading } = useAsync(getContributionMatrix, []);

  const weeks = useMemo(() => data?.weeks?.slice(-36) ?? [], [data?.weeks]);
  const maxCount = useMemo(() => {
    const allCounts = weeks.flat();
    return Math.max(1, ...allCounts);
  }, [weeks]);

  if (loading) return <Loading />;

  return (
    <div className="w-full overflow-hidden flex flex-col gap-4 text-black">
      <div className="flex flex-wrap justify-between items-center gap-2">
        <span className="brutal-chip bg-[var(--neo-secondary)] text-black">GITHUB MATRIX</span>
        <span className="brutal-chip bg-[var(--neo-primary)] text-black">{`${data.total} COMMITS`}</span>
      </div>

      <div className="brutal-card bg-[var(--neo-bg-2)] p-3 md:p-4 overflow-x-auto">
        <div className="flex gap-1.5 min-w-max">
          {weeks.map((week, w) => (
            <div key={w} className="flex flex-col gap-1.5">
              {week.map((count, d) => {
                const level = getLevel(count, maxCount);
                return (
                  <div
                    key={`${w}-${d}`}
                    title={`${count} contributions`}
                    className={`w-3.5 h-3.5 border-2 border-black ${levelToClass[level]} transition-transform hover:-translate-x-[1px] hover:-translate-y-[1px]`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 neo-mono text-[10px]">
        <span className="text-black/80">LESS</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <span key={level} className={`w-3 h-3 border-2 border-black ${levelToClass[level]}`} />
        ))}
        <span className="text-black/80">MORE</span>
      </div>
    </div>
  );
}

export default Matrix;
