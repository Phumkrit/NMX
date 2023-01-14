import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Page/Home";
import Sidebar from "./Component/Sidebar";
import Blog from "./Page/Blog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div className="">
      <Navbar />
      <Routes path="/" element={<Navbar />}>
        <Route index element={<App />} />
        <Route path="About" element={<Home />} />
        <Route path="Blog" element={<Blog />} />
      </Routes>
    </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
