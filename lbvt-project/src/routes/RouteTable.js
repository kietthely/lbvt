import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../components/Login/Login.js";
import { useState } from "react";
import App from "../app/App.js";

function RouteTable() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App></App>} />
          <Route
            path="/login"
            element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouteTable;
