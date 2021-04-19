import React, { createContext } from "react";
import source from "./data.json";

export const AppStateContext = createContext({});

export default function AppStateProvider({ children }) {
  const value = { ...source };
  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}
