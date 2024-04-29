import React, { useEffect, useRef, useState } from "react";

import * as Three from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ControlPanel from "./ControlPanel";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
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
        case "year1_sp2_building_1":
          console.log("year1_sp2_building_1 clicked");
          break;
        case "year1_sp2_building_2":
          console.log("year1_sp2_building_2 clicked");
          break;
        case "year1_sp2_building_3":
          console.log("year1_sp2_building_3 clicked");
          break;
        case "year1_sp2_building_4":
          console.log("year1_sp2_building_4 clicked");
          break;
        // more ifs here
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
      />
    </div>
  );
};

export default Home;
