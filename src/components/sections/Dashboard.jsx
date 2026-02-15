import { Download } from "lucide-react";
import Card from "../ui/Card";
import { IDENTITY } from "../../data/identity";
import ScrambleText from "../ui/ScrambleText";
import DeveloperMonitor from "../widgets/DeveloperMonitor";
import TechRadar from "../widgets/TechRadar";
import LeetCodeWidget from "../widgets/LeetCodeWidget";
import Matrix from "../widgets/Matrix";
import StarredRepos from "../widgets/StarredRepos";

function Dashboard() {
  const [firstName, lastName] = IDENTITY.user.split(" ");

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 pb-44">
      <Card className="md:col-span-2 md:row-span-2 p-6 md:p-8 flex flex-col justify-between bg-[var(--neo-primary)] text-black">
        <div className="space-y-5">
          <div className="flex justify-between items-start gap-2">
            <div className="brutal-chip bg-[var(--neo-lime)] text-black inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-black animate-pulse" />
              ONLINE
            </div>

            <button
              type="button"
              onClick={() => window.open(IDENTITY.resume, "_blank", "noopener,noreferrer")}
              className="brutal-btn bg-white text-black px-3 py-2 text-[10px] inline-flex items-center gap-2"
            >
              <Download size={12} />
              RESUME
            </button>
          </div>

          <div>
            <h1 className="text-4xl md:text-6xl uppercase leading-[0.92]">
              <ScrambleText text={firstName} />
              <br />
              <span className="text-black/70">
                <ScrambleText text={lastName} />
              </span>
            </h1>
            <p className="neo-mono text-xs tracking-wide mt-3 text-black/80">{IDENTITY.role}</p>
          </div>

          <p className="neo-mono text-sm leading-relaxed text-black/80 max-w-md">{IDENTITY.bio}</p>
        </div>

        <div className="flex gap-2 flex-wrap mt-6">
          {IDENTITY.flags.map((flag) => (
            <span key={flag} className="brutal-chip bg-white text-black">
              {flag}
            </span>
          ))}
        </div>
      </Card>

      <Card className="md:col-span-1 p-5 bg-[var(--neo-secondary)]">
        <DeveloperMonitor />
      </Card>

      <Card className="md:col-span-1 p-5 bg-[var(--neo-lime)]">
        <TechRadar />
      </Card>

      <Card
        className="md:col-span-2 p-5 bg-[var(--neo-accent)]"
        onClick={() => window.open(IDENTITY.leetCode, "_blank", "noopener,noreferrer")}
      >
        <LeetCodeWidget />
      </Card>

      <Card className="md:col-span-3 p-5 bg-white">
        <Matrix />
      </Card>

      <Card className="md:col-span-1 p-5 bg-[var(--neo-blue)]">
        <StarredRepos />
      </Card>
    </div>
  );
}

export default Dashboard;
