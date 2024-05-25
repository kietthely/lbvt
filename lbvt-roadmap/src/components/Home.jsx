import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';

import * as Three from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ControlPanel from "./ControlPanel";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import lbvt_data from '../assets/lbvt.json';
import Alumni from "./Alumni";
import Industry from "./Industry";
import Welcome from "./Welcome";
import Elective from "./Elective";


const Home = () => {
  const ref = useRef();
  const [camera, setCamera] = useState(null);
  const controls = useRef();
  

  useEffect(() => {
    var scene, camera, renderer;
    scene = new Three.Scene();
    scene.background = new Three.Color(0xffffff);

    camera = new Three.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    renderer = new Three.WebGLRenderer();
    camera.position.y = 30;
    camera.position.z = 50;
    camera.rotation.x = -Math.PI / 6;

    setCamera(camera);

    const ambientLight = new Three.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);
    renderer.setSize(window.innerWidth, window.innerHeight);
    ref.current.appendChild(renderer.domElement);

    // Camera controls by mouse
    controls.current = new OrbitControls(camera, renderer.domElement);
    // Restrict left mouse movement
    controls.current.minPolarAngle = Math.PI / 6; // 30 degrees
    controls.current.maxPolarAngle = Math.PI / 2; // 90 degrees
    // Restrict right mouse movement
    controls.current.enablePan = true; // Enable panning
    controls.current.screenSpacePanning = false;
    // Restrict zoom
    controls.current.minDistance = 10;
    controls.current.maxDistance = 100;

    // Restrict camera target view
    controls.current.addEventListener("change", () => {
      const maxPanDistance = 125; // Maximum panning distance

      if (camera.position.length() > maxPanDistance) {
        controls.current.reset();
      }
    });

    const loader = new GLTFLoader();
    loader.load("/models/lbvt.glb", function (gltf) {
      scene.add(gltf.scene);

      const building = scene.getObjectByName("year1_sp2_building_1");
      if (building) {
        console.log(building.userData); // logs the custom properties
        console.log(building.userData.course_id); // logs the course_id (e.g. 1)
        // Access individual properties
        // console.log(building.userData.course_id);
      } else {
        console.log("Building not found");
      }

      // add click events to scene
      // if year1_sp2_building_1, year1_sp2_building_2, year1_sp2_building_3, year1_sp2_building_4
      // output userData to console
    });

    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // click events
    const raycaster = new Three.Raycaster();
    const mouse = new Three.Vector2();

    function onMouseClick(event) {
      // mouse position
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      // Calculate objects intersecting the picking ray
      const intersects = raycaster.intersectObjects(scene.children, true);
      const courses_data = lbvt_data.repository.program.courses;

      console.log(courses_data);

      // if year1_sp2_building_1, year1_sp2_building_2, year1_sp2_building_3, year1_sp2_building_4
      let connectedCourses;
      let buildingId;
      switch (intersects[0].object.parent.name) {
          
        // for year1 sp2
        case "building_1":
          buildingId = 0;
          connectedCourses = findConnection(
            course_data_list[0].id,
            course_data_list
          );
          console.log(connectedCourses);
          const building4 = buildings["building_11"];

          if (building4) {
            building4.traverse(function (object) {
              object.fog = false; // ignore fog effect
            });
            outlinePass.selectedObjects.push(building4);
          }
          displayCourseUI(course_data_list, connectedCourses, buildingId);
          break;
          
        case "building_2":
          buildingId = 1;
          connectedCourses = findConnection(
            course_data_list[buildingId].id,
            course_data_list
          );
          displayCourseUI(course_data_list,connectedCourses, buildingId);
          break;
        case "building_3":
          buildingId=2;
          connectedCourses = findConnection(
            course_data_list[buildingId].id,
            course_data_list
          );
          displayCourseUI(course_data_list,connectedCourses, buildingId);
          break;
        case "building_4":
          buildingId = 3;
          connectedCourses = findConnection(
            course_data_list[buildingId].id,
            course_data_list
          );
          displayCourseUI(course_data_list,connectedCourses, buildingId);
          break;
        // for year1 sp5
        case "building_5":
          buildingId = 4;
          connectedCourses = findConnection(
            course_data_list[buildingId].id,
            course_data_list
          );
          displayCourseUI(course_data_list,connectedCourses, buildingId);
          break;
        case "building_6":
          buildingId = 5;
          connectedCourses = findConnection(
            course_data_list[buildingId].id,
            course_data_list
          );
          displayCourseUI(course_data_list,connectedCourses, buildingId);
          break;
        case "building_7":
          buildingId = 6;
          connectedCourses = findConnection(
            course_data_list[buildingId].id,
            course_data_list
          );
          displayCourseUI(course_data_list,connectedCourses, buildingId);
          break;
        case "building_8":
          buildingId = 7;
          connectedCourses = findConnection(
            course_data_list[buildingId].id,
            course_data_list
          );
          displayCourseUI(course_data_list,connectedCourses, buildingId);
          break;

        // for year2 sp2
        case "building_9":
          buildingId = 8;
          connectedCourses = findConnection(
            course_data_list[buildingId].id,
            course_data_list
          );
          displayCourseUI(course_data_list,connectedCourses, buildingId);
          break;
        case "building_10":
          buildingId = 9;
          connectedCourses = findConnection(
            course_data_list[buildingId].id,
            course_data_list
          );
          displayCourseUI(course_data_list,connectedCourses, buildingId);
          break;
        case "building_11":
          buildingId = 10;
          connectedCourses = findConnection(
            course_data_list[buildingId].id,
            course_data_list
          );
          displayCourseUI(course_data_list,connectedCourses, buildingId);
          break;
        case "building_12":
          buildingId = 11;
          connectedCourses = findConnection(
            course_data_list[buildingId].id,
            course_data_list
          );
          displayCourseUI(course_data_list,connectedCourses, buildingId);
          break;

        // for year2 sp5
        case "building_13":
          buildingId = 12;
          connectedCourses = findConnection(
            course_data_list[buildingId].id,
            course_data_list
          );
          displayCourseUI(course_data_list,connectedCourses, buildingId);
          break;
        case "building_14":
          buildingId = 13;
          connectedCourses = findConnection(
            course_data_list[buildingId].id,
            course_data_list
          );
          displayCourseUI(course_data_list,connectedCourses, buildingId);
          break;
        case "building_15":
          buildingId = 14;
          connectedCourses = findConnection(
            course_data_list[buildingId].id,
            course_data_list
          );
          displayCourseUI(course_data_list,connectedCourses, buildingId);
          break;
        case "building_16":
          buildingId = 15;
          connectedCourses = findConnection(
            course_data_list[buildingId].id,
            course_data_list
          );
          displayCourseUI(course_data_list,connectedCourses, buildingId);
          break;

        // for year3 sp2
        case "building_17":
          buildingId = 16;
          connectedCourses = findConnection(
            course_data_list[buildingId].id,
            course_data_list
          );
          displayCourseUI(course_data_list,connectedCourses, buildingId);
          break;
        case "building_18":
          buildingId = 17;
          connectedCourses = findConnection(
            course_data_list[buildingId].id,
            course_data_list
          );
          displayCourseUI(course_data_list,connectedCourses, buildingId);
          break;
        case "building_19":
          buildingId = 18;
          connectedCourses = findConnection(
            course_data_list[buildingId].id,
            course_data_list
          );
          displayCourseUI(course_data_list,connectedCourses, buildingId);
          break;
        case "building_20":
          buildingId = 19;
          connectedCourses = findConnection(
            course_data_list[buildingId].id,
            course_data_list
          );
          displayCourseUI(course_data_list,connectedCourses, buildingId);
          break;

        // for year3 sp5
        case "building_21":
          buildingId = 20;
          connectedCourses = findConnection(
            course_data_list[buildingId].id,
            course_data_list
          );
          displayCourseUI(course_data_list,connectedCourses, buildingId);
          break;
        case "building_22":
          buildingId = 21;
          connectedCourses = findConnection(
            course_data_list[buildingId].id,
            course_data_list
          );
          displayCourseUI(course_data_list,connectedCourses, buildingId);
          break;
        case "building_23":
          buildingId = 22;
          connectedCourses = findConnection(
            course_data_list[buildingId].id,
            course_data_list
          );
          displayCourseUI(course_data_list,connectedCourses, buildingId);
          break;
          
        // for Elective
        case "elective_lbvt":
          console.log("elective clicked");
          //<Link to={"/Elective"} className=""></Link>
          displayElectiveUI();
          break;

        // for Alumni
        case "alumni_lbvt":
          console.log("alumni clicked");
          //<Link to={"/Alumni"} className=""></Link>
          displayAlumniUI();
          break;

        // for Industry
        case "industry_lbvt":
          console.log("industry clicked");
          //<Link to={"/Industry"} className=""></Link>
          displayIndustryUI();
          break;

        // for welcome building
        case "great_hall":
          console.log("great hall clicked");
          //<Link to={"/Welcome"} className=""></Link>
          displayWelcomeUI();
          break;

        // for debugging
        default:
          console.log(intersects[0].object);
          break;
      }
    }

    window.addEventListener("click", onMouseClick);
    return () => {
      window.removeEventListener("click", onMouseClick);
    };
  }, []);
  // Camera movement functions using buttons
  const moveCameraRight = () => {
    if (camera) {
      camera.position.x += 1;
    }
  };
  const moveCameraLeft = () => {
    if (camera) {
      camera.position.x -= 1;
    }
  };
  const moveCameraTop = () => {
    if (camera) {
      camera.position.z -= 1;
    }
  };
  const moveCameraBottom = () => {
    if (camera) {
      camera.position.z += 1;
    }
  };
  const resetCamera = () => {
    if (controls.current) {
      controls.current.reset();
    }
  };
  const zoomIn = () => {
    if (camera) {
      camera.fov = Math.max(1, camera.fov - 2);
      camera.updateProjectionMatrix();
    }
  };

  const zoomOut = () => {
    if (camera) {
      camera.fov = Math.min(75, camera.fov + 2);
      camera.updateProjectionMatrix();
    }
  };

   function displayCourseUI(evt, connectedCourses, id) {
    const evt_data = evt[id];
    //console.log(evt);
    if (evt_data.id != null) {
      var courseUI = window.open("", "_blank", "width=700, height=600");
      courseUI.document.write('<html><head><title>' + evt_data.name + '</title>');
      //courseUI.document.write('<link rel="stylesheet" type="text/css" href="./Home.css">'); reading css or scss file did not work with window.open. Writing css directly in here only worked
      courseUI.document.write('<style>.container{ border: 2px solid #000; padding: 10px;border-radius: 5px;background-color: #fff;margin-top: 100px;margin-left: 50px;position: relative;justify-content: center;} a:link { color: blue }');
      courseUI.document.write('a:visited { color: gray } a:hover { color: lightseagreen } a:active { color: gray }</style>');
      courseUI.document.write('</head><body>');
      courseUI.document.write("<div class ='container'>");

      courseUI.document.write("<h3>" + evt_data.name + "</h3>");
      courseUI.document.write("<p>" + "Course ID: " + evt_data.id + "</p>");

      for (let courseCoordinator of evt_data.courseCoordinators
        .courseCoordinator) {
        if (courseCoordinator.name != null){ // To avoid displaying null value for Electives
          courseUI.document.write(
            "<p>" +
              "Course coordinator: " +
              "<a href=" +
              courseCoordinator.url +
              ' target="_blank" rel="noopener noreferrer">' + courseCoordinator.name + '</a></p>'
          );
        } 

      }
      // display all prerequisite information
      for (let i = 0; i < evt_data.prerequisites.prerequisite.length; i++) {
        if (evt_data.prerequisites.prerequisite[0].id) {
          var prerequisite = getPrerequisite(evt_data.prerequisites.prerequisite[i].id);
          courseUI.document.write(
            "<p>" +
            "Prerequisite : " +
            prerequisite.id + 
            " " +
            "<a href="+ prerequisite.url +' target="_blank" rel="noopener noreferrer">'+ prerequisite.name + "</a>" +
            "</p>"
          );
        } else {
          courseUI.document.write("<p>" + "Prerequisite : N/A </p>");
        }
      }
      let courseList = "";
      for (let course of connectedCourses) {
        courseList += "<br>" + course.id + " " + "<a href="+ course.url +' target="_blank" rel="noopener noreferrer">'+ course.name + "</a>" + " ";
      }
      if (courseList.length > 0){
        courseUI.document.write(
          "<p>" +
            evt_data.name +
            " is a prerequisite to learn " +
            courseList +
            "</p>"
        );
      }

      courseUI.document.write(
        "<p>" +
          "Course web page: " +
          "<a href=" +
          evt_data.url +
          ' target="_blank" rel="noopener noreferrer">Link</a></p>'
      );

      if (evt_data.notes.note) {
        courseUI.document.write(
          "<p>" + "Note: " + evt_data.notes.note + "</p>"
        );
      }

      if (evt_data.rules.rule) {
        courseUI.document.write(
          "<p>" + "Rule: " + evt_data.rules.rule + "</p>"
        );
      }

      courseUI.document.write("</div>");
      courseUI.document.write("</div>");
      courseUI.document.write('</body></html>');
    }
  }

      if (course.notes.note != null){
        // check the course has specific information as note.
          courseUI.document.write("<p>Note: " +course.notes.note +"</p>");
      }

      if (course.rules.rule != null){
        // check the course has specific information as rule.
          courseUI.document.write("<p>Rule: " +course.rules.rule +"</p>");
      }
      // display the link for the Uni SA's course page
      courseUI.document.write("<p>More information about the course: <a href="+course.url +' target="_blank" rel="noopener noreferrer">Link</a></p>');
      courseUI.document.write("</div>");
      courseUI.document.write('</body></html>');
    }
  }
  
  function displayElectiveUI(){
    // display UI for elective information with the related event
    // source data is came from "src\assets\lbvt.json"

    //<Link to={"/Elective"} className=""></Link> <-- does not work
    
    const electiveData = lbvt_data.repository.assistances.elective;
    var undergraduateElective = electiveData.electiveCourses.undergraduate;

    var courseUI = window.open('', '_blank', 'width=600, height=400');
    courseUI.document.write('<html><head><title>Electives</title>');
    courseUI.document.write('<style>.container{ border: 2px solid #000; padding: 10px;border-radius: 5px;background-color: #fff;margin-top: 100px;margin-left: 50px;position: relative;justify-content: center;} a:link { color: blue }');
    courseUI.document.write('.Intermediate{margin-top: 20px;margin-left: 50px; } .Advanced{margin-top: 20px;margin-left: 50px; } ');
    courseUI.document.write('a:visited { color: gray } a:hover { color: lightseagreen } a:active { color: gray }</style>');
    courseUI.document.write('</head><body>');
    courseUI.document.write("<div class ='container'>");
    courseUI.document.write("<h2>Elective</h2>");
    courseUI.document.write("<p>You can find the courses' information for electives.</p>");

    courseUI.document.write("<div id='undergraduate'>"); // section for undergraduate elective
    courseUI.document.write("<h3>Undergraduate elective</h3>");
    courseUI.document.write("<p>"+ undergraduateElective.course.notes.note+"</p>");
    courseUI.document.write("You can find the course from <a href="+undergraduateElective.course.url + ' target="_blank" rel="noopener noreferrer">here.</a></p>');
    courseUI.document.write("</div>");

    if ("environmental" in electiveData.electiveCourses){ 
      // only for LBVT course. section for environment electives

      var environmentElective = electiveData.electiveCourses.environmental;
      //console.log("has enviromnemtal")
      courseUI.document.write("<div className='environmental'>");
      courseUI.document.write("<h3>Environment electives</h3>");  

      // section for intermediate electives
      courseUI.document.write("<p><b>Intermediate Elective</b></p>");
      courseUI.document.write("<div class ='Intermediate' display: block;>");
      for (let i = 0; i < environmentElective.intermediate.course.length; i++){
        courseUI.document.write("<h4>"+environmentElective.intermediate.course[i].name+"</h4>");
        courseUI.document.write("<p>course ID: "+environmentElective.intermediate.course[i].id +"</p>");

        if (environmentElective.intermediate.course[i].courseCoordinators.courseCoordinator.length > 1){
          // display all information for course coordinators in the course
          for (let j = 0; j <environmentElective.intermediate.course[i].courseCoordinators.courseCoordinator.length; j++){
            courseUI.document.write("<p>Course coordinator: <a href="+environmentElective.intermediate.course[i].courseCoordinators.courseCoordinator[j].url +' target="_blank" rel="noopener noreferrer">'+environmentElective.intermediate.course[i].courseCoordinators.courseCoordinator[j].name +"</a></p>");
          }
        } else {
          // case for there is only 1 course coordinator
          courseUI.document.write("<p>Course coordinator: <a href="+environmentElective.intermediate.course[i].courseCoordinators.courseCoordinator[0].url +' target="_blank" rel="noopener noreferrer">'+environmentElective.intermediate.course[i].courseCoordinators.courseCoordinator[0].name +"</a></p>");
        }

        for (let j = 0; j < environmentElective.intermediate.course[i].prerequisites.prerequisite.length; j++){
          // displaying all prerequisite for the course
          if (environmentElective.intermediate.course[i].prerequisites.prerequisite[j].id != null){ 
            // get the prerequisite course information then set the course name and url as a link
            var prerequisite = getPrerequisite(environmentElective.intermediate.course[i].prerequisites.prerequisite[j].id);
            courseUI.document.write("<p>Prerequisite: <a href="+ prerequisite.url +' target="_blank" rel="noopener noreferrer">'+prerequisite.name + " (" + prerequisite.id+ ")</a></p>");
            } else {
            // case for there is no prerequisite
            courseUI.document.write("<p>Prerequisite: N/A</p>");
          }
        }
        courseUI.document.write("<p>More information about the course: <a href="+environmentElective.intermediate.course[i].url +' target="_blank" rel="noopener noreferrer">Link</a></p>');
      }
      courseUI.document.write("</div>");   
      
      courseUI.document.write("<p><b>Advanced Elective</b></p>"); 
      courseUI.document.write("<div class='Advanced' display: block;>"); // section for advanced electives
      for (let i = 0; i < environmentElective.advanced.course.length; i++){
      // display all courses for advanced elective
        courseUI.document.write("<h4>"+environmentElective.advanced.course[i].name+"</h4>");
        courseUI.document.write("<p>course ID: "+environmentElective.advanced.course[i].id +"</p>");
  
        if (environmentElective.advanced.course[i].courseCoordinators.courseCoordinator.length > 1){
          // display all information for course coordinators in the course
          for (let j = 0; j <environmentElective.advanced.course[i].courseCoordinators.courseCoordinator.length; j++){
            courseUI.document.write("<p>Course coordinator: <a href="+environmentElective.advanced.course[i].courseCoordinators.courseCoordinator[j].url +' target="_blank" rel="noopener noreferrer">'+environmentElective.advanced.course[i].courseCoordinators.courseCoordinator[j].name +"</a></p>");
          }
        } else {
          // case for there is only 1 course coordinator
          courseUI.document.write("<p>Course coordinator: <a href="+environmentElective.advanced.course[i].courseCoordinators.courseCoordinator[0].url +' target="_blank" rel="noopener noreferrer">'+environmentElective.advanced.course[i].courseCoordinators.courseCoordinator[0].name +"</a></p>");
        }

        for (let j = 0; j < environmentElective.advanced.course[i].prerequisites.prerequisite.length; j++){
          // displaying all prerequisite for the course
          if (environmentElective.advanced.course[i].prerequisites.prerequisite[j].id != null){ 
            // get the prerequisite course information then set the course name and url as a link
            prerequisite = getPrerequisite(environmentElective.advanced.course[i].prerequisites.prerequisite[j].id);
            courseUI.document.write("<p>Prerequisite: <a href="+ prerequisite.url +' target="_blank" rel="noopener noreferrer">'+prerequisite.name + " (" + prerequisite.id+ ")</a></p>");
          } else {
            // case for there is no prerequisite
            courseUI.document.write("<p>Prerequisite: N/A</p>");
          }
        }
        courseUI.document.write("<p>More information about the course: <a href="+environmentElective.advanced.course[i].url +' target="_blank" rel="noopener noreferrer">Link</a></p>');
      }
      courseUI.document.write("</div'>"); 

      courseUI.document.write("<p><b>Note: "+environmentElective.notes.note + "</b></p>");
      courseUI.document.write("<p><b>Rule: "+ environmentElective.rules.rule+"</b></p>");
      courseUI.document.write("<p>More information about environment electives: <a href="+environmentElective.url +' target="_blank" rel="noopener noreferrer">Link</a></p>');
      courseUI.document.write("</div>");
    }
    courseUI.document.write("</div>");
    courseUI.document.write("</div>");
    courseUI.document.write('</body></html>');
}

