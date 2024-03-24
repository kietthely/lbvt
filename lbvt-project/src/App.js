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

  useEffect(() => {
    // fetch data from "Firebase"
    const programData = collection(db, "Program");
    getDocs(programData).then((snapshot) => {
      // set information to the programs
      //console.log(snapshot.docs.map((doc) => ({...doc.data()})));
      setProgram(snapshot.docs.map((doc) => ({...doc.data()})));
      setCourses(programs[0].Courses);
    });
  }, []);

  console.log(courses);
  
  return (
    // need to find a way how to set the info to the each building
    <Spline scene="https://prod.spline.design/RUIIGY18trV33sg0/scene.splinecode" />
  );
}
