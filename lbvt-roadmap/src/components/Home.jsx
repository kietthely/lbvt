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
    // add line connect between courses
    const lineMaterial = new Three.LineBasicMaterial({ color: 0x39ff14 });

    const lineGeometry = new Three.BufferGeometry();
    let line = new Three.Line(lineGeometry, lineMaterial);
    scene.add(line);

    const updateLine = () => {
      // let lineGeometry = new THREE.Geometry();
      // outlinePass.selectedObjects.forEach(object => {
      //   lineGeometry.vertices.push(object.position);
      // });
    };
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
      setCamera({ ...cam });
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
      if (event.target == null) {
        return;
      }
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
      let buildingObject;
      const intersects = raycaster.intersectObjects(scene.children, true);
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
      // check if clicking on buildings
      if (buildingObject) {
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
            updateLine();
            displayCourseUI(
              course_data_list,
              connectedCourses,
              course_data_list[0].id
            );
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
            updateLine();
            displayCourseUI(
              course_data_list,
              connectedCourses,
              course_data_list[1].id
            );
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
            updateLine();
            displayCourseUI(
              course_data_list,
              connectedCourses,
              course_data_list[2].id
            );
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
            updateLine();
            displayCourseUI(
              course_data_list,
              connectedCourses,
              course_data_list[3].id
            );
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
            updateLine();
            displayCourseUI(
              course_data_list,
              connectedCourses,
              course_data_list[4].id
            );
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
            });

            updateLine();
            displayCourseUI(
              course_data_list,
              connectedCourses,
              course_data_list[5].id
            );
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
            updateLine();
            displayCourseUI(
              course_data_list,
              connectedCourses,
              course_data_list[6].id
            );
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
            updateLine();
            displayCourseUI(
              course_data_list,
              connectedCourses,
              course_data_list[7].id
            );
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

            displayCourseUI(
              course_data_list,
              connectedCourses,
              course_data_list[8].id
            );
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
            displayCourseUI(
              course_data_list,
              connectedCourses,
              course_data_list[9].id
            );
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
            displayCourseUI(
              course_data_list,
              connectedCourses,
              course_data_list[10].id
            );
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
            displayCourseUI(
              course_data_list,
              connectedCourses,
              course_data_list[11].id
            );
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
            displayCourseUI(
              course_data_list,
              connectedCourses,
              course_data_list[12].id
            );
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
            displayCourseUI(
              course_data_list,
              connectedCourses,
              course_data_list[13].id
            );
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
            displayCourseUI(
              course_data_list,
              connectedCourses,
              course_data_list[14].id
            );
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
            displayCourseUI(
              course_data_list,
              connectedCourses,
              course_data_list[15].id
            );
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
            displayCourseUI(
              course_data_list,
              connectedCourses,
              course_data_list[16].id
            );
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
            displayCourseUI(
              course_data_list,
              connectedCourses,
              course_data_list[17].id
            );
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
            displayCourseUI(
              course_data_list,
              connectedCourses,
              course_data_list[18].id
            );
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
            displayCourseUI(
              course_data_list,
              connectedCourses,
              course_data_list[19].id
            );
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
            displayCourseUI(
              course_data_list,
              connectedCourses,
              course_data_list[20].id
            );
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
            displayCourseUI(
              course_data_list,
              connectedCourses,
              course_data_list[21].id
            );
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
            displayCourseUI(
              course_data_list,
              connectedCourses,
              course_data_list[22].id
            );
            break;

          // for Elective
          case "elective_lbvt":
            break;

          // for Alumni
          case "alumni_lbvt":
            displayAlumniUI();
            break;

          // for Industry
          case "industry_lbvt":
            displayIndustryUI();
            break;
          // for great hall
          case "great_hall":
            displayWelcomeUI();
            break;
          default:
            console.log(intersects[0].object);
            updateLine();
            break;
        }
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
  function displayCourseUI(evt, connectedCourses, id) {
    const evt_data = evt.find((item) => item.id === id);
    console.log(evt_data);
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
      if (connectedCourses.length > 0) {
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

    if (evt_data.notes.note != null) {
      // check the course has specific information as note.
      courseUI.document.write("<p>Note: " + evt_data.notes.note + "</p>");
    }

    if (evt_data.rules.rule != null) {
      // check the course has specific information as rule.
      courseUI.document.write("<p>Rule: " + evt_data.rules.rule + "</p>");
    }
    // display the link for the Uni SA's course page
    courseUI.document.write(
      "<p>More information about the course: <a href=" +
        course.url +
        ' target="_blank" rel="noopener noreferrer">Link</a></p>'
    );
    courseUI.document.write("</div>");
    courseUI.document.write("</body></html>");
  }
  function getPrerequisite(courseID) {
    // search and return the prerequisite course in general course.
    // parameter: course ID as string (ex:GEOE2026)
    // return : course information as object

    const courses_data = lbvt_data.repository.program.courses;

    for (let i = 0; i < courses_data.year1.sp2.course.length; i++) {
      // search course in year1 sp2
      if (courses_data.year1.sp2.course[i].id === courseID) {
        //console.log(courses_data.year1.sp2.course[i]);
        return courses_data.year1.sp2.course[i];
      }
    }

    for (let i = 0; i < courses_data.year1.sp5.course.length; i++) {
      // search course in year1 sp5
      if (courses_data.year1.sp5.course[i].id === courseID) {
        //console.log(courses_data.year1.sp5.course[i])
        return courses_data.year1.sp5.course[i];
      }
    }

    for (let i = 0; i < courses_data.year2.sp2.course.length; i++) {
      // search course in year2 sp2
      if (courses_data.year2.sp2.course[i].id === courseID) {
        //console.log(courses_data.year2.sp2.course[i]);
        return courses_data.year2.sp2.course[i];
      }
    }

    for (let i = 0; i < courses_data.year2.sp5.course.length; i++) {
      // search course in year2 sp5
      if (courses_data.year2.sp5.course[i].id === courseID) {
        //console.log(courses_data.year2.sp5.course[i]);
        return courses_data.year2.sp5.course[i];
      }
    }
    for (let i = 0; i < courses_data.year3.sp2.course.length; i++) {
      // search course in year3 sp2
      if (courses_data.year3.sp2.course[i].id === courseID) {
        //console.log(courses_data.year3.sp2.course[i]);
        return courses_data.year3.sp2.course[i];
      }
    }

    for (let i = 0; i < courses_data.year3.sp5.course.length; i++) {
      // search course in year3 sp5
      if (courses_data.year3.sp5.course[i].id === courseID) {
        //console.log(courses_data.year3.sp5.course[i]);
        return courses_data.year3.sp5.course[i];
      }
    }

    // case for no match in the general courses
    return null;
  }

  function displayAlumniUI() {
    // display UI for Alumni information with the related event
    // source data is came from "src\assets\lbvt.json"
    const alumniData = lbvt_data.repository.alumnus;
    var courseUI = window.open("", "_blank", "width=600, height=400");
    courseUI.document.write("<html><head><title>Alumni</title>");
    courseUI.document.write(
      "<style>.container{ border: 2px solid #000; padding: 10px;border-radius: 5px;background-color: #fff;margin-top: 100px;margin-left: 50px;position: relative;justify-content: center;} a:link { color: blue }"
    );
    courseUI.document.write(
      "a:visited { color: gray } a:hover { color: lightseagreen } a:active { color: gray }</style>"
    );
    courseUI.document.write("</head><body>");
    courseUI.document.write("<div class ='container'>");

    courseUI.document.write("<h2>Alumni</h2>");
    if ("alumni" in alumniData) {
      for (let i = 0; i < alumniData.alumni.length; i++) {
        courseUI.document.write("<p>" + alumniData.alumni[i].name + "<br/>");
        courseUI.document.write(
          "<a href=" +
            alumniData.alumni[i].url +
            ' target="_blank" rel="noopener noreferrer">Link</a></p>'
        );
      }
    } else {
      courseUI.document.write("<p>Oops, There is no data for Alumni.<p/>");
    }
    courseUI.document.write("</div>");
    courseUI.document.write("</body></html>");
  }

  function displayIndustryUI() {
    // display UI for industry information with the related event
    // source data is came from "src\assets\lbvt.json"
    const industryData = lbvt_data.repository.industries;
    var courseUI = window.open("", "_blank", "width=600, height=400");
    courseUI.document.write("<html><head><title>Industry</title>");
    courseUI.document.write(
      "<style>.container{ border: 2px solid #000; padding: 10px;border-radius: 5px;background-color: #fff;margin-top: 100px;margin-left: 50px;position: relative;justify-content: center;} a:link { color: blue }"
    );
    courseUI.document.write(
      ".Partner{ margin-top: 20px;margin-left: 50px; } .Associations{margin-top: 20px;margin-left: 50px;}"
    );
    courseUI.document.write(
      "a:visited { color: gray } a:hover { color: lightseagreen } a:active { color: gray }</style>"
    );
    courseUI.document.write("</head><body>");
    courseUI.document.write("<div class ='container'>");

    courseUI.document.write("<h2><b>Industry</b></h2>");
    courseUI.document.write(
      "<p>You can check partner companies from list below.</p>"
    );
    if ("partner" in industryData) {
      courseUI.document.write("<h3><b>Partner companies</b></h3>");
      courseUI.document.write("<div class = Partner>");
      for (let i = 0; i < industryData.partner.length; i++) {
        // display all partner companies which are on the Uni SA's web page
        if (industryData.partner[i].url != null) {
          // display all partners url links, Only if we could found the page.
          courseUI.document.write(
            "<p>" +
              "Name: <a href=" +
              industryData.partner[i].url +
              ' target="_blank" rel="noopener noreferrer">' +
              industryData.partner[i].name +
              "</a></p>"
          );
        } else {
          courseUI.document.write(
            "<p>" + "Name: " + industryData.partner[i].name + "<br/>"
          );
        }
      }
      courseUI.document.write("</div>");
      courseUI.document.write("<h3><b>Related associations</b></h3>");
      courseUI.document.write("<div class = Associations>");
      for (let i = 0; i < industryData.associations.association.length; i++) {
        // display the related associations for the program

        if (industryData.associations.association[i].url != null) {
          courseUI.document.write(
            "<p>Name: <a href=" +
              industryData.associations.association[i].url +
              ' target="_blank" rel="noopener noreferrer">' +
              industryData.associations.association[i].name +
              "</a></p>"
          );
        } else {
          courseUI.document.write(
            "<p>" +
              "Name: " +
              industryData.associations.association[i].name +
              "</p>"
          );
        }
      }
      courseUI.document.write("</div>");
    } else {
      courseUI.document.write("<p>Oops, There is no data for Industry.<p/>");
    }
    courseUI.document.write("</div>");
    courseUI.document.write("</body></html>");
  }

  function displayWelcomeUI() {
    // display welcome message and youtube videos which are related to LBVT in UniSA's youtube account
    // source data is came from "src\assets\lbvt.json"
    const welcomeData = lbvt_data.repository.welcome;
    var courseUI = window.open("", "_blank", "width=800, height=650");
    courseUI.document.write(
      '<html><head><title>Welcome</title><meta http-equiv="Permissions-Policy" content="*">'
    );
    courseUI.document.write(
      "<style>.container{ border: 2px solid #000; padding: 10px;border-radius: 5px;background-color: #fff;margin-top: 100px;margin-left: 50px;position: relative;justify-content: center;} a:link { color: blue }"
    );
    courseUI.document.write(".Videos{ margin-top: 20px; margin-left: 50px;}");
    courseUI.document.write(
      "a:visited { color: gray } a:hover { color: lightseagreen } a:active { color: gray }</style>"
    );
    courseUI.document.write("</head><body>");
    courseUI.document.write("<div class ='container'>");

    courseUI.document.write("<h2>Welcome to " + welcomeData.name + "</h2>");
    courseUI.document.write(
      "<p>You can check videos that are related to the program.</p>"
    );

    courseUI.document.write("<h3>Video</h3>");
    courseUI.document.write("<div class ='Videos'>");
    if ("videos" in welcomeData) {
      // need to change here after modify py code
      for (let i = 0; i < welcomeData.videos.video.length; i++) {
        courseUI.document.write(
          "<p><b>" + welcomeData.videos.video[i].name + "</b></p>"
        );
        courseUI.document.write(
          '<iframe width="560" height="315" src="' +
            welcomeData.videos.video[i].embd +
            '" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
        );
        //courseUI.document.write("<p>Your browser doesn't support HTML video. Here is a <a href="+ welcomeData.videos.video[i].url + ">link to the video</a> instead.</p>");
      }
    } else {
      courseUI.document.write(
        "<p>Oops, There is no data for video to display.</p>"
      );
    }
    courseUI.document.write("</div>");
    courseUI.document.write("</div>");
    courseUI.document.write("</body></html>");
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
