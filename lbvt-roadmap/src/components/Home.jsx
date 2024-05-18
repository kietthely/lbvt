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
import findConnections from "../utils/connectionCourses";

import _ from "lodash";
function getCoursesData(courses_data) {
  const course_data_list = [];
  const coursePeriods = [
    "year1.sp2",
    "year1.sp5",
    "year2.sp2",
    "year2.sp5",
    "year3.sp2",
    "year3.sp5",
  ];

  for (let period of coursePeriods) {
    let periodCourses = _.get(courses_data, period + ".course", []);
    for (let course of periodCourses) {
      course_data_list.push(course);
    }
  }
  return course_data_list;
}
function findConnection(courseId, courses) {
  let connectedCourses = new Set();
  for (let course of courses) {
    if (
      course.prerequisites &&
      Array.isArray(course.prerequisites.prerequisite)
    ) {
      for (let prerequisite of course.prerequisites.prerequisite) {
        if (prerequisite.id === courseId) {
          connectedCourses.add(course);
          let newConnections = findConnection(course.id, courses);
          newConnections.forEach((connectedCourse) =>
            connectedCourses.add(connectedCourse)
          );
        }
      }
    }
  }

  return connectedCourses;
}
const Home = () => {
  // private variables
  const ref = useRef();
  const [camera, setCamera] = useState(null);
  const controls = useRef();
  // lbvt data
  const courses_data = lbvt_data.repository.program.courses;
  // turn into a list for easy traversal
  const course_data_list = getCoursesData(courses_data);
  useEffect(() => {
    // initialize world
    var scene, cam, renderer;
    scene = new Three.Scene();
    scene.background = new Three.Color(0x000000);

    cam = new Three.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    renderer = new Three.WebGLRenderer();
    cam.position.x += 25;
    cam.position.y = 30;
    cam.position.z = -20;

    cam.rotation.x = -Math.PI / 6;

    setCamera(cam);

    // cast ambient light - sunlight
    const ambientLight = new Three.AmbientLight(0xffffff, 4);
    scene.add(ambientLight);
    // add fog
    scene.fog = new Three.FogExp2(0xffffff, 0.04);

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
    outlinePass.visibleEdgeColor.set("#39FF14");
    outlinePass.hiddenEdgeColor.set("#39FF14");
    composer.addPass(outlinePass);

    // Camera controls by mouse
    controls.current = new OrbitControls(cam, renderer.domElement);
    controls.current.target.set(15, controls.current.target.y, 25); // set initial target.x and target.z
    controls.current.update(); // apply the changes
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
    const buildings = {};
    const loader = new GLTFLoader();
    loader.load("/models/lbvt.glb", function (gltf) {
      gltf.scene.traverse(function (object) {
        if (object.name.startsWith("building")) {
          buildings[object.name] = object;
          console.log(buildings);
        }
      });
      scene.add(gltf.scene);
    });

    const animate = function () {
      requestAnimationFrame(animate);
      composer.render();
    };

    animate();

    // click events
    const raycaster = new Three.Raycaster();
    const mouse = new Three.Vector2();

    function onMouseClick(event) {
      // mouse position - model intersection
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, cam);

      // Calculate objects intersecting the picking ray
      const intersects = raycaster.intersectObjects(scene.children, true);
      if (intersects.length > 0) {
        const selectedObject = intersects[0].object.parent.parent;
        console.log(selectedObject.userData);
        outlinePass.selectedObjects = [selectedObject];
      }

      // console.log(intersects[0].object.parent.parent.userData);
      // if year1_sp2_building_1, year1_sp2_building_2, year1_sp2_building_3, year1_sp2_building_4
      switch (intersects[0].object.parent.parent.name) {
        // for year1 sp2
        case "building_1":
          let connectedCourses = findConnection(
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
          displayCourseUI(course_data_list, connectedCourses);
          break;
        case "building_2":
          console.log("year1_sp2_building_2 clicked");
          console.log(courses_data[1]);
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_3":
          console.log("year1_sp2_building_3 clicked");
          console.log(courses_data[2]);
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_4":
          console.log("year1_sp2_building_4 clicked");
          console.log(courses_data[3]);
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        // for year1 sp5
        case "building_5":
          console.log("year1_sp5_building_1 clicked");
          console.log(courses_data);
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_6":
          console.log("year1_sp5_building_2 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_7":
          console.log("year1_sp5_building_3 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_8":
          console.log("year1_sp5_building_4 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;

        // for year2 sp2
        case "building_9":
          console.log("year2_sp2_building_1 clicked");

          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_10":
          console.log("year2_sp2_building_2 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_11":
          console.log("year2_sp2_building_3 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_12":
          console.log("year2_sp2_building_4 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;

        // for year2 sp5
        case "building_13":
          console.log("year2_sp5_building_1 clicked");

          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_14":
          console.log("year2_sp5_building_2 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_15":
          console.log("year2_sp5_building_3 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_16":
          console.log("year2_sp5_building_4 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;

        // for year3 sp2
        case "building_17":
          console.log("year3_sp2_building_1 clicked");
          console.log(intersects[0].object.parent.userData);
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_18":
          console.log("year3_sp2_building_2 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_19":
          console.log("year3_sp2_building_3 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_20":
          console.log("year3_sp2_building_4 clicked");
          displayCourseUI(intersects[0].object.parent.userData);
          break;

        // for year3 sp5
        case "building_21":
          console.log("year3_sp5_building_1 clicked");
          console.log(intersects[0].object.parent.userData);
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_22":
          console.log("year3_sp5_building_2 clicked");
          console.log(intersects[0].object.parent.userData);
          displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_23":
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
      // move camera
      camera.position.x += 1;
      // move target / focus point
      controls.current.target.x += 1;
      controls.current.update();
    }
  };
  const moveCameraLeft = () => {
    if (camera) {
      camera.position.x -= 1;
      controls.current.target.x -= 1;
      controls.current.update();
    }
  };
  const moveCameraTop = () => {
    if (camera) {
      camera.position.z -= 1;
      controls.current.target.z -= 1;
      controls.current.update();
    }
  };
  const moveCameraBottom = () => {
    if (camera) {
      camera.position.z += 1;
      controls.current.target.z += 1;
      controls.current.update();
    }
  };
  const resetCamera = () => {
    if (controls.current) {
      controls.current.reset();
    }
  };
  function displayCourseUI(evt, connectedCourses) {
    const evt_data = evt[0];
    if (evt_data.id != null) {
      var courseUI = window.open("", "_blank", "width=600, height=400");
      courseUI.document.write("<div id ='courseUI'>");

      courseUI.document.write("<p>" + "Course Name: " + evt_data.name + "</p>");
      courseUI.document.write("<p>" + "Course ID: " + evt_data.id + "</p>");

      for (let courseCoordinator of evt_data.courseCoordinators
        .courseCoordinator) {
        courseUI.document.write(
          "<p>" + "Course coordinator: " + courseCoordinator.name + "</p>"
        );
        courseUI.document.write(
          "<p>" +
            "More information: " +
            "<a href=" +
            courseCoordinator.url +
            ' target="_blank" rel="noopener noreferrer">Link</a></p>'
        );
      }

      if (evt_data.prerequisites.prerequisite[0].id) {
        courseUI.document.write(
          "<p>" +
            "Prerequisite : " +
            evt_data.prerequisites.prerequisite[0].id +
            "</p>"
        );
      } else {
        courseUI.document.write("<p>" + "Prerequisite : N/A </p>");
      }
      let courseList = "";
      for (let course of connectedCourses) {
        courseList += "<br>" + course.id + " " + course.name + " ";
      }

      courseUI.document.write(
        "<p>" +
          evt_data.name +
          " is a prerequisite to learn " +
          courseList +
          "</p>"
      );
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
