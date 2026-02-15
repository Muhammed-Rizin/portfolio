function DottedBg() {
  const blocks = [
    { top: "8%", left: "5%", size: 86, color: "var(--neo-secondary)", anim: "neo-bg-shape-a" },
    { top: "16%", right: "11%", size: 62, color: "var(--neo-primary)", anim: "neo-bg-shape-b" },
    { top: "46%", left: "10%", size: 48, color: "var(--neo-accent)", anim: "neo-bg-shape-c" },
    { bottom: "14%", right: "15%", size: 110, color: "var(--neo-lime)", anim: "neo-bg-shape-a" },
    { bottom: "8%", left: "38%", size: 40, color: "var(--neo-orange)", anim: "neo-bg-shape-b" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in srgb, var(--neo-primary) 8%, transparent), transparent 42%), linear-gradient(315deg, color-mix(in srgb, var(--neo-secondary) 10%, transparent), transparent 44%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, color-mix(in srgb, var(--neo-ink) 10%, transparent) 0 2px, transparent 2px 18px)",
        }}
      />

      {blocks.map((shape, index) => (
        <span
          key={index}
          className={`absolute border-[4px] border-black ${shape.anim}`}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            backgroundColor: shape.color,
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
          }}
        />
      ))}
    </div>
  );
}

export default DottedBg;
