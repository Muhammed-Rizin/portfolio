function DottedBg() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 opacity-45"
      style={{
        backgroundImage: `
          linear-gradient(to right, color-mix(in srgb, var(--neo-ink) 8%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in srgb, var(--neo-ink) 8%, transparent) 1px, transparent 1px),
          radial-gradient(circle at 20% 10%, color-mix(in srgb, var(--neo-secondary) 25%, transparent), transparent 42%)
        `,
        backgroundSize: "30px 30px, 30px 30px, 100% 100%",
      }}
    />
  );
}

export default DottedBg;
