import { useEffect, useState } from "react";

function TimeWidget() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="brutal-chip bg-[var(--neo-orange)] text-black inline-flex items-center gap-2">
      <span className="w-2 h-2 bg-black animate-pulse" />
      {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
    </div>
  );
}

export default TimeWidget;
