import { SYSTEM_LOGS } from "../../data/logs";

function Logs() {
  return (
    <div className="pb-44">
      <h2 className="section-title mb-8">System Logs</h2>

      <div className="brutal-card bg-[var(--neo-bg-2)] p-5 md:p-7">
        <div className="relative border-l-4 border-black ml-2 space-y-5">
          {SYSTEM_LOGS.map((log, i) => (
            <div key={i} className="pl-8 relative">
              <div
                className={`absolute -left-[11px] top-1.5 w-4 h-4 border-[3px] border-black ${
                  i === 0 ? "bg-(--neo-accent) animate-pulse" : "bg-white"
                }`}
              />

              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="brutal-chip bg-(--neo-secondary) text-black">{log.date}</span>
                <span className="text-lg uppercase">{log.event}</span>
              </div>
              <p className="neo-mono text-xs text-black/75 leading-relaxed">{log.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Logs;
