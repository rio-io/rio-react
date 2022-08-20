import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resume from "./components/Resume";
import Stamp from "./components/Stamp";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/Resume" element={<Resume />}></Route>
      <Route path="/stamp" element={<Stamp />}></Route>
      <Route path="/view" element={<Stamp />}></Route>
    </Routes>
  </BrowserRouter>
);
