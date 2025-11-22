import { useState } from "react";

const ScrambleText = ({ text }) => {
  const [disp, setDisp] = useState(text || "");
  const scramble = () => {
    let i = 0;
    const t = setInterval(() => {
      setDisp(() =>
        text
          .split("")
          .map((c, idx) => (idx < i ? text[idx] : "X7#9"[Math.floor(Math.random() * 4)]))
          .join("")
      );
      if (i >= text.length) clearInterval(t);
      i += 1 / 3;
    }, 30);
  };
  return (
    <span onMouseEnter={scramble} className="cursor-default">
      {disp}
    </span>
  );
};

export default ScrambleText