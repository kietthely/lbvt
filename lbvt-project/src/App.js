import "./App.css";
import db from "./firebase.js";
// to pass, get info to firebase
import { collection, addDoc, getDocs } from "firebase/firestore";
import React, { useState, useEffect, Suspense } from "react";
import Spline from "@splinetool/react-spline";

export default function App() {

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
    //const programData = query(collection(db, "Program"), where(["LBVT","Courses"], "==", true));
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

  console.log(courses);

  function onLoad(Spline){
    /*  Connect variable and object in Spline from Spline's objId, then modify the map information 
      status: Not finish yet. This function will create after finishing Login functions with student account. 
      propose: Display thier course program situation on the map such as Elective 1 -> EART3020 or display thier Grade for the course.

      task:  need to add buildings to the map for each Year course.
    */

    let isLogin = false;
    
    // has not debug it yet.
    //const obj_Welcome = Spline.findObjectByName("Great Hall - Starting");
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
    const obj_ENVT1013 = Spline.findObjectById("year1_lbvt_building_5");
    const obj_ENVT1016 = Spline.findObjectById("year1_lbvt_building_6");
    const obj_GEOE1018 = Spline.findObjectById("year1_lbvt_building_7");
    const obj_GEOE2026 = Spline.findObjectById("year1_lbvt_building_8");

    // Year 2 (sp2)
    const obj_BIOL2023 = Spline.findObjectById("year2_lbvt_building_4");
    const obj_EART3012 = Spline.findObjectById("year2_lbvt_building_1");
    const obj_ENVT1019 = Spline.findObjectById("year2_lbvt_building_3");
    const obj_ENVT3016 = Spline.findObjectById("year2_lbvt_building_2");

    // Year 2 (sp5)
    const obj_EE1 = Spline.findObjectById("year2_lbvt_building_5");
    const obj_EE2 = Spline.findObjectById("year2_lbvt_building_6");
    const obj_GEOE2022 = Spline.findObjectById("year2_lbvt_building_7");
    const obj_GEOE3019 = Spline.findObjectById("year2_lbvt_building_8");

    // Year 3 (sp2)
    const obj_ENVT3030 = Spline.findObjectById("year3_lbvt_building_4");
    const obj_ENVT3031 = Spline.findObjectById("year3_lbvt_building_3");
    const obj_EE3 = Spline.findObjectById("year3_lbvt_building_2");
    const obj_EE4 = Spline.findObjectById("year3_lbvt_building_1");

    // Year 3 (sp5)
    const obj_EE5 = Spline.findObjectById("year3_lbvt_building_5");
    const obj_EE6 = Spline.findObjectById("year3_lbvt_building_6");
    const obj_UE1= Spline.findObjectById("year3_lbvt_building_7");
    */
  }

  // spline section
  const display = {};

  function onMouseDown(e) {
    // Year1 SP2
    
    if (e.target.name === "year1_lbvt_building_1") {
      console.log("year 1 building have been clicked!");
      alert(" Course name: Soils in the Australian Landscape \n Course ID: EART1011 \n Prerequisite: N/A \n More information: https://study.unisa.edu.au/courses/101121/2024 \n ");
    } else if (e.target.name === "year1_lbvt_building_2") {
      console.log("year 1 building 2 have been clicked!");
      alert(" Course name: Earth and Climate Systems \n Course ID: EART1010 \n Prerequisite: N/A \n More information: https://study.unisa.edu.au/courses/101119/2024 \n ");
    } else if (e.target.name === "year1_lbvt_building_3") {
      console.log("year 1 building 3 have been clicked!");
      alert(" Course name: Sustainable Ecosystems \n Course ID: BIOL1015 \n Prerequisite: BIOL1014 \n More information: https://study.unisa.edu.au/courses/010900/2024 \n ");
    } else if (e.target.name === "year1_lbvt_building_4") {
      console.log("year 1 building 4 have been clicked!");
      alert(" Course name: Biodiversity for the Environment \n Course ID: BIOL1014 \n Prerequisite: N/A \n More information: https://study.unisa.edu.au/courses/010899/2024 \n ");
    
    // Year1 SP5

    } else if (e.target.name === "year1_lbvt_building_5") {
      console.log("year 1 building 5 have been clicked!");
      alert(" Course name: Environment, Society and Climate \n Course ID: ENVT1013 \n Prerequisite: N/A \n More information: https://study.unisa.edu.au/courses/008664/2024 \n ");
    } else if (e.target.name === "year1_lbvt_building_6") {
      console.log("year 1 building 6 have been clicked!");
      alert(" Course name: Environmental Analytical Methods \n Course ID: ENVT1016 \n Prerequisite: N/A \n More information: https://study.unisa.edu.au/courses/105607/2024 \n ");
    } else if (e.target.name === "year1_lbvt_building_7") {
      console.log("year 1 building 7 have been clicked!");
      alert(" Course name: Introduction to Surveying and Spatial Sciences \n Course ID: GEOE1018 \n Prerequisite: N/A \n More information: https://study.unisa.edu.au/courses/101550/2024 \n ");
    } else if (e.target.name === "year1_lbvt_building_8") {
      console.log("year 1 building 8 have been clicked!");
      alert(" Course name: Spatial Data Acquisition and Analysis \n Course ID: GEOE2026 \n Prerequisite: GEOE1018 \n More information: https://study.unisa.edu.au/courses/105610/2024 \n ");
    
    //Year2 SP2
    } else if (e.target.name === "year2_lbvt_building_1") {
      console.log("year 2 building 1 have been clicked!");
      alert(" Course name: Engineering and Environmental Geology \n Course ID: EART3012 \n Prerequisite: N/A \n More information: https://study.unisa.edu.au/courses/010163/2024 \n ");
    } else if (e.target.name === "year2_lbvt_building_2") {
      console.log("year 2 building 2 have been clicked!");
      alert(" Course name: Environmental Interpretation and Community Engagement \n Course ID: ENVT3016 \n Prerequisite: ENVT1013 \n More information: https://study.unisa.edu.au/courses/012751/2024 \n ");
    }  else if (e.target.name === "year2_lbvt_building_3") {
      console.log("year 2 building 3 have been clicked!");
      alert(" Course name: Environmental Chemistry \n Course ID: ENVT1019 \n Prerequisite: N/A \n More information: https://study.unisa.edu.au/courses/167985/2024 \n ");
    } else if (e.target.name === "year2_lbvt_building_4") {
      console.log("year 2 building 4 have been clicked!");
      alert(" Course name: Ecology \n Course ID: BIOL2023 \n Prerequisite: BIOL1015, BIOL1014\n More information: https://study.unisa.edu.au/courses/012566/2024 \n ");
    
    // Year2 SP5

    } else if (e.target.name === "year2_lbvt_building_5") {
      console.log("year 2 building 5 have been clicked!");
      alert(" Course name: Environmental Elective 1 \n Course ID: N/A \n Prerequisite: N/A \n More information: https://study.unisa.edu.au/degrees/bachelor-of-environmental-science \n ");
    } else if (e.target.name === "year2_lbvt_building_6") {
      console.log("year 2 building 6 have been clicked!");
      alert(" Course name: Environmental Elective 2 \n Course ID: N/A \n Prerequisite: N/A \n More information: https://study.unisa.edu.au/degrees/bachelor-of-environmental-science \n ");
    } else if (e.target.name === "year2_lbvt_building_7") {
      console.log("year 2 building 7 have been clicked!");
      alert(" Course name: Environmental Remote Sensing \n Course ID: GEOE2022 \n Prerequisite: GEOE2026 \n More information: https://study.unisa.edu.au/courses/101126/2024 \n ");
    } else if (e.target.name === "year2_lbvt_building_8") {
      console.log("year  building 8 have been clicked!");
      alert(" Course name: Web Cartography \n Course ID: GEOE3019 \n Prerequisite: GEOE2026 \n More information: https://study.unisa.edu.au/courses/155790/2024 \n ");
  

    //Year3 SP2
    } else if (e.target.name === "year3_lbvt_building_1") {
      console.log("year 3 building 1 have been clicked!");
      alert(" Course name: Environmental Elective 3 \n Course ID: N/A \n Prerequisite: N/A \n More information: https://study.unisa.edu.au/degrees/bachelor-of-environmental-science\n ");
    } else if (e.target.name === "year3_lbvt_building_2") {
      console.log("year 3 building 2 have been clicked!");
      alert(" Course name: Environmental Elective 4 \n Course ID: N/A \n Prerequisite: N/A \n More information: https://study.unisa.edu.au/degrees/bachelor-of-environmental-science\n ");
    }  else if (e.target.name === "year3_lbvt_building_3") {
      console.log("year 3 building 3 have been clicked!");
      alert(" Course name: Ecosystem Monitoring \n Course ID: ENVT3031 \n Prerequisite: GEOE2022, ENVT1016, BIOL2023 \n More information: https://study.unisa.edu.au/courses/156301/2024 \n ");
    } else if (e.target.name === "year3_lbvt_building_4") {
      console.log("year 3 building 4 have been clicked!");
      alert(" Course name: Environmental and Geospatial Field Project \n Course ID: ENVT3030 \n Prerequisite: Students must have completed 72 units of study in a relevant program.\n More information: https://study.unisa.edu.au/courses/156302/2024 \n ");
    
    // Year3 SP5
    } else if (e.target.name === "year3_lbvt_building_5") {
      console.log("year 3 building 5 have been clicked!");
      alert(" Course name: Environmental Elective 5 \n Course ID: N/A \n Prerequisite: N/A \n More information: https://study.unisa.edu.au/degrees/bachelor-of-environmental-science\n ");
    } else if (e.target.name === "year3_lbvt_building_6") {
      console.log("year 3 building 6 have been clicked!");
      alert(" Course name: Environmental Elective 6 \n Course ID: N/A \n Prerequisite: N/A \n More information: https://study.unisa.edu.au/degrees/bachelor-of-environmental-science\n ");
    } else if (e.target.name === "year3_lbvt_building_7") {
      console.log("year 3 building 7 have been clicked!");
      alert(" Course name: Undergraduate Elective \n Course ID: N/A \n Prerequisite: N/A \n More information: https://study.unisa.edu.au/electives/iee \n ");
    }
    
    // To avoid the error of ponter lock when user has clicked the alert.
    e.requestPointerLock = e.requestPointerLock || e.mozRequestPointerLock;
    document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock;
    
  }
  return (
    <div id="canvas3d">
      <Spline
        scene="https://prod.spline.design/RUIIGY18trV33sg0/scene.splinecode"
        onMouseDown={onMouseDown}
      />
    </div>
  );
}
