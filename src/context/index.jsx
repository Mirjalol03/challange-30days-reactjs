import React from "react";
import { Provider as DataPieProvider } from "./dataPie";

const Context = React.createContext();

const Provider = ({ children }) => {
  const [state, setState] = React.useState(' ');

  return (
    <Context.Provider value={{state, setState}}>
      <DataPieProvider>{children}</DataPieProvider>
    </Context.Provider>
  );
};

export { Context, Provider };
