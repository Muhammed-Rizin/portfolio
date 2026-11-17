import { ArrowUpRight } from "lucide-react";
import Card from "../ui/Card";
import { CertificatesSkeleton } from "../ui/Skeleton";
import { usePortfolioData } from "../../context/PortfolioDataContext";
import { useView } from "../../context/ViewContext";

const Certificates = () => {
  const { certificates = [], loading } = usePortfolioData();
  const { redMode } = useView();

  if (loading && (!certificates || certificates.length === 0)) {
    return <CertificatesSkeleton />;
  }

  console.log(certificates);
  return (
    <div className="pb-32">
      <h2 className="text-xl font-mono font-bold text-white border-b border-neutral-800 pb-4 mb-8">
        DIGITAL_CREDENTIALS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificates.map((cert) => (
          <Card
            key={cert.credential_id || cert.id}
            className="p-6 group cursor-pointer hover:bg-neutral-900 transition-colors flex flex-col justify-between"
            redMode={redMode}
            onClick={() => window.open(cert.link, "_blank", "noopener,noreferrer")}
          >
            <div>
              {/* Header: Logo, Company/Platform & Date */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2.5">
                  <img
                    src={cert.logo}
                    alt={cert.company || cert.platform}
                    className="w-7 h-7 rounded-md object-contain"
                  />
                  <span className="text-xs font-mono font-medium text-neutral-300">
                    {cert.company || cert.platform}
                  </span>
                </div>

                <span className="text-[10px] font-mono border border-neutral-800 px-2 py-0.5 text-neutral-500">
                  {cert.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold font-mono text-white mb-4 group-hover:underline">
                {cert.title}
              </h3>

              {/* Skills */}
              <div className="flex gap-2 flex-wrap mb-4">
                {(cert.skills || []).map((s) => (
                  <span
                    key={s}
                    className="text-[9px] font-mono border border-neutral-800 px-1.5 py-0.5 text-neutral-500"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer: Credential ID on left, Verify action on right */}
            <div className="pt-3 border-t border-neutral-900 flex items-center justify-between text-neutral-500 group-hover:text-white transition-colors">
              <span className="text-[10px] font-mono text-red-600">ID_{cert.credential_id}</span>
              <div
                className={`flex items-center gap-1 text-[10px] font-mono font-bold ${
                  redMode ? "text-red-500" : "text-neutral-400 group-hover:text-white"
                }`}
              >
                <span>VERIFY</span>
                <ArrowUpRight
                  size={13}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
