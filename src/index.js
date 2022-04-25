import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BrowserRouter as Router } from "react-router-dom";
import MainContext from "./context/main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <MainContext>
        <Root />
      </MainContext>
    </Router>
  </React.StrictMode>
);
