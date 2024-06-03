import React, { useState, useEffect } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function CameraSlider({ camera, setCamera }) {
  const [distance, setDistance] = useState(camera ? camera.position.y : 60);

  useEffect(() => {
    if (camera) {
      setDistance(camera.position.y);
    }
  }, [camera]);

  const handleSliderChange = (event) => {
    const newDistance = parseFloat(event.target.value);
    setDistance(newDistance);
    if (camera) {
      camera.position.y = newDistance;
      camera.updateProjectionMatrix();
      setCamera({ ...camera });
    }
  };

  const handleZoomIn = () => {
    const newDistance = Math.max(1, distance - 1);
    setDistance(newDistance);
    if (camera) {
      camera.position.y = newDistance;
      camera.updateProjectionMatrix();
      setCamera({ ...camera });
    }
  };

  const handleZoomOut = () => {
    const newDistance = Math.min(50, distance + 1);
    setDistance(newDistance);
    if (camera) {
      camera.position.y = newDistance;
      camera.updateProjectionMatrix();
      setCamera({ ...camera });
    }
  };

  return (
    <div className="slider-container">
      <Button className="btn-control" onClick={handleZoomIn}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
      <input
        type="range"
        min="1"
        max="50"
        step="0.1"
        value={distance}
        onChange={handleSliderChange}
        className="slider"
      />
      <Button className="btn-control" onClick={handleZoomOut}>
        <FontAwesomeIcon icon={faMinus} />
      </Button>
    </div>
  );
}

export default CameraSlider;
