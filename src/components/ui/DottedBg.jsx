function DottedBg() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 opacity-[0.15]"
      style={{
        backgroundImage: "radial-gradient(#888 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />
  );
}

export default DottedBg;
