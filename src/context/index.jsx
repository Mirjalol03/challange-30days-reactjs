import React from "react";
import { Provider as PostsProvider } from "./posts/posts";

const RootContext = React.createContext();

const RootProvider = ({ children }) => {
  const [state, setState] = React.useState("");

  const value = { state, setState };

  return (
    <RootContext.Provider value={value}>
      <PostsProvider>{children}</PostsProvider>
    </RootContext.Provider>
  );
};

export { RootContext, RootProvider };
