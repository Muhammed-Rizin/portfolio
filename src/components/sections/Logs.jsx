import { SYSTEM_LOGS } from "../../data/logs";

function Logs() {
  return (
    <div className="pb-32">
      <h2 className="text-xl font-mono font-bold text-white border-b border-neutral-800 pb-4 mb-8">
        SYSTEM_LOGS
      </h2>
      <div className="relative border-l border-neutral-800 ml-3 space-y-8">
        {SYSTEM_LOGS.map((log, i) => (
          <div key={i} className="pl-8 relative">
            <div
              className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border ${
                i === SYSTEM_LOGS.length - 1
                  ? "bg-red-600 border-red-600 animate-pulse"
                  : "bg-black border-neutral-600"
              }`}
            />
            <div className="flex gap-2 mb-1">
              <span className="text-[10px] font-mono text-red-600 border border-neutral-900 px-2 bg-neutral-950">
                {log.date}
              </span>
              <span className="text-sm font-bold font-mono text-white">{log.event}</span>
            </div>
            <p className="text-xs font-mono text-neutral-500">{log.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Logs;
