import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Help from "./components/Help";
import UploadFile from "./components/UploadFile";

const App = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  const [isNextClicked, setIsNextClicked] = useState(false);

  const handleUpload = (data) => {
    setIsUploaded(true);
  };

  const handleNextClick = () => {
    setIsNextClicked(true);
  };

  return (
    <main className="bg-slate-300/20">
      <Router>
        <NavBar />
        {!isUploaded ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <UploadFile onUpload={handleUpload} onNext={handleNextClick} />
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Help" element={<Help />} />
          </Routes>
        )}
      </Router>
    </main>
  );
};

export default App;
