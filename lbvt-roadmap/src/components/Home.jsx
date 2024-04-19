import React, { useEffect, useRef } from "react";
import * as Three from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Home = () => {
  const ref = useRef();

  useEffect(() => {
    var scene, camera, renderer;
    scene = new Three.Scene();
    camera = new Three.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    renderer = new Three.WebGLRenderer();

    const loader = new GLTFLoader();
    loader.load("/models/lbvt.glb", function (gltf) {
      scene.add(gltf.scene);

      const building = scene.getObjectByName("year1_sp2_building_1");
      if (building) {
        console.log(building.userData); // logs the custom properties
        console.log(building.userData.course_id); // logs the course_id (e.g. 1)
        // Access individual properties
        // console.log(building.userData.course_id);

        // etc.
      } else {
        console.log("Building not found");
      }
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    ref.current.appendChild(renderer.domElement);

    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={ref} />;
};

export default Home;
