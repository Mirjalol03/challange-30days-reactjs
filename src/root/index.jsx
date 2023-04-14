import React, { useEffect } from "react";
import "./Root.css";
import HomePage from "../pages/homePage";
import UseIsDark from "../hooks/useIsDark";



const Root = () => {
  const [isDark] = UseIsDark();
  useEffect(() => {
      const darkTxt = isDark ? "dark" : "light";
      const darkTxtFalse = isDark ? "light" : "dark";

      document.body.classList.remove(darkTxtFalse);
      document.body.classList.add(darkTxt); 
  },  [isDark]);
  return (
    <>
      <HomePage></HomePage>
    </>
  );
};

export default Root;
