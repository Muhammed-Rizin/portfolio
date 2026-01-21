import { Cpu, Github, Layers, Zap, Activity, Award } from "lucide-react";

export const SECTIONS = [
  { id: "dashboard", icon: Layers, l: "DASHBOARD" },
  { id: "projects", icon: Zap, l: "SHIPMENTS" },
  { id: "repos", icon: Github, l: "REPOS" },
  { id: "firmware", icon: Cpu, l: "FIRMWARE" },
  { id: "logs", icon: Activity, l: "LOGS" },
  { id: "certificates", icon: Award, l: "CERTIFICATES" },
];
