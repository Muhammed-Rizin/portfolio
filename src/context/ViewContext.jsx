import { createContext, useContext, useState } from "react";

const ViewContext = createContext();

export function ViewProvider({ children }) {
  const [cmdOpen, setCmdOpen] = useState(false);
  const [redMode, setRedMode] = useState(false);

  return (
    <ViewContext.Provider
      value={{
        cmdOpen,
        setCmdOpen,
        redMode,
        setRedMode,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
}

export function useView() {
  return useContext(ViewContext);
}
