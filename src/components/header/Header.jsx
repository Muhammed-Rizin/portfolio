import React from "react";
import { useView } from "../../context/ViewContext";
import TimeWidget from "./TimeWidget";

const Header = () => {
  const { setView } = useView();
  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setView("dashboard")}
        >
          <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_red]" />
          <span className="font-mono font-bold text-white tracking-tight">Rizin</span>
        </div>
        <TimeWidget />
      </div>
    </header>
  );
};

export default Header;