function displayAlumniUI(){
  // display UI for Alumni information with the related event
  // source data is came from "src\assets\lbvt.json"
  const alumniData = lbvt_data.repository.alumnus;
  var courseUI = window.open('', '_blank', 'width=600, height=400'); 
  courseUI.document.write('<html><head><title>Alumni</title>');
  courseUI.document.write('<style>.container{ border: 2px solid #000; padding: 10px;border-radius: 5px;background-color: #fff;margin-top: 100px;margin-left: 50px;position: relative;justify-content: center;} a:link { color: blue }');
  courseUI.document.write('a:visited { color: gray } a:hover { color: lightseagreen } a:active { color: gray }</style>');
  courseUI.document.write('</head><body>');
  courseUI.document.write("<div class ='container'>");

  courseUI.document.write("<h2>Alumni</h2>");
  if ("alumni" in alumniData){
    for (let i = 0; i < alumniData.alumni.length; i ++){
      courseUI.document.write("<p>" + alumniData.alumni[i].name + "<br/>");
      courseUI.document.write("<a href=" + alumniData.alumni[i].url +' target="_blank" rel="noopener noreferrer">Link</a></p>');
    }
  } else {
    courseUI.document.write("<p>Oops, There is no data for Alumni.<p/>");
  }
  courseUI.document.write("</div>");
  courseUI.document.write('</body></html>');
}

