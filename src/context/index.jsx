import React, { createContext, useState } from "react";
import { Provider as ThemeProvider } from "./theme";
import { Provider as MenuProvider} from "./Menu";
const RootContext = createContext();

const RootProvider = ({ children }) => {
  const [state, setState] = useState("");

  return (
    <RootContext.Provider value={{ state, setState }}>
      <ThemeProvider>
        <MenuProvider>
        {children}
        </MenuProvider>
        </ThemeProvider>
    </RootContext.Provider>
  );
};

export { RootContext, RootProvider };
