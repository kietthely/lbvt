import React, { useState } from "react";

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

  return (
    <div className="control-buttons">
      <input
        type="range"
        min="1"
        max="75"
        value={fov}
        onChange={handleFovChange}
      />
    </div>
  );
}

export default ControlButtons;
