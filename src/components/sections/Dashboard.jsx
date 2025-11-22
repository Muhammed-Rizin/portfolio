import { Download } from "lucide-react";
import { useView } from "../../context/ViewContext";
import Card from "../ui/Card";
import { IDENTITY } from "../../data/identity";
import ScrambleText from "../ui/ScrambleText";
import DeveloperMonitor from "../widgets/DeveloperMonitor";
import TechRadar from "../widgets/TechRadar";
import LeetCodeWidget from "../widgets/LeetCodeWidget";
import Matrix from "../widgets/Matrix";
import DeployStream from "../widgets/DeployStream";
import StarredRepos from "../widgets/StarredRepos";

function Dashboard() {
  const { redMode } = useView();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-4 pb-32">
      <Card className="md:col-span-2 md:row-span-2 p-8 flex flex-col justify-between bg-neutral-950/50">
        <div className="space-y-5">
          <div className="flex justify-between items-start">
            <div
              className={`inline-flex items-center gap-2 px-2 py-1 border rounded-full ${
                redMode ? "border-red-900" : "border-neutral-800"
              }`}
            >
              <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
              <span className="text-[10px] font-mono text-neutral-400 tracking-widest">ONLINE</span>
            </div>

            <button
              onClick={() => window.open(IDENTITY.resume, "_blank")}
              className={`flex items-center gap-2 px-3 py-1 border transition-colors group cursor-pointer ${
                redMode
                  ? "border-red-900 hover:bg-red-900/20"
                  : "border-neutral-800 hover:bg-neutral-900"
              }`}
            >
              <Download
                size={12}
                className={redMode ? "text-red-600" : "text-neutral-400 group-hover:text-white"}
              />
              <span className="text-[10px] font-mono text-neutral-500 group-hover:text-white">
                GET_RESUME
              </span>
            </button>
          </div>

          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter leading-[0.9]">
              <ScrambleText text={IDENTITY.user.split(" ")[0]} />
              <br />
              <span className="text-neutral-600">
                <ScrambleText text={IDENTITY.user.split(" ")[1]} />
              </span>
            </h1>

            <div className="mt-2 text-xs font-mono text-red-600">{IDENTITY.role}</div>
          </div>

          <p className="font-mono text-xs text-neutral-500 max-w-sm mt-4">{IDENTITY.bio}</p>
        </div>

        <div className="flex gap-2 flex-wrap mt-6">
          {IDENTITY.flags.map((f) => (
            <span
              key={f}
              className="text-[9px] border border-neutral-800 px-2 py-0.5 text-neutral-500 tracking-wide"
            >
              {f}
            </span>
          ))}
        </div>
      </Card>

      <Card className="md:col-span-1 p-6">
        <DeveloperMonitor />
      </Card>

      <Card className="md:col-span-1 h-full p-4 flex flex-col justify-between" redMode={redMode}>
        <TechRadar />
      </Card>

      <Card
        className="md:col-span-2 p-6 cursor-pointer hover:border-white"
        onClick={() => window.open(IDENTITY.leetCode)}
      >
        <LeetCodeWidget />
      </Card>
      <Card className="md:col-span-2 p-6 flex items-center justify-between  hover:border-white">
        <Matrix />
      </Card>

      <Card className="md:col-span-1 h-full p-4 flex flex-col">
        <DeployStream />
      </Card>

      <Card className="md:col-span-1 p-6 hover:border-white">
        <StarredRepos />
      </Card>
    </div>
  );
}

export default Dashboard;
