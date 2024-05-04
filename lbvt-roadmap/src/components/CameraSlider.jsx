import React, { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
function ControlButtons({ camera }) {
  const [fov, setFov] = useState(camera.fov);

  const handleFovChange = (event) => {
    const newFov = event.target.value;
    setFov(newFov);
    if (camera) {
      camera.fov = newFov;
      camera.updateProjectionMatrix();
    }
  };

  const handleZoomIn = () => {
    const newFov = Math.max(10, fov - 1);
    setFov(newFov);
    if (camera) {
      camera.fov = newFov;
      camera.updateProjectionMatrix();
    }
  };

  const handleZoomOut = () => {
    const newFov = Math.min(100, fov + 1);
    setFov(newFov);
    if (camera) {
      camera.fov = newFov;
      camera.updateProjectionMatrix();
    }
  };

  return (
    <div>
      <Button onClick={handleZoomOut}>
        <FontAwesomeIcon icon={faMinus} />
      </Button>
      <input
        type="range"
        min="10"
        max="100"
        value={fov}
        onChange={handleFovChange}
      />
      <Button onClick={handleZoomIn}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </div>
  );
}

export default ControlButtons;
