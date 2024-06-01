import React, { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useSearchParams,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Help from "./components/Help";

const App = () => {
  // extract folder name from url
  const [searchParams] = useSearchParams();
  const program = searchParams.get("program");

  return (
    <main className="bg-slate-300/20">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home program={program} />} />
          <Route path="/Help" element={<Help />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
