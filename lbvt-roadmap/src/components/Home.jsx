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
  for (let i = 0; i < courses.length; i++) {
    let course = courses[i];
    if (
      course.prerequisites &&
      Array.isArray(course.prerequisites.prerequisite)
    ) {
      for (let prerequisite of course.prerequisites.prerequisite) {
        if (prerequisite.id === courseId) {
          connectedCourses.add(i + 1);
          let newConnections = findConnection(course.id, courses);
          newConnections.forEach((connectedCourseIndex) =>
            connectedCourses.add(connectedCourseIndex)
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
    cam.position.x = 8;
    cam.position.y = 20;
    cam.position.z = 60;

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
    outlinePass.edgeThickness = 2.0;
    composer.addPass(outlinePass);

    // camera controls by mouse
    controls.current = new OrbitControls(cam, renderer.domElement);
    controls.current.target.set(5, controls.current.target.y, 25); // set initial target.x and target.z
    controls.current.update(); // apply the changes
    // restrict left mouse movement
    controls.current.minPolarAngle = Math.PI / 6; // 30 degrees
    controls.current.maxPolarAngle = Math.PI / 2; // 90 degrees
    // restrict right mouse movement
    controls.current.enablePan = true; // Enable panning
    controls.current.screenSpacePanning = false;

    // restrict camera target view
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
        }
      });
      scene.add(gltf.scene);
    });
    // Render the scene models
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
      // const intersects = raycaster.intersectObjects(scene.children, true);
      // if (intersects.length > 0) {
      //   const selectedObject = intersects[0].object.parent.parent;
      //   console.log(selectedObject.userData);
      //   outlinePass.selectedObjects = [selectedObject];
      // }
      const intersects = raycaster.intersectObjects(scene.children, true);
      let buildingObject;
      if (intersects.length > 0) {
        let selectedObject = intersects[0].object;
        while (selectedObject) {
          if (/^building_\d+$/.test(selectedObject.name)) {
            outlinePass.selectedObjects = [selectedObject];
            buildingObject = selectedObject;
            break;
          } else if (selectedObject.name === "elective_lbvt") {
            outlinePass.selectedObjects = [selectedObject];
            buildingObject = selectedObject;
            break;
          } else if (selectedObject.name === "alumni_lbvt") {
            outlinePass.selectedObjects = [selectedObject];
            buildingObject = selectedObject;
            break;
          } else if (selectedObject.name === "industry_lbvt") {
            outlinePass.selectedObjects = [selectedObject];
            buildingObject = selectedObject;
            break;
          }
          selectedObject = selectedObject.parent;
        }
      }
      let connectedCourses;

      switch (buildingObject.name) {
        // for year1 sp2
        case "building_1":
          connectedCourses = findConnection(
            course_data_list[0].id,
            course_data_list
          );
          // All prerequisites courses
          // Course index is the index of the course you are looking for -1 in the course_data_list
          // because it starts at 0 but course index starts at 1
          // course_data_list contains all the courses in the program (not including electives)
          connectedCourses.forEach((courseIndex) => {
            const building = buildings[`building_${courseIndex}`];

            if (building) {
              building.traverse(function (object) {
                object.fog = false; // ignore fog effect
              });
              outlinePass.selectedObjects.push(building);
            }
          });
          console.log("building 1");
          // displayCourseUI(course_data_list, connectedCourses);
          break;
        case "building_2":
          connectedCourses = findConnection(
            course_data_list[1].id,
            course_data_list
          );
          connectedCourses.forEach((courseIndex) => {
            const building = buildings[`building_${courseIndex}`];

            if (building) {
              building.traverse(function (object) {
                object.fog = false; // ignore fog effect
              });
              outlinePass.selectedObjects.push(building);
            }
          });
          // displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_3":
          connectedCourses = findConnection(
            course_data_list[2].id,
            course_data_list
          );
          connectedCourses.forEach((courseIndex) => {
            const building = buildings[`building_${courseIndex}`];

            if (building) {
              building.traverse(function (object) {
                object.fog = false; // ignore fog effect
              });
              outlinePass.selectedObjects.push(building);
            }
          });
          // displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_4":
          connectedCourses = findConnection(
            course_data_list[3].id,
            course_data_list
          );
          connectedCourses.forEach((courseIndex) => {
            const building = buildings[`building_${courseIndex}`];

            if (building) {
              building.traverse(function (object) {
                object.fog = false; // ignore fog effect
              });
              outlinePass.selectedObjects.push(building);
            }
          });
          // displayCourseUI(intersects[0].object.parent.userData);
          break;
        // for year1 sp5
        case "building_5":
          connectedCourses = findConnection(
            course_data_list[4].id,
            course_data_list
          );
          connectedCourses.forEach((courseIndex) => {
            const building = buildings[`building_${courseIndex}`];

            if (building) {
              building.traverse(function (object) {
                object.fog = false; // ignore fog effect
              });
              outlinePass.selectedObjects.push(building);
            }
          });
          // displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_6":
          connectedCourses = findConnection(
            course_data_list[5].id,
            course_data_list
          );
          connectedCourses.forEach((courseIndex) => {
            const building = buildings[`building_${courseIndex}`];

            if (building) {
              building.traverse(function (object) {
                object.fog = false; // ignore fog effect
              });
              outlinePass.selectedObjects.push(building);
            }
          }); // displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_7":
          connectedCourses = findConnection(
            course_data_list[6].id,
            course_data_list
          );
          connectedCourses.forEach((courseIndex) => {
            const building = buildings[`building_${courseIndex}`];

            if (building) {
              building.traverse(function (object) {
                object.fog = false; // ignore fog effect
              });
              outlinePass.selectedObjects.push(building);
            }
          });
          // displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_8":
          connectedCourses = findConnection(
            course_data_list[7].id,
            course_data_list
          );
          connectedCourses.forEach((courseIndex) => {
            const building = buildings[`building_${courseIndex}`];

            if (building) {
              building.traverse(function (object) {
                object.fog = false; // ignore fog effect
              });
              outlinePass.selectedObjects.push(building);
            }
          });
          // displayCourseUI(intersects[0].object.parent.userData);
          break;

        // for year2 sp2
        case "building_9":
          connectedCourses = findConnection(
            course_data_list[8].id,
            course_data_list
          );
          connectedCourses.forEach((courseIndex) => {
            const building = buildings[`building_${courseIndex}`];

            if (building) {
              building.traverse(function (object) {
                object.fog = false; // ignore fog effect
              });
              outlinePass.selectedObjects.push(building);
            }
          });

          // displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_10":
          connectedCourses = findConnection(
            course_data_list[9].id,
            course_data_list
          );
          connectedCourses.forEach((courseIndex) => {
            const building = buildings[`building_${courseIndex}`];

            if (building) {
              building.traverse(function (object) {
                object.fog = false; // ignore fog effect
              });
              outlinePass.selectedObjects.push(building);
            }
          });
          // displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_11":
          connectedCourses = findConnection(
            course_data_list[10].id,
            course_data_list
          );
          connectedCourses.forEach((courseIndex) => {
            const building = buildings[`building_${courseIndex}`];

            if (building) {
              building.traverse(function (object) {
                object.fog = false; // ignore fog effect
              });
              outlinePass.selectedObjects.push(building);
            }
          });
          // displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_12":
          connectedCourses = findConnection(
            course_data_list[11].id,
            course_data_list
          );
          connectedCourses.forEach((courseIndex) => {
            const building = buildings[`building_${courseIndex}`];

            if (building) {
              building.traverse(function (object) {
                object.fog = false; // ignore fog effect
              });
              outlinePass.selectedObjects.push(building);
            }
          });
          // displayCourseUI(intersects[0].object.parent.userData);
          break;

        // for year2 sp5
        case "building_13":
          connectedCourses = findConnection(
            course_data_list[12].id,
            course_data_list
          );
          connectedCourses.forEach((courseIndex) => {
            const building = buildings[`building_${courseIndex}`];

            if (building) {
              building.traverse(function (object) {
                object.fog = false; // ignore fog effect
              });
              outlinePass.selectedObjects.push(building);
            }
          });
          // displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_14":
          connectedCourses = findConnection(
            course_data_list[13].id,
            course_data_list
          );
          connectedCourses.forEach((courseIndex) => {
            const building = buildings[`building_${courseIndex}`];

            if (building) {
              building.traverse(function (object) {
                object.fog = false; // ignore fog effect
              });
              outlinePass.selectedObjects.push(building);
            }
          });
          // displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_15":
          connectedCourses = findConnection(
            course_data_list[14].id,
            course_data_list
          );
          connectedCourses.forEach((courseIndex) => {
            const building = buildings[`building_${courseIndex}`];

            if (building) {
              building.traverse(function (object) {
                object.fog = false; // ignore fog effect
              });
              outlinePass.selectedObjects.push(building);
            }
          });
          // displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_16":
          connectedCourses = findConnection(
            course_data_list[15].id,
            course_data_list
          );
          connectedCourses.forEach((courseIndex) => {
            const building = buildings[`building_${courseIndex}`];

            if (building) {
              building.traverse(function (object) {
                object.fog = false; // ignore fog effect
              });
              outlinePass.selectedObjects.push(building);
            }
          });
          // displayCourseUI(intersects[0].object.parent.userData);
          break;

        // for year3 sp2
        case "building_17":
          connectedCourses = findConnection(
            course_data_list[16].id,
            course_data_list
          );
          connectedCourses.forEach((courseIndex) => {
            const building = buildings[`building_${courseIndex}`];

            if (building) {
              building.traverse(function (object) {
                object.fog = false; // ignore fog effect
              });
              outlinePass.selectedObjects.push(building);
            }
          });
          // displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_18":
          connectedCourses = findConnection(
            course_data_list[17].id,
            course_data_list
          );
          connectedCourses.forEach((courseIndex) => {
            const building = buildings[`building_${courseIndex}`];

            if (building) {
              building.traverse(function (object) {
                object.fog = false; // ignore fog effect
              });
              outlinePass.selectedObjects.push(building);
            }
          });
          // displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_19":
          connectedCourses = findConnection(
            course_data_list[18].id,
            course_data_list
          );
          connectedCourses.forEach((courseIndex) => {
            const building = buildings[`building_${courseIndex}`];

            if (building) {
              building.traverse(function (object) {
                object.fog = false; // ignore fog effect
              });
              outlinePass.selectedObjects.push(building);
            }
          });
          // displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_20":
          connectedCourses = findConnection(
            course_data_list[19].id,
            course_data_list
          );
          connectedCourses.forEach((courseIndex) => {
            const building = buildings[`building_${courseIndex}`];

            if (building) {
              building.traverse(function (object) {
                object.fog = false; // ignore fog effect
              });
              outlinePass.selectedObjects.push(building);
            }
          });
          // displayCourseUI(intersects[0].object.parent.userData);
          break;

        // for year3 sp5
        case "building_21":
          connectedCourses = findConnection(
            course_data_list[20].id,
            course_data_list
          );
          connectedCourses.forEach((courseIndex) => {
            const building = buildings[`building_${courseIndex}`];

            if (building) {
              building.traverse(function (object) {
                object.fog = false; // ignore fog effect
              });
              outlinePass.selectedObjects.push(building);
            }
          });
          // displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_22":
          connectedCourses = findConnection(
            course_data_list[21].id,
            course_data_list
          );
          connectedCourses.forEach((courseIndex) => {
            const building = buildings[`building_${courseIndex}`];

            if (building) {
              building.traverse(function (object) {
                object.fog = false; // ignore fog effect
              });
              outlinePass.selectedObjects.push(building);
            }
          });
          // displayCourseUI(intersects[0].object.parent.userData);
          break;
        case "building_23":
          connectedCourses = findConnection(
            course_data_list[22].id,
            course_data_list
          );
          connectedCourses.forEach((courseIndex) => {
            const building = buildings[`building_${courseIndex}`];

            if (building) {
              building.traverse(function (object) {
                object.fog = false; // ignore fog effect
              });
              outlinePass.selectedObjects.push(building);
            }
          });
          // displayCourseUI(intersects[0].object.parent.userData);
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
      // Move both camera and target
      camera.position.x -= 1;
      controls.current.target.x -= 1;
      controls.current.update();
    }
  };
  const moveCameraTop = () => {
    if (camera) {
      // Move both camera and target
      camera.position.z -= 1;
      controls.current.target.z -= 1;
      controls.current.update();
    }
  };
  const moveCameraBottom = () => {
    if (camera) {
      // Move both camera and target
      camera.position.z += 1;
      controls.current.target.z += 1;
      controls.current.update();
    }
  };
  const resetCamera = () => {
    if (controls.current) {
      controls.current.reset();

      // Reset camera position
      camera.position.x = 8;
      camera.position.y = 20;
      camera.position.z = 60;

      // Reset camera rotation
      camera.rotation.x = -Math.PI / 6;

      // Reset target
      controls.current.target.set(5, controls.current.target.y, 25);

      controls.current.update();
    }
  };
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
