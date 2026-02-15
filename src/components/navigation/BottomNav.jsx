import { useLocation, useNavigate } from "react-router-dom";
import { SECTIONS } from "../../data/sections";

const pathToId = {
  "/": "dashboard",
  "/dashboard": "dashboard",
  "/projects": "projects",
  "/repos": "repos",
  "/firmware": "firmware",
  "/logs": "logs",
  "/certificates": "certificates",
};

const routeFor = (id) => (id === "dashboard" ? "/dashboard" : `/${id}`);

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentView = pathToId[location.pathname] || "dashboard";

  return (
    <>
      <nav className="fixed md:hidden bottom-4 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-2xl">
        <div className="brutal-card bg-[var(--neo-surface)] px-2 py-2 flex items-center justify-between">
          {SECTIONS.map((item) => {
            const active = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => navigate(routeFor(item.id))}
                className={`w-full py-2 px-1 flex flex-col items-center gap-1 transition-colors cursor-pointer ${
                  active ? "text-black" : "text-[var(--neo-muted)]"
                }`}
                aria-current={active ? "page" : undefined}
                title={item.l}
              >
                <span
                  className={`p-2 border-[3px] border-black transition-transform ${
                    active
                      ? "bg-[var(--neo-primary)] shadow-[3px_3px_0_#000]"
                      : "bg-white hover:-translate-x-[1px] hover:-translate-y-[1px]"
                  }`}
                >
                  <item.icon size={15} />
                </span>
                <span className="neo-mono text-[9px] font-bold tracking-wide">{item.l}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <nav className="hidden md:block fixed right-5 top-1/2 -translate-y-1/2 z-50">
        <div className="brutal-card bg-[var(--neo-surface)] p-2 flex flex-col gap-2">
          {SECTIONS.map((item) => {
            const active = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => navigate(routeFor(item.id))}
                className={`group brutal-btn px-3 py-2 text-left flex items-center gap-2 cursor-pointer ${
                  active
                    ? "bg-[var(--neo-primary)] text-black"
                    : "bg-white text-[var(--neo-muted)] hover:text-black"
                }`}
                aria-current={active ? "page" : undefined}
                title={item.l}
              >
                <item.icon size={15} />
                <span className="neo-mono text-[10px]">{item.l}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default BottomNav;
