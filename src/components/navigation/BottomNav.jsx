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
      <nav className="fixed md:hidden bottom-2 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-md px-1 pb-[max(env(safe-area-inset-bottom),0.25rem)]">
        <div className="brutal-card bg-[var(--neo-surface)] px-2 py-1.5">
          <div className="flex items-center justify-between gap-1">
            {SECTIONS.map((item) => {
              const active = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => navigate(routeFor(item.id))}
                  className={`group relative h-10 w-10 grid place-items-center transition-all cursor-pointer border-[3px] border-black ${
                    active
                      ? "bg-[var(--neo-primary)] text-black shadow-[3px_3px_0_#000]"
                      : "bg-white text-[var(--neo-muted)]"
                  }`}
                  aria-current={active ? "page" : undefined}
                  aria-label={item.l}
                  title={item.l}
                >
                  <item.icon size={16} />
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 brutal-chip bg-white text-black whitespace-nowrap opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100">
                    {item.l}
                  </span>
                  {active && <span className="absolute -bottom-1 w-3 h-1 bg-black border border-black" />}
                </button>
              );
            })}
          </div>
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
