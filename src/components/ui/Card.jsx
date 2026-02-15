function Card({ children, className = "", onClick, active = false }) {
  const interactiveClass = onClick ? "brutal-interactive" : "";
  const handleKeyDown = (e) => {
    if (!onClick) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={`brutal-card ${interactiveClass} ${
        active ? "brutal-card-active" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
