import { StrictMode } from "react";
import { createContext, useState } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";



export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [admin, setAdmin] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  return (
    <Context.Provider
      value={{ isAuthenticated, setIsAuthenticated, admin, setAdmin }}
    >
      <App />
    </Context.Provider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);


