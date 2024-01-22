import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProgressBar from "./components/ProgressBar/ProgressBar.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />

      <ProgressBar />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