function displayIndustryUI(){
  // display UI for industry information with the related event
  // source data is came from "src\assets\lbvt.json"
  const industryData = lbvt_data.repository.industries;
  var courseUI = window.open('', '_blank', 'width=600, height=400'); 
  courseUI.document.write('<html><head><title>Industry</title>');
  courseUI.document.write('<style>.container{ border: 2px solid #000; padding: 10px;border-radius: 5px;background-color: #fff;margin-top: 100px;margin-left: 50px;position: relative;justify-content: center;} a:link { color: blue }');
  courseUI.document.write('.Partner{ margin-top: 20px;margin-left: 50px; } .Associations{margin-top: 20px;margin-left: 50px;}');
  courseUI.document.write('a:visited { color: gray } a:hover { color: lightseagreen } a:active { color: gray }</style>');
  courseUI.document.write('</head><body>');
  courseUI.document.write("<div class ='container'>");

  courseUI.document.write("<h2><b>Industry</b></h2>");
  courseUI.document.write("<p>You can check partner companies from list below.</p>");
  if ("partner" in industryData){ 
    courseUI.document.write("<h3><b>Partner companies</b></h3>");
    courseUI.document.write('<div class = Partner>');
      for (let i = 0; i < industryData.partner.length; i ++){ // display all partner companies which are on the Uni SA's web page
        if (industryData.partner[i].url != null){ // display all partners url links, Only if we could found the page.
          courseUI.document.write("<p>" + "Name: <a href=" + industryData.partner[i].url +' target="_blank" rel="noopener noreferrer">'+ industryData.partner[i].name +'</a></p>');
        } else {
          courseUI.document.write("<p>" + "Name: " + industryData.partner[i].name + "<br/>");
        }
      }
    courseUI.document.write('</div>');
    courseUI.document.write("<h3><b>Related associations</b></h3>");
    courseUI.document.write('<div class = Associations>');
      for (let i = 0; i < industryData.associations.association.length; i++){ // display the related associations for the program

        if (industryData.associations.association[i].url != null){
          courseUI.document.write("<p>Name: <a href=" + industryData.associations.association[i].url +' target="_blank" rel="noopener noreferrer">'+ industryData.associations.association[i].name +'</a></p>');
        } else {
          courseUI.document.write("<p>" + "Name: " + industryData.associations.association[i].name + "</p>");
        }
    }
    courseUI.document.write('</div>');
    } else {
      courseUI.document.write("<p>Oops, There is no data for Industry.<p/>");
    }
  courseUI.document.write("</div>");
  courseUI.document.write('</body></html>');
}

