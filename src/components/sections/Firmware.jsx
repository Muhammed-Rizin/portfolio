import { Hash } from "lucide-react";
import Card from "../ui/Card";
import { FIRMWARE_MODULES } from "../../data/firmware";

function Firmware() {
  return (
    <div className="pb-44">
      <h2 className="section-title mb-8">Firmware Map</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {FIRMWARE_MODULES.map((module, idx) => (
          <Card
            key={module.cat}
            className={`p-5 ${idx % 2 === 0 ? "bg-[var(--neo-secondary)]" : "bg-[var(--neo-primary)]"}`}
          >
            <h3 className="section-title bg-white mb-4">
              <Hash size={12} />
              {module.cat}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {module.items.map((item) => (
                <div
                  key={item.id}
                  className="brutal-card bg-white p-3 flex items-center justify-between"
                >
                  <span className="neo-mono text-xs font-bold">{item.id}</span>
                  <span className="brutal-chip bg-[var(--neo-lime)] text-black">{item.ver}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Firmware;
