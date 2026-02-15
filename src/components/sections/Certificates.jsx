import { FileText } from "lucide-react";
import Card from "../ui/Card";

const CERTIFICATES = [
  {
    id: "META_ADVANCED_REACT",
    title: "Advanced React",
    issuer: "Coursera",
    date: "2025",
    skills: [
      "Advanced React Patterns",
      "Context Management",
      "Jest",
      "Unit Testing",
      "Software Design Patterns",
      "Front-End Development",
    ],
    link: "https://coursera.org/share/96acf2599a10d7c661ce9603d4c7822a",
  },
  {
    id: "META_REACT_BASICS",
    title: "React Basics",
    issuer: "Coursera",
    date: "2025",
    skills: ["React.js", "JavaScript"],
    link: "https://coursera.org/share/9feef364974b802a26ba4ea4be251f50",
  },
];

const CARD_COLORS = ["bg-[var(--neo-lime)]", "bg-[var(--neo-accent)]"];

const Certificates = () => {
  return (
    <div className="pb-44">
      <h2 className="section-title mb-8">Digital Credentials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {CERTIFICATES.map((cert, i) => (
          <Card
            key={cert.id}
            className={`p-5 ${CARD_COLORS[i % CARD_COLORS.length]}`}
            onClick={() => window.open(cert.link, "_blank", "noopener,noreferrer")}
          >
            <div className="flex justify-between items-start mb-4">
              <FileText size={24} className="text-black" />
              <span className="brutal-chip bg-white text-black">{cert.date}</span>
            </div>

            <h3 className="text-2xl uppercase text-black mb-1">{cert.title}</h3>
            <div className="neo-mono text-xs text-black/75 mb-4">{cert.issuer}</div>

            <div className="flex gap-2 flex-wrap">
              {cert.skills.map((skill) => (
                <span key={skill} className="brutal-chip bg-white text-black">
                  {skill}
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
