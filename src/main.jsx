import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import DataContext from "./component/DataContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataContext>
);
