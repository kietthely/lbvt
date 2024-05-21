import React, { useEffect, useRef, useState } from "react";

import * as Three from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ControlPanel from "./ControlPanel";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import data from "../assets/lbvt.json";
//import Alumni from "./Alumni";
import CameraSlider from "./CameraSlider";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass.js";
//import lbvt_data from "../assets/lbvt.json";
const Home = () => {
  const ref = useRef();
  const [camera, setCamera] = useState(null);
  const controls = useRef();
  // lbvt data
  //const courses_data = lbvt_data.repository.program.courses;
  useEffect(() => {
    // initialize world
    var scene, cam, renderer;
    scene = new Three.Scene();
    scene.background = new Three.Color(0xffffff);

    cam = new Three.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    renderer = new Three.WebGLRenderer();
    cam.position.y = 30;
    cam.position.z = 50;
    cam.rotation.x = -Math.PI / 6;

    setCamera(cam);
    // cast ambient light - sunlight
    const ambientLight = new Three.AmbientLight(0xffffff, 2.5);
    scene.add(ambientLight);

    // set scene size
    renderer.setSize(window.innerWidth, window.innerHeight);
    ref.current.appendChild(renderer.domElement);

    // effects/animations
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, cam);

    composer.addPass(renderPass);
    // outline effect size
    const outlinePass = new OutlinePass(
      new Three.Vector2(window.innerWidth, window.innerHeight),
      scene,
      cam
    );
    composer.addPass(outlinePass);

    // Camera controls by mouse
    controls.current = new OrbitControls(cam, renderer.domElement);
    // Restrict left mouse movement
    controls.current.minPolarAngle = Math.PI / 6; // 30 degrees
    controls.current.maxPolarAngle = Math.PI / 2; // 90 degrees
    // Restrict right mouse movement
    controls.current.enablePan = true; // Enable panning
    controls.current.screenSpacePanning = false;

    // Restrict camera target view
    controls.current.addEventListener("change", () => {
      const maxPanDistance = 125; // Maximum panning distance
      setCamera({ ...cam });
      if (cam.position.length() > maxPanDistance) {
        controls.current.reset();
      }
    });
    // load the scene
    const loader = new GLTFLoader();
    loader.load("/models/lbvt.glb", function (gltf) {
      scene.add(gltf.scene);
    });

    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, cam);
      composer.render();
    };

    animate();

    // click events
    const raycaster = new Three.Raycaster();
    const mouse = new Three.Vector2();

    function onMouseClick(event) {
      // mouse position
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, cam);

      // Calculate objects intersecting the picking ray
      const intersects = raycaster.intersectObjects(scene.children, true);
      if (intersects.length > 0) {
        const selectedObject = intersects[0].object;
        outlinePass.selectedObjects = [selectedObject];
      }
      // course data
      const courses_data = data.repository.program.courses;

      // if year1_sp2_building_1, year1_sp2_building_2, year1_sp2_building_3, year1_sp2_building_4
      switch (intersects[0].object.parent.name) {
        // for year1 sp2
        case "year1_sp2_building_1": {
          const y1_sp2_course_1 = courses_data.year1.sp2.course[0];
          displayCourseUI(y1_sp2_course_1);
          }
          break;
        case "year1_sp2_building_2":{
          const y1_sp2_course_2 = courses_data.year1.sp2.course[1];
          displayCourseUI(y1_sp2_course_2);
          }
          break;
        case "year1_sp2_building_3": {
          const y1_sp2_course_3 = courses_data.year1.sp2.course[2];
          displayCourseUI(y1_sp2_course_3);
          }
          break;
        case "year1_sp2_building_4": {
          const y1_sp2_course_4 = courses_data.year1.sp2.course[3];
          displayCourseUI(y1_sp2_course_4);
          }
          break;

        // for year1 sp5
        case "year1_sp5_building_1": {
          const y1_sp5_course_1 = courses_data.year1.sp5.course[0];
          displayCourseUI(y1_sp5_course_1);
          }
          break;
        case "year1_sp5_building_2": {
          const y1_sp5_course_2 = courses_data.year1.sp5.course[1];
          displayCourseUI(y1_sp5_course_2);
          }
          break;
        case "year1_sp5_building_3": {
          const y1_sp5_course_3 = courses_data.year1.sp5.course[2];
          displayCourseUI(y1_sp5_course_3);
          }
          break;
        case "year1_sp5_building_4": {
          const y1_sp5_course_4 = courses_data.year1.sp5.course[3];
          displayCourseUI(y1_sp5_course_4);
          }
          break;

        // for year2 sp2
        case "year2_sp2_building_1": {
          const y2_sp2_course_1 = courses_data.year2.sp2.course[0];
          displayCourseUI(y2_sp2_course_1);
          }

          break;
        case "year2_sp2_building_2": {
          const y2_sp2_course_2 = courses_data.year2.sp2.course[1];
          displayCourseUI(y2_sp2_course_2);
          }
          break;
        case "year2_sp2_building_3": {
          const y2_sp2_course_3 = courses_data.year2.sp2.course[2];
          displayCourseUI(y2_sp2_course_3);
          }
          break;
        case "year2_sp2_building_4": {
          const y2_sp2_course_4 = courses_data.year2.sp2.course[3];
          displayCourseUI(y2_sp2_course_4);
          }
          break;

        // for year2 sp5
        case "year2_sp5_building_1": {
          const y2_sp5_course_1 = courses_data.year2.sp5.course[0];
          displayCourseUI(y2_sp5_course_1);
          }
          break;
        case "year2_sp5_building_2": {
          const y2_sp5_course_2 = courses_data.year2.sp5.course[1];
          displayCourseUI(y2_sp5_course_2);
          }
          break;
        case "year2_sp5_building_3": {
          const y2_sp5_course_3 = courses_data.year2.sp5.course[2];
          displayCourseUI(y2_sp5_course_3);
          }
          break;
        case "year2_sp5_building_4": {
          const y2_sp5_course_4 = courses_data.year2.sp5.course[3];
          displayCourseUI(y2_sp5_course_4);
          }
          break;

        // for year3 sp2
        case "year3_sp2_building_1": {
          const y3_sp2_course_1 = courses_data.year3.sp2.course[0];
          displayCourseUI(y3_sp2_course_1);
          }
          break;
        case "year3_sp2_building_2": {
          const y3_sp2_course_2 = courses_data.year3.sp2.course[1];
          displayCourseUI(y3_sp2_course_2);
          }
          break;
        case "year3_sp2_building_3": {
          const y3_sp2_course_3 = courses_data.year3.sp2.course[2];
          displayCourseUI(y3_sp2_course_3);
          }
          break;
        case "year3_sp2_building_4": {
          const y3_sp2_course_4 = courses_data.year3.sp2.course[3];
          displayCourseUI(y3_sp2_course_4);
          }
          break;

        // for year3 sp5
        case "year3_sp5_building_1": {
          console.log("year3_sp5_building_1 clicked");
          const y3_sp5_course_1 = courses_data.year3.sp5.course[0];
          displayCourseUI(y3_sp5_course_1);
          }
          break;
        case "year3_sp5_building_2": {
          console.log("year3_sp5_building_2 clicked");
          const y3_sp5_course_2 = courses_data.year3.sp5.course[1];
          displayCourseUI(y3_sp5_course_2);
          }
          break;
        case "year3_sp5_building_3": {
          console.log("year3_sp5_building_3 clicked");
          const y3_sp5_course_3 = courses_data.year3.sp5.course[2];
          displayCourseUI(y3_sp5_course_3);
          }
          break;

        // for Elective
        case "elective_lbvt":
          displayElectiveUI();
          break;

        // for Alumni
        case "alumni_lbvt":
          //<Alumni/>
          displayAlumniUI();
          break;

        // for Industry
        case "industry_lbvt_":
          displayIndustryUI();
          break;

        // for welcome building
        case "Great_Hall_-_Starting":
          displayWelcomeUI();
          break;

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

  // consistently update the camera
  useEffect(() => {
    if (camera && controls.current) {
      controls.current.object.position.copy(camera.position);
      controls.current.update();
    }
  }, [camera]);

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
function displayCourseUI(course) {
    // display UI for course information with the related event
    // parameter: -> course information as an object type from click event with course building.

    if (course.id != null) {
      // check the parameter has id (for checking course id)
      var courseUI = window.open("", "_blank", "width=600, height=400");
      courseUI.document.write('<html><head><title>' + course.name + '</title>');
      //courseUI.document.write('<link rel="stylesheet" type="text/css" href="./Home.css">'); reading css or scss file did not work with window.open. Writing directly in here only worked
      courseUI.document.write('<style>.container{ border: 2px solid #000; padding: 10px;border-radius: 5px;background-color: #fff;margin-top: 100px;margin-left: 50px;position: relative;justify-content: center;} a:link { color: blue }');
      courseUI.document.write('a:visited { color: gray } a:hover { color: lightseagreen } a:active { color: gray }</style>');
      courseUI.document.write('</head><body>');
      courseUI.document.write("<div class ='container'>");

      courseUI.document.write("<h3>" + course.name + "</h3>");
      courseUI.document.write("<p>Course ID: " + course.id + "</p>");
      
      if (course.courseCoordinators.courseCoordinator.length != 1) {
        // Check the course has multiple coordinators
        for (let i = 0; i < course.courseCoordinators.courseCoordinator.length; i++) {
          // display all course coordinator's information
          courseUI.document.write("<p>Course coordinator: <a href="+course.courseCoordinators.courseCoordinator[i].url +' target="_blank" rel="noopener noreferrer">'+course.courseCoordinators.courseCoordinator[i].name +"</a></p>");
        }
      } else {
        // case for there is only 1 course coordinator
        if (course.courseCoordinators.courseCoordinator[0].name != null){
          courseUI.document.write("<p>Course coordinator: <a href="+course.courseCoordinators.courseCoordinator[0].url +' target="_blank" rel="noopener noreferrer">'+course.courseCoordinators.courseCoordinator[0].name +"</a></p>");
        } else {
          // case for the course does not have course coordinator (ex. elective courses)
          courseUI.document.write("<p>Course coordinator: N/A</p>");
        }
      }
        
      for (let i = 0; i < course.prerequisites.prerequisite.length; i++) {
        // display all prerequisite information
        if (course.prerequisites.prerequisite[i].id != null){
          // get the prerequisite course information then set the course name and url as a link
          var prerequisite = getPrerequisite(course.prerequisites.prerequisite[i].id);
          courseUI.document.write("<p>Prerequisite: <a href="+ prerequisite.url +' target="_blank" rel="noopener noreferrer">'+prerequisite.name + " (" + prerequisite.id+ ")</a></p>");
        } else {
          // case for the course does not have prerequisite
          courseUI.document.write("<p>Prerequisite: N/A</p>");
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
    

    const electiveData = data.repository.assistances.elective;
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

  function displayAlumniUI() {
    // display UI for Alumni information with the related event
    // source data is came from "src\assets\lbvt.json"
    const alumniData = data.repository.alumnus;
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

  function displayIndustryUI() {
    // display UI for industry information with the related event
    // source data is came from "src\assets\lbvt.json"
    const industryData = data.repository.industries;
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

  function displayWelcomeUI() {
    // display UI for the welcome message, and youtube videos which are related to LBVT in UniSA's youtube account
    // source data is came from "src\assets\lbvt.json"
    const welcomeData = data.repository.welcome;
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
  // search and return the prerequisite course which is in general course.
  // parameter: course ID as string (ex:GEOE2026)
  // return : course information as object

  const courses_data = data.repository.program.courses;

  for (let i = 0; i < courses_data.year1.sp2.course.length; i++ ){ 
    // search course in year1 sp2
    if (courses_data.year1.sp2.course[i].id === courseID){
      return courses_data.year1.sp2.course[i];
    }
  }

  for (let i = 0; i < courses_data.year1.sp5.course.length; i++ ){ 
    // search course in year1 sp5
    if (courses_data.year1.sp5.course[i].id === courseID){
      return courses_data.year1.sp5.course[i];
    }
  }

  for (let i = 0; i < courses_data.year2.sp2.course.length; i++ ){ 
    // search course in year2 sp2
    if (courses_data.year2.sp2.course[i].id === courseID){
      return courses_data.year2.sp2.course[i];
    }
  }

  for (let i = 0; i < courses_data.year2.sp5.course.length; i++ ){ 
    // search course in year2 sp5
    if (courses_data.year2.sp5.course[i].id === courseID){
      return courses_data.year2.sp5.course[i];
    }
  }
  for (let i = 0; i < courses_data.year3.sp2.course.length; i++ ){ 
    // search course in year3 sp2
    if (courses_data.year3.sp2.course[i].id === courseID){
      return courses_data.year3.sp2.course[i];
    }
  }

  for (let i = 0; i < courses_data.year3.sp5.course.length; i++ ){ 
    // search course in year3 sp5
    if (courses_data.year3.sp5.course[i].id === courseID){
      return courses_data.year3.sp5.course[i];
    }
  }
  // case for no match in the general courses
  return null; 
}

  return (
    <div>
      {/*Put the model to background.
    Allows other components to be on top of the model.
  */}
      <div
        ref={ref}
        className="ref"
        style={{ position: "fixed", zIndex: -1 }}
      />
      <div className="control-panel-container">
        <ControlPanel
          moveCameraLeft={moveCameraLeft}
          moveCameraRight={moveCameraRight}
          moveCameraTop={moveCameraTop}
          moveCameraBottom={moveCameraBottom}
          resetCamera={resetCamera}
        />

        {camera && <CameraSlider camera={camera} setCamera={setCamera} />}
      </div>
    </div>
  );
};

export default Home;
