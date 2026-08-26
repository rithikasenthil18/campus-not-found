import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Lost from "./Lost";
import Found from "./Found";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/lost" element={<Lost />} />
        <Route path="/found" element={<Found />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);