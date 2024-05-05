import React, { useEffect, useRef, useState } from "react";

import * as Three from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ControlPanel from "./ControlPanel";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import data from '../assets/lbvt.json';
import Alumni from "./Alumni";
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

      // if year1_sp2_building_1, year1_sp2_building_2, year1_sp2_building_3, year1_sp2_building_4
      switch (intersects[0].object.parent.name) {
        // for year1 sp2
        case "year1_sp2_building_1":
          console.log("year1_sp2_building_1 clicked");
          console.log(intersects[0].object.parent.userData);
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "year1_sp2_building_2":
          console.log("year1_sp2_building_2 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "year1_sp2_building_3":
          console.log("year1_sp2_building_3 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "year1_sp2_building_4":
          console.log("year1_sp2_building_4 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;

        // for year1 sp5
        case "year1_sp5_building_1":
          console.log("year1_sp5_building_1 clicked");
          console.log(intersects[0].object.parent.userData);
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "year1_sp5_building_2":
          console.log("year1_sp5_building_2 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "year1_sp5_building_3":
          console.log("year1_sp5_building_3 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "year1_sp5_building_4":
          console.log("year1_sp5_building_4 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;

        // for year2 sp2
        case "year2_sp2_building_1":
          console.log("year2_sp2_building_1 clicked");
          console.log(intersects[0].object.parent.userData);
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "year2_sp2_building_2":
          console.log("year2_sp2_building_2 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "year2_sp2_building_3":
          console.log("year2_sp2_building_3 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "year2_sp2_building_4":
          console.log("year2_sp2_building_4 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;

        // for year2 sp5
        case "year2_sp5_building_1":
          console.log("year2_sp5_building_1 clicked");
          console.log(intersects[0].object.parent.userData);
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "year2_sp5_building_2":
          console.log("year2_sp5_building_2 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "year2_sp5_building_3":
          console.log("year2_sp5_building_3 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "year2_sp5_building_4":
          console.log("year2_sp5_building_4 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;

        // for year3 sp2
        case "year3_sp2_building_1":
          console.log("year3_sp2_building_1 clicked");
          console.log(intersects[0].object.parent.userData);
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "year3_sp2_building_2":
          console.log("year3_sp2_building_2 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "year3_sp2_building_3":
          console.log("year3_sp2_building_3 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "year3_sp2_building_4":
          console.log("year3_sp2_building_4 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;

        // for year3 sp5
        case "year3_sp5_building_1":
          console.log("year3_sp5_building_1 clicked");
          console.log(intersects[0].object.parent.userData);
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "year3_sp5_building_2":
          console.log("year3_sp5_building_2 clicked");
          console.log(intersects[0].object.parent.userData);
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "year3_sp5_building_3":
          console.log("year3_sp5_building_3 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;

        // for Elective
        case "elective_lbvt":
          console.log("elective clicked");
          displayElectiveUI();
          break;

        // for Alumni
        case "alumni_lbvt":
          console.log("alumni clicked");
          //<Alumni/>
          displayAlumniUI();
          break;

        // for Industry
        case "industry_lbvt":
          console.log("industry clicked");
          displayIndustryUI();
          break;
          
        // for welcome building
        case "great_hall":
          console.log("great hall clicked");
          displayWelcomeUI();
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

  function displayCourseUI(evt) {
    // display UI for course information with the related event
    // parameter: -> userData (course information from click event)
    if (evt.course_id != null) {
      // check the event has by the specific event (for the course check course id)
      var courseUI = window.open("", "_blank", "width=600, height=400"); // <- should I change here to the window.alert()?
      courseUI.document.write("<div id ='courseUI'>");

      courseUI.document.write(
        "<p>" + "Course Name: " + evt.course_name + "</p>"
      );
      courseUI.document.write("<p>" + "Course ID: " + evt.course_id + "</p>");

      if (evt.course_coordinator_size != 0) {
        // display all course coordinator's information

        // To detect the pattern in the userData.
        const patternForName = /^course_coordinator_\d+_name$/;
        const patternForUrl = /^course_coordinator_\d+_url$/;
        for (let key in evt) {
          if (patternForName.test(key)) {
            const keyValueName = key.match(/\d+/)[0]; // detect the amount of coordinators in userData
            //console.log(`Course Coordinator: ${evt[key]}`)
            if (evt.course_coordinator_size > 1) {
              // if the course has several coordinators display index value
              courseUI.document.write(
                "<p>" +
                  "Course coordinator " +
                  keyValueName +
                  ": " +
                  evt[key] +
                  "<br>"
              );
            } else {
              courseUI.document.write(
                "<p>" + "Course coordinator: " + evt[key] + "<br>"
              );
            }
          }
          if (patternForUrl.test(key)) {
            //const keyValueUrl = key.match(/\d+/)[0]; // detect the amount of coordinator's url in userData
            courseUI.document.write(
              "More information: " +
                "<a href=" +
                evt[key] +
                ' target="_blank" rel="noopener noreferrer">Link</a></p>'
            );
          }
        }
      }
      if (evt.prerequisite_size != 1) {
        // if the course has prerequisites, display all id of the course
        // In Sam's code, it seems if there is NO prerequisite, the number will be 1.

        const patternForPrerequisite = /^prerequisite_\d+_id$/; // to detect the prerequisite pattern in for loop

        for (let key in evt) {
          if (patternForPrerequisite.test(key)) {
            const keyValueId = key.match(/\d+/)[0]; // detect the amount of prerequisite in userData
            if (evt.prerequisite_size > 2) {
              // if the course has several prerequisites display index value
              courseUI.document.write(
                "<p>" + "Prerequisite " + keyValueId + ": " + evt[key] + "</p>"
              );
            } else {
              courseUI.document.write(
                "<p>" + "Prerequisite : " + evt[key] + "</p>"
              );
            }
          }
        }
      } else {
        courseUI.document.write("<p>" + "Prerequisite : N/A </p>");
      }

      courseUI.document.write(
        "<p>" +
          "Course web page: " +
          "<a href=" +
          evt.course_url +
          ' target="_blank" rel="noopener noreferrer">Link</a></p>'
      );

      if ("notes" in evt) {
        // if the course has any note, display the information
        //for (let i = 0; i < evt.notes_size; i++ ){
        courseUI.document.write("<p>" + "Note: " + evt.notes + "</p>");
        //}
      }

      if ("rules" in evt) {
        // if the course has any rules, display the information
        //for (let i = 0; i < evt.rules_size; i ++){
        courseUI.document.write("<p>" + "Rule: " + evt.rules + "</p>");
        //}
      }
      courseUI.document.write("</div>");
    }
  }
    function displayElectiveUI(){
    // display UI for elective information with the related event
    // source data is came from "src\assets\lbvt.json"
    
    const electiveData = data.repository.assistances.elective;
    console.log(electiveData);

    //var courseUI = window.open('', '_blank', 'width=600, height=400');
    //courseUI.document.write("<div id ='electiveUI'>");
    //courseUI.document.write("</div>");
}

function displayAlumniUI(){
  // display UI for Alumni information with the related event
  // source data is came from "src\assets\lbvt.json"
  const alumniData = data.repository.alumnus;
  console.log(data.repository);
  var courseUI = window.open('', '_blank', 'width=600, height=400'); // need to consider to change design
  courseUI.document.write("<div id ='alumniUI'>");

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
}

function displayIndustryUI(){
  // display UI for industry information with the related event
  // source data is came from "src\assets\lbvt.json"
  const industryData = data.repository.industries;
  var courseUI = window.open('', '_blank', 'width=600, height=400'); // need to consider to change design
  courseUI.document.write("<div id ='industryUI'>");

  courseUI.document.write("<h2>Industry</h2>");
  if ("industry" in industryData){ // need to change here after modify py code
      for (let i = 0; i < industryData.industry.length; i ++){
        courseUI.document.write("<p>" + "Name: " + industryData.industry[i].name + "<br/>");
        courseUI.document.write("<a href=" + industryData.industry[i].url +' target="_blank" rel="noopener noreferrer">Link</a></p>');
        }
    } else {
      courseUI.document.write("<p>Oops, There is no data for Industry.<p/>");
    }
  courseUI.document.write("</div>");
}

function displayWelcomeUI(){
  // display UI for the welcome message, and youtube videos which are related to LBVT in UniSA's youtube account
  // source data is came from "src\assets\lbvt.json"
  const welcomeData = data.repository.welcome;
  var courseUI = window.open('', '_blank', 'width=800, height=650'); // need to consider to change design
  courseUI.document.write("<head>" + '<meta http-equiv="Permissions-Policy" content="*">' + "</head>");
  courseUI.document.write("<div id ='welcomeUI'>");

  courseUI.document.write("<h2>Welcome to "+ welcomeData.name+ "</h2>");
  courseUI.document.write("<p>You can find information from each building on the map.</p>"); 
  courseUI.document.write("<p>In this building, you can check videos that are related to the program.</p>"); 

  courseUI.document.write("<h3>Video</h3>");
  console.log(welcomeData.videos.video.length)

  if ("videos" in welcomeData){ // need to change here after modify py code
      for (let i = 0; i < welcomeData.videos.video.length; i ++){
        courseUI.document.write("<div id ='video'>");
        courseUI.document.write("<p><b>" + welcomeData.videos.video[i].name + "</b></p>");
        courseUI.document.write('<iframe width="560" height="315" src="' + welcomeData.videos.video[i].embd+'" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
        //courseUI.document.write("<p>Your browser doesn't support HTML video. Here is a <a href="+ welcomeData.videos.video[i].url + ">link to the video</a> instead.</p>");
        courseUI.document.write("</div>");
      }
    } else {
      courseUI.document.write("<p>Oops, There is no data for video to display.<p/>");
    }
  courseUI.document.write("</div>");
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
