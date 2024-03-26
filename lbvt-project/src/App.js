import "./App.css";
import Spline from "@splinetool/react-spline";
import db from "./firebase.js"; 
// to pass, get info to firebase
import { collection, addDoc, getDocs } from "firebase/firestore";
import {useState, useEffect} from "react";

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
    /* Connect variable and object in Spline from Spline's objId*/

    
    const test = Spline.findObjectByName("year1_lbvt_building_4");
    console.log(test);

    /*
    // Year 1 (sp2)
    const obj_BIOL1014 = Spline.findObjectByName("year1_lbvt_building_4")
    const obj_BIOL1015 = Spline.findObjectById();
    const obj_EART1010 = Spline.findObjectById();
    const obj_EART1011 = Spline.findObjectById();
    // Year 1 (sp5)
    const obj_ENVT1013 = Spline.findObjectById();
    const obj_ENVT1016 = Spline.findObjectById();
    const obj_GEOE1018 = Spline.findObjectById();
    const obj_GEOE2026 = Spline.findObjectById();

    // Year 2 (sp2)
    const obj_BIOL2023 = Spline.findObjectById();
    const obj_EART3012 = Spline.findObjectById();
    const obj_ENVT1019 = Spline.findObjectById();
    const obj_ENVT3016 = Spline.findObjectById();
    // Year 2 (sp5)
    const obj_EE1 = Spline.findObjectById();
    const obj_EE2 = Spline.findObjectById();
    const obj_GEOE2022= Spline.findObjectById();
    const obj_GEOE3019= Spline.findObjectById();

    // Year 3 (sp2)
    const obj_ENVT3030 = Spline.findObjectById();
    const obj_ENVT3031 = Spline.findObjectById();
    const obj_EE3 = Spline.findObjectById();
    const obj_EE4 = Spline.findObjectById();
    // Year 3 (sp5)
    const obj_EE5 = Spline.findObjectById();
    const obj_EE6 = Spline.findObjectById();
    const obj_UE1= Spline.findObjectById();
    */
  }
  
  return (
    // need to find a way how to set the info to the each building
    <Spline scene="https://prod.spline.design/RUIIGY18trV33sg0/scene.splinecode" />
  );
}
