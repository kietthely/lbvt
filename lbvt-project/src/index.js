import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app/App";
import Login from "./components/Login/Login";

import RouteTable from "./routes/RouteTable";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouteTable></RouteTable>
  </React.StrictMode>
);
