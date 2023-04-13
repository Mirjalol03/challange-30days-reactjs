import React from "react";
import "./Root.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";
import UserPage from "../pages/userPage";
import HomePage from "../pages/homePage";

const Root = () => {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}/>
          <Route path="/users/:id" element={<UserPage></UserPage>} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
    </>
  );
};

export default Root;
