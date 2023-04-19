import React from "react";
import "./Root.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";
import HomePage from "../pages/homePage";
import CreatePage from "../pages/createPage";
import PostPage from "../pages/postPage";

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<CreatePage/>} />
        <Route path="/home" element={<Navigate to={'/'}/>} />
        <Route path='/post/:id' element={<PostPage/>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
};

export default Root;
