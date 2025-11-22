function Scanline() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 h-full w-full overflow-hidden">
      <div className="w-full h-1 bg-white/10 absolute top-0 left-0 animate-[scan_8s_linear_infinite]" />
      <style jsx>{`
        @keyframes scan {
          0% {
            top: -10%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 110%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
export default Scanline;