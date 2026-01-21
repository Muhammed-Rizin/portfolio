import { useNavigate, useLocation } from "react-router-dom";
import { SECTIONS } from "../../data/sections";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Map paths to section IDs for comparison
  const pathToId = {
    "/": "dashboard",
    "/dashboard": "dashboard",
    "/projects": "projects",
    "/repos": "repos",
    "/firmware": "firmware",
    "/logs": "logs",
    "/certificates": "certificates",
  };

  const currentView = pathToId[location.pathname] || "dashboard";

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
      <div className="flex justify-between items-center px-2 py-2 bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 rounded-full shadow-2xl">
        {SECTIONS.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(`/${item.id}`)}
            className={`relative p-3 rounded-full transition-all group cursor-pointer
              ${
                currentView === item.id
                  ? "text-white bg-neutral-800"
                  : "text-neutral-500 hover:text-white"
              }
            `}
          >
            <item.icon size={20} />

            {currentView === item.id && (
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full" />
            )}
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-2 py-1 bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              {item.l}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
