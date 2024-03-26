import "./App.css";
import db from "./firebase.js";
// to pass, get info to firebase
import { collection, addDoc, getDocs } from "firebase/firestore";
import React, { useState, useEffect, Suspense } from "react";
import Spline from "@splinetool/react-spline";

export default function App() {
  /*
  // Fetch info to get Program info.
  // Get all info about the program(LBVT)
  const [programs, setProgram] = useState([]);
  //Get all courses info in the LBVT
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // fetch data from "Firebase"
    const programData = collection(db, "Program");
    getDocs(programData).then((snapshot) => {
      // set information to the programs
      //console.log(snapshot.docs.map((doc) => ({...doc.data()})));
      setProgram(snapshot.docs.map((doc) => ({ ...doc.data() })));
      setCourses(programs[0].Courses);
    });
  }, []);

  console.log(courses);
*/
  // spline section
  const display = {};

  function onMouseDown(e) {
    if (e.target.name === "year1__lbvt_building_1") {
      console.log("year 1 building have been clicked!");
    } else if (e.target.name === "year1_lbvt_building_2") {
      console.log("year 1 building 2 have been clicked!");
      display = {};
    } else if (e.target.name === "year1_lbvt_building_3") {
      console.log("year 1 building 3 have been clicked!");
    } else if (e.target.name === "year1_lbvt_building_4") {
      console.log("year 1 building 4 have been clicked!");
    }
  }
  return (
    // need to find a way how to set the info to the each building
    <div id="canvas3d">
      <Spline
        scene="https://prod.spline.design/RUIIGY18trV33sg0/scene.splinecode"
        onMouseDown={onMouseDown}
      />
    </div>
  );
}
