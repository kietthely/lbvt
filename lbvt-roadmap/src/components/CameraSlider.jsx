import React, { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
function CameraSlider({ camera, setCamera }) {
  const [distance, setDistance] = useState(camera.position.z);

  const handleFovChange = (event) => {
    const newDistance = 100 - event.target.value;
    setDistance(newDistance);
    if (camera) {
      const newCamera = { ...camera };
      newCamera.position.y = newDistance;
      setCamera(newCamera);
    }
  };

  const handleZoomIn = () => {
    if (camera) {
      camera.position.y = Math.max(30, camera.position.y - 1);
    }
  };

  const handleZoomOut = () => {
    if (camera) {
      camera.position.y = Math.min(90, camera.position.y + 1);
    }
  };

  return (
    <div>
      <Button onClick={handleZoomOut}>
        <FontAwesomeIcon icon={faMinus} />
      </Button>
      <input
        type="range"
        min="30"
        max="90"
        value={100 - camera.position.y}
        onChange={handleFovChange}
      />
      <Button onClick={handleZoomIn}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </div>
  );
}

export default CameraSlider;
