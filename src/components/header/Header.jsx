import React from "react";
import { Palette } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TimeWidget from "./TimeWidget";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/dashboard")}
        >
          <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_red]" />
          <span className="font-mono font-bold text-white tracking-tight">Rizin</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => window.open("https://neo.muhammedrizin.in/", "_blank", "noopener,noreferrer")}
            className="px-3 py-2 text-[10px] font-mono font-bold uppercase text-white bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 transition-colors flex items-center gap-2 cursor-pointer"
            aria-label="Open neo theme portfolio"
          >
            <Palette size={13} />
            Neo Theme
          </button>
          <TimeWidget />
        </div>
      </div>
    </header>
  );
};

export default Header;
