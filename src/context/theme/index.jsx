import React, { useEffect, useReducer } from "react";
import { ThemeReducer } from "./reducer";

const Context = React.createContext();

//local storage for theme
const theme = localStorage.getItem("theme");
const initialState = theme ? { theme } : { theme: "light" };

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, initialState);
  useEffect(() => {
    localStorage.setItem("theme", state.theme);
  }, [state]);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