function displayWelcomeUI(){
  // display welcome message and youtube videos which are related to LBVT in UniSA's youtube account
  // source data is came from "src\assets\lbvt.json"
  const welcomeData = lbvt_data.repository.welcome;
  var courseUI = window.open('', '_blank', 'width=800, height=650');
  courseUI.document.write('<html><head><title>Welcome</title><meta http-equiv="Permissions-Policy" content="*">');
  courseUI.document.write('<style>.container{ border: 2px solid #000; padding: 10px;border-radius: 5px;background-color: #fff;margin-top: 100px;margin-left: 50px;position: relative;justify-content: center;} a:link { color: blue }');
  courseUI.document.write('.Videos{ margin-top: 20px; margin-left: 50px;}');
  courseUI.document.write('a:visited { color: gray } a:hover { color: lightseagreen } a:active { color: gray }</style>');
  courseUI.document.write('</head><body>');
  courseUI.document.write("<div class ='container'>");

  courseUI.document.write("<h2>Welcome to "+ welcomeData.name+ "</h2>");
  courseUI.document.write("<p>You can check videos that are related to the program.</p>"); 

  courseUI.document.write("<h3>Video</h3>");
  courseUI.document.write("<div class ='Videos'>");
  if ("videos" in welcomeData){ // need to change here after modify py code
      for (let i = 0; i < welcomeData.videos.video.length; i ++){

        courseUI.document.write("<p><b>" + welcomeData.videos.video[i].name + "</b></p>");
        courseUI.document.write('<iframe width="560" height="315" src="' + welcomeData.videos.video[i].embd+'" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
        //courseUI.document.write("<p>Your browser doesn't support HTML video. Here is a <a href="+ welcomeData.videos.video[i].url + ">link to the video</a> instead.</p>");

      }
    } else {
      courseUI.document.write("<p>Oops, There is no data for video to display.</p>");
    }
    courseUI.document.write("</div>");
  courseUI.document.write("</div>");
  courseUI.document.write('</body></html>');
}

function getPrerequisite(courseID){
  // search and return the prerequisite course in general course.
  // parameter: course ID as string (ex:GEOE2026)
  // return : course information as object

  const courses_data = lbvt_data.repository.program.courses;

  for (let i = 0; i < courses_data.year1.sp2.course.length; i++ ){ 
    // search course in year1 sp2
    if (courses_data.year1.sp2.course[i].id === courseID){
      //console.log(courses_data.year1.sp2.course[i]);
      return courses_data.year1.sp2.course[i];
    }
  }

  for (let i = 0; i < courses_data.year1.sp5.course.length; i++ ){ 
    // search course in year1 sp5
    if (courses_data.year1.sp5.course[i].id === courseID){
      //console.log(courses_data.year1.sp5.course[i])
      return courses_data.year1.sp5.course[i];
    }
  }

  for (let i = 0; i < courses_data.year2.sp2.course.length; i++ ){ 
    // search course in year2 sp2
    if (courses_data.year2.sp2.course[i].id === courseID){
      //console.log(courses_data.year2.sp2.course[i]);
      return courses_data.year2.sp2.course[i];
    }
  }

  for (let i = 0; i < courses_data.year2.sp5.course.length; i++ ){ 
    // search course in year2 sp5
    if (courses_data.year2.sp5.course[i].id === courseID){
      //console.log(courses_data.year2.sp5.course[i]);
      return courses_data.year2.sp5.course[i];
    }
  }
  for (let i = 0; i < courses_data.year3.sp2.course.length; i++ ){ 
    // search course in year3 sp2
    if (courses_data.year3.sp2.course[i].id === courseID){
      //console.log(courses_data.year3.sp2.course[i]);
      return courses_data.year3.sp2.course[i];
    }
  }

  for (let i = 0; i < courses_data.year3.sp5.course.length; i++ ){ 
    // search course in year3 sp5
    if (courses_data.year3.sp5.course[i].id === courseID){
      //console.log(courses_data.year3.sp5.course[i]);
      return courses_data.year3.sp5.course[i];
    }
  }

  // case for no match in the general courses
  return null; 
}

  return (
    <div style={{ position: "relative" }}>
      {/*Put the model to background.
        Allows other components to be on top of the model.
      */}
      <div ref={ref} style={{ position: "fixed", zIndex: -1 }} />
      <ControlPanel
        moveCameraLeft={moveCameraLeft}
        moveCameraRight={moveCameraRight}
        moveCameraTop={moveCameraTop}
        moveCameraBottom={moveCameraBottom}
        resetCamera={resetCamera}
        zoomIn={zoomIn}
        zoomOut={zoomOut}
      />
    </div>
  );
};

export default Home;

