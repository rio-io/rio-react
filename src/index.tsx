import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resume from "./components/Resume";
import Stamp from "./components/Stamp";
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
      <Route path="/resume" element={<Resume />}></Route>
      <Route path="/stamp" element={<Stamp />}></Route>
    </Routes>
  </BrowserRouter>
);
