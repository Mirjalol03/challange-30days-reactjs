import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Root from "./root";
import { BrowserRouter } from "react-router-dom";
import { RootProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <RootProvider>
      <Root />
    </RootProvider>
  </BrowserRouter>
);
