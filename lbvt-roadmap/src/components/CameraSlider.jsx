import React, { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
function CameraSlider({ camera, setCamera }) {
  const [distance, setDistance] = useState(camera.position.z);

  const handleFovChange = (event) => {
    const newZoom = 5 - event.target.value / 20;
    setDistance(newZoom);
    if (camera) {
      camera.zoom = newZoom;
      camera.updateProjectionMatrix();
      setCamera({ ...camera });
    }
  };

  const handleZoomIn = () => {
    if (camera) {
      camera.zoom = Math.max(1, camera.zoom - 0.1);
      camera.updateProjectionMatrix();
      setCamera({ ...camera });
    }
  };

  const handleZoomOut = () => {
    if (camera) {
      camera.zoom = Math.min(5, camera.zoom + 0.1);
      camera.updateProjectionMatrix();
      setCamera({ ...camera });
    }
  };

  return (
    <div className="slider-container">
      <Button className="btn-control" onClick={handleZoomOut}>
        <FontAwesomeIcon icon={faMinus} />
      </Button>
      <input
        type="range"
        min="1"
        max="125"
        value={camera.zoom}
        onChange={handleFovChange}
        className="slider"
      />
      <Button className="btn-control" onClick={handleZoomIn}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </div>
  );
}

export default CameraSlider;
