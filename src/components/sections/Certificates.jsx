import { FileText } from "lucide-react";
import Card from "../ui/Card";
import Loading from "../ui/Loading";
import { useAsync } from "../../hooks/useAsync";
import { getCertificates } from "../../services/supabase";

const Certificates = ({ redMode }) => {
  const { data: certificates = [], loading } = useAsync(getCertificates, []);

  if (loading) return <Loading />;

  return (
    <div className="pb-32">
      <h2 className="text-xl font-mono font-bold text-white border-b border-neutral-800 pb-4 mb-8">
        DIGITAL_CREDENTIALS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {(certificates || []).map((cert, i) => (
          <Card
            key={cert.id || i}
            className="p-6 group cursor-pointer hover:bg-neutral-900"
            redMode={redMode}
            onClick={() =>
              window.open(cert.link, "_blank", "noopener,noreferrer")
            }
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <FileText
                  size={24}
                  className={redMode ? "text-red-600" : "text-white"}
                />
                <span className="text-[10px] font-mono text-red-600">
                  ID_{cert.certificate_id || cert.id}
                </span>
              </div>
              <span className="text-[10px] font-mono border border-neutral-800 px-2 py-0.5 text-neutral-500">
                {cert.date}
              </span>
            </div>
            <h3 className="text-lg font-bold font-mono text-white mb-1 group-hover:underline">
              {cert.title}
            </h3>
            <div className="text-xs font-mono text-neutral-500 mb-4">
              {cert.issuer}
            </div>
            <div className="flex gap-2 flex-wrap">
              {(cert.skills || []).map((s) => (
                <span
                  key={s}
                  className="text-[9px] border border-neutral-800 px-1 text-neutral-600"
                >
                  {s}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
