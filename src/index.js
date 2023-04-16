import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root";
import { Provider as RootProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RootProvider>
    <Root />
  </RootProvider>
);
