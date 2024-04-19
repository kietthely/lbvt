import React from "react";
import * as Three from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
const Home = () => {
  var scene, camera, renderer, controls;
  scene = new Three.Scene();
  camera = new Three.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  renderer = new Three.WebGLRenderer();

  const loader = new GLTFLoader();
  loader.load("../assets/lbvt.glb", function (gltf) {});

  return <div></div>;
};

export default Home;
