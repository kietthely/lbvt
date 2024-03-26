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

  console.log(courses);
  
  return (
    // need to find a way how to set the info to the each building
    <Spline scene="https://prod.spline.design/RUIIGY18trV33sg0/scene.splinecode" />
  );
}
