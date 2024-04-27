import React from "react";
import Button from "./Button";

const ControlPanel = ({
  moveCameraLeft,
  moveCameraRight,
  moveCameraTop,
  moveCameraBottom,
}) => (
  <div style={{ position: "absolute", top: "10px", right: "10px" }}>
    <Button onClick={moveCameraLeft} className="btn-control">
      Left
    </Button>
    <Button onClick={moveCameraRight} className="btn-control">
      Right
    </Button>
    <Button onClick={moveCameraTop} className="btn-control">
      Up
    </Button>
    <Button onClick={moveCameraBottom} className="btn-control">
      Down
    </Button>
  </div>
);

export default ControlPanel;
