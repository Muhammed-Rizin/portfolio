import { useEffect, useState } from "react";

function TimeWidget() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-mono text-xs text-neutral-500 flex items-center gap-2">
      <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
      {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
    </div>
  );
}
export default TimeWidget;
