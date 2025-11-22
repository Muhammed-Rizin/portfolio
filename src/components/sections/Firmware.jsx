import { Hash } from "lucide-react";
import Card from "../ui/Card";
import { FIRMWARE_MODULES } from "../../data/firmware";

function Firmware() {
  return (
    <div className="pb-32">
      <h2 className="text-xl font-mono font-bold text-white border-b border-neutral-800 pb-4 mb-8">
        FIRMWARE_MAP
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {FIRMWARE_MODULES.map((mod, i) => (
          <Card key={i} className="p-6">
            <h3 className="text-xs font-mono text-red-600 mb-4 border-b border-neutral-900 pb-2 flex items-center gap-2">
              <Hash size={12} /> {mod.cat}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {mod.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <span className="text-xs font-mono text-white">{item.id}</span>
                  <span className="text-[10px] font-mono text-neutral-500 border border-neutral-800 px-1">
                    {item.ver}
                  </span>
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
