import { useEffect } from "react";

export default function useKonami(cb) {
  useEffect(() => {
    const code = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    let idx = 0;
    const handler = (e) => {
      if (e.key === code[idx]) {
        idx++;
        if (idx === code.length) {
          cb();
          idx = 0;
        }
      } else idx = 0;
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [cb]);
}
