import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import View from "./components/View";
import User from "./components/User";
import Oragnization from "./components/Organization";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/user" element={<User />}></Route>
      <Route path="/organization" element={<Oragnization />}></Route>
      <Route path="/view" element={<View />}></Route>
    </Routes>
  </BrowserRouter>
);
