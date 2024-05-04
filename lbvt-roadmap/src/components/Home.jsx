import React, { useEffect, useRef, useState } from "react";

import * as Three from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ControlPanel from "./ControlPanel";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import CameraSlider from "./CameraSlider";
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
          console.log(intersects[0].object.parent);
          break;

        // for Alumni
        case "alumni_lbvt":
          console.log("alumni clicked");
          break;

        // for Industry
        case "industry_lbvt":
          console.log("industry clicked");
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
      {camera && <CameraSlider camera={camera} />}
    </div>
  );
};

export default Home;
