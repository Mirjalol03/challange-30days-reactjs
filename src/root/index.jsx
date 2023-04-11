import React, { useEffect } from "react";
import "./Root.css";
import Navbar from "../components/navbar";
import useTheme from "../hooks/useTheme";
import NavMenu from "../components/navMenu";

const Root = () => {
  const [{theme}] = useTheme();
  useEffect(() => {
    document.body.classList.add(`theme-${theme}`);
    return () => {
      document.body.classList.remove(`theme-${theme}`);
    };
  }, [theme]);
  return (
    <>
      <Navbar></Navbar>
      <NavMenu></NavMenu>
    </>
  );
};

export default Root;
