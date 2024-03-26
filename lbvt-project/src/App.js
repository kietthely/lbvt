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
  
  //Get courses info for each category.
  const [year1C, setYear1] = useState([]);
  const [year2C, setYear2] = useState([]);
  const [year3C, setYear3] = useState([]);
  const [environmentalE, setEnvironmentalE] = useState([]);
  const [undergraduateE, setUnderGraduateE] = useState([]);

  

  useEffect(() => {
    // fetch data from "Firebase"
    const programData = collection(db, "Program");
    getDocs(programData).then((snapshot) => {
      // set information to the programs then split it to each category
      const program = snapshot.docs.map((doc) => ({...doc.data()}))
      const courses = program[0].Courses;
      const year1 = courses.Year1;
      const year2 = courses.Year2;
      const year3 = courses.Year3;
      const eE = courses.EnvironmentalElective;
      const uE = courses.UndergraduateElective;

      //Set the each values to the var.
      setProgram(program);
      setCourses(courses);
      setYear1(year1);
      setYear2(year2);
      setYear3(year3);
      setEnvironmentalE(eE);
      setUnderGraduateE(uE);

    });
  }, []);

function onLoad(Spline){
    /*  Connect variable and object in Spline from Spline's objName, then modify the map information 
      status: Not finish yet. This function will create after finishing Login functions with student account. 
      propose: Display thier course program situation on the map such as Elective 1 -> EART3020 or display thier Grade for the course.

      task:  need to add buildings to the map for each Year course.
    */

  let isLogin = false;

  // has not debug it yet.
  const obj_Welcome = Spline.findObjectByName("Great Hall - Starting");
  //obj_Welcome.text = "Done!"

  /* 
      if ( student has enrolled elective course){
        change text on the building and info for building.
      }
    */

  /*
        // Year 1 (sp2)
    const obj_BIOL1014 = Spline.findObjectByName("year1_lbvt_building_4")
    const obj_BIOL1015 = Spline.findObjectById("year1_lbvt_building_3");
    const obj_EART1010 = Spline.findObjectById("year1_lbvt_building_2");
    const obj_EART1011 = Spline.findObjectById("year1_lbvt_building_1");

    // Year 1 (sp5)
    const obj_ENVT1013 = Spline.findObjectById();
    const obj_ENVT1016 = Spline.findObjectById();
    const obj_GEOE1018 = Spline.findObjectById();
    const obj_GEOE2026 = Spline.findObjectById();

    // Year 2 (sp2)
    const obj_BIOL2023 = Spline.findObjectById("year2_lbvt_building_4");
    const obj_EART3012 = Spline.findObjectById("year2_lbvt_building_1");
    const obj_ENVT1019 = Spline.findObjectById("year2_lbvt_building_3");
    const obj_ENVT3016 = Spline.findObjectById("year2_lbvt_building_2");

    // Year 2 (sp5)
    const obj_EE1 = Spline.findObjectById();
    const obj_EE2 = Spline.findObjectById();
    const obj_GEOE2022= Spline.findObjectById();
    const obj_GEOE3019= Spline.findObjectById();

    // Year 3 (sp2)
    const obj_ENVT3030 = Spline.findObjectById("year3_lbvt_building_4");
    const obj_ENVT3031 = Spline.findObjectById("year3_lbvt_building_3");
    const obj_EE3 = Spline.findObjectById("year3_lbvt_building_2");
    const obj_EE4 = Spline.findObjectById("year3_lbvt_building_1");

    // Year 3 (sp5)
    const obj_EE5 = Spline.findObjectById();
    const obj_EE6 = Spline.findObjectById();
    const obj_UE1= Spline.findObjectById();
    */

  /*
      // set information to the programs
      //console.log(snapshot.docs.map((doc) => ({...doc.data()})));
      setProgram(snapshot.docs.map((doc) => ({ ...doc.data() })));
      setCourses(programs[0].Courses);
    });
  }, []);

  console.log(courses);
*/
  // spline section

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
