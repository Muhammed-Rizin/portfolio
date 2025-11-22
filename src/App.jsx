import React, { useEffect } from "react";

import useKonami from "./hooks/useKonami";
import { useView } from "./context/ViewContext";

import ScanLine from "./components/ui/Scanline";
import DottedBg from "./components/ui/DottedBg";
import CmdPalette from "./components/cmd/CmdPallet";
import BootScreen from "./components/boot/Bootscreen";

import Header from "./components/header/Header";
import BottomNav from "./components/navigation/BottomNav";

import Logs from "./components/sections/Logs";
import Firmware from "./components/sections/Firmware";
import Dashboard from "./components/sections/dashboard";
import Shipments from "./components/sections/Shipments";
import Repositories from "./components/sections/Repositories";

export default function App() {
  const { view, redMode, setRedMode } = useView();

  useKonami(() => setRedMode((p) => !p));
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view]);

  return (
    <div
      className={`min-h-screen bg-black text-neutral-200 font-sans selection:bg-red-600/30 relative overflow-x-hidden ${
        redMode ? "selection:bg-red-900/50" : ""
      }`}
    >
      <DottedBg />
      <ScanLine />
      <BootScreen />
      <CmdPalette />
      <Header />

      <main className="relative z-10 max-w-7xl mx-auto px-4 pt-8 min-h-screen">
        {view === "dashboard" && <Dashboard />}
        {view === "projects" && <Shipments />}
        {view === "repos" && <Repositories />}
        {view === "firmware" && <Firmware />}
        {view === "logs" && <Logs />}
      </main>

      <BottomNav />
    </div>
  );
}
