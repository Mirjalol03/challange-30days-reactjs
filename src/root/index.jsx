import React from "react";
import "./Root.css";
import LoginPage from "../pages/loginPage";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import SuccessPage from "../pages/successPage";

const Root = () => {
  // const Navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login"/>}/>
        <Route path="/login" element={<LoginPage />} />
        {/* //create success page */}
        <Route path="/success/:user" element={<SuccessPage />} />
      </Routes>
    </>
  );
};

export default Root;
