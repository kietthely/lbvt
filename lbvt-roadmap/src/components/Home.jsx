import React, { useEffect, useRef, useState } from "react";

import * as Three from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ControlPanel from "./ControlPanel";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import CameraSlider from "./CameraSlider";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass.js";
import lbvt_data from "../assets/lbvt.json";
const Home = () => {
  const ref = useRef();
  const [camera, setCamera] = useState(null);
  const controls = useRef();
  // lbvt data
  const courses_data = lbvt_data.repository.program.courses;
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

      // if year1_sp2_building_1, year1_sp2_building_2, year1_sp2_building_3, year1_sp2_building_4
      switch (intersects[0].object.parent.name) {
        // for year1 sp2
        case "year1_sp2_building_1":
          console.log("year1_sp2_building_1 clicked");
          let sp2_course_1 = courses_data.year1.sp2.course[0];
          console.log(sp2_course_1);
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "year1_sp2_building_2":
          console.log("year1_sp2_building_2 clicked");
          console.log(courses_data[1]);
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "year1_sp2_building_3":
          console.log("year1_sp2_building_3 clicked");
          console.log(courses_data[2]);
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "year1_sp2_building_4":
          console.log("year1_sp2_building_4 clicked");
          console.log(courses_data[3]);
          displayCourseUI(intersects[0].object.parent.userData);
          break;

        // for year1 sp5
        case "year1_sp5_building_1":
          console.log("year1_sp5_building_1 clicked");
          console.log(courses_data);
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
          console.log(intersects[0].object);
          break;

        // for Alumni
        case "alumni_lbvt":
          console.log("alumni clicked");
          console.log(intersects[0].object);
          break;

        // for Industry
        case "industry_lbvt":
          console.log("industry clicked");
          break;
        // for great hall
        case "great_hall":
          console.log("great hall clicked");
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
