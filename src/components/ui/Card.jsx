import { useView } from "../../context/ViewContext";

function Card({ children, className = "", onClick, active }) {
  const { redMode } = useView();

  const border = active
    ? redMode
      ? "border-red-600"
      : "border-white"
    : "border-neutral-800 hover:border-neutral-500";
  return (
    <div
      onClick={onClick}
      className={`relative bg-black border transition-all duration-300 group overflow-hidden ${border} ${className}`}
    >
      {[
        "top-0 left-0 border-t border-l",
        "top-0 right-0 border-t border-r",
        "bottom-0 left-0 border-b border-l",
        "bottom-0 right-0 border-b border-r",
      ].map((pos, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 transition-colors ${pos} ${
            active ? (redMode ? "border-red-600" : "border-white") : "border-neutral-500"
          } opacity-0 group-hover:opacity-100`}
        />
      ))}
      {children}
    </div>
  );
}
export default Card;
