import { useState, useEffect } from "react";

export default function useSystemMonitor() {
  const [stats, setStats] = useState({ temp: 40, ram: 30, bat: 100 });

  useEffect(() => {
    const i = setInterval(() => {
      setStats((p) => ({
        temp: Math.floor(38 + Math.random() * 15),
        ram: Math.floor(30 + Math.random() * 40),
        bat: Math.max(0, p.bat - 0.01),
      }));
    }, 3000);
    return () => clearInterval(i);
  }, []);

  return stats;
}
