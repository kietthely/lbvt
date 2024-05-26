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
    outlinePass.edgeThickness = 2.0;
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
      // const intersects = raycaster.intersectObjects(scene.children, true);
      // if (intersects.length > 0) {
      //   const selectedObject = intersects[0].object.parent.parent;
      //   console.log(selectedObject.userData);
      //   outlinePass.selectedObjects = [selectedObject];
      // }
      const intersects = raycaster.intersectObjects(scene.children, true);
      if (intersects.length > 0) {
        let selectedObject = intersects[0].object;
        while (selectedObject) {
          if (/^building_\d+$/.test(selectedObject.name)) {
            console.log(selectedObject.userData);
            outlinePass.selectedObjects = [selectedObject];
            break;
          } else if (selectedObject.name === "elective_lbvt") {
            outlinePass.selectedObjects = [selectedObject];
            break;
          } else if (selectedObject.name === "alumni_lbvt") {
            outlinePass.selectedObjects = [selectedObject];
            break;
          } else if (selectedObject.name === "industry_lbvt") {
            outlinePass.selectedObjects = [selectedObject];
            break;
          }
          selectedObject = selectedObject.parent;
        }
      }
      let connectedCourses;
      // console.log(intersects[0].object.parent.parent.userData);
      // if year1_sp2_building_1, year1_sp2_building_2, year1_sp2_building_3, year1_sp2_building_4
      switch (intersects[0].object.parent.parent.name) {
        // for year1 sp2
        case "building_1":
          connectedCourses = findConnection(
            course_data_list[0].id,
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
          console.log(connectedCourses);
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
  /*
  function displayCourseUI(evt, connectedCourses, id) {
    const evt_data = evt[id];
    //console.log(evt);
    if (evt_data.id != null) {
      var courseUI = window.open("", "_blank", "width=700, height=600");
      courseUI.document.write(
        "<html><head><title>" + evt_data.name + "</title>"
      );
      //courseUI.document.write('<link rel="stylesheet" type="text/css" href="./Home.css">'); reading css or scss file did not work with window.open. Writing css directly in here only worked
      courseUI.document.write(
        "<style>.container{ border: 2px solid #000; padding: 10px;border-radius: 5px;background-color: #fff;margin-top: 100px;margin-left: 50px;position: relative;justify-content: center;} a:link { color: blue }"
      );
      courseUI.document.write(
        "a:visited { color: gray } a:hover { color: lightseagreen } a:active { color: gray }</style>"
      );
      courseUI.document.write("</head><body>");
      courseUI.document.write("<div class ='container'>");

      courseUI.document.write("<h3>" + evt_data.name + "</h3>");
      courseUI.document.write("<p>" + "Course ID: " + evt_data.id + "</p>");

      for (let courseCoordinator of evt_data.courseCoordinators
        .courseCoordinator) {
        if (courseCoordinator.name != null) {
          // To avoid displaying null value for Electives
          courseUI.document.write(
            "<p>" +
              "Course coordinator: " +
              "<a href=" +
              courseCoordinator.url +
              ' target="_blank" rel="noopener noreferrer">' +
              courseCoordinator.name +
              "</a></p>"
          );
        }
      }
      // display all prerequisite information
      for (let i = 0; i < evt_data.prerequisites.prerequisite.length; i++) {
        if (evt_data.prerequisites.prerequisite[0].id) {
          var prerequisite = getPrerequisite(
            evt_data.prerequisites.prerequisite[i].id
          );
          courseUI.document.write(
            "<p>" +
              "Prerequisite : " +
              prerequisite.id +
              " " +
              "<a href=" +
              prerequisite.url +
              ' target="_blank" rel="noopener noreferrer">' +
              prerequisite.name +
              "</a>" +
              "</p>"
          );
        } else {
          courseUI.document.write("<p>" + "Prerequisite : N/A </p>");
        }
      }
      let courseList = "";
      for (let course of connectedCourses) {
        courseList +=
          "<br>" +
          course.id +
          " " +
          "<a href=" +
          course.url +
          ' target="_blank" rel="noopener noreferrer">' +
          course.name +
          "</a>" +
          " ";
      }
      if (courseList.length > 0) {
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
      courseUI.document.write("</body></html>");
    }
  }

  if (course.notes.note != null) {
    // check the course has specific information as note.
    courseUI.document.write("<p>Note: " + course.notes.note + "</p>");
  }

  if (course.rules.rule != null) {
    // check the course has specific information as rule.
    courseUI.document.write("<p>Rule: " + course.rules.rule + "</p>");
  }
  // display the link for the Uni SA's course page
  courseUI.document.write(
    "<p>More information about the course: <a href=" +
      course.url +
      ' target="_blank" rel="noopener noreferrer">Link</a></p>'
      courseUI.document.write("</div>");
  courseUI.document.write("</body></html>");
  };
  
  // case for no match in the general courses
  return null;
}
  
  
  */
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
