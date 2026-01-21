import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

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
import Dashboard from "./components/sections/Dashboard";
import Shipments from "./components/sections/Shipments";
import Repositories from "./components/sections/Repositories";
import Certificates from "./components/sections/Certificates";

export default function App() {
  const { redMode, setRedMode } = useView();
  const location = useLocation();

  useKonami(() => setRedMode((p) => !p));
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

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
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Shipments />} />
          <Route path="/repos" element={<Repositories />} />
          <Route path="/firmware" element={<Firmware />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </main>

      <BottomNav />
    </div>
  );
}
