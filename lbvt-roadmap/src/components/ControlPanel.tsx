import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faSync,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const ControlPanel = ({
  moveCameraLeft,
  moveCameraRight,
  moveCameraTop,
  moveCameraBottom,
  resetCamera,
}) => (
  <div className="control-panel">
    <Button
      onClick={moveCameraLeft}
      className="btn-control button3"
      title="Move Camera Left"
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </Button>
    <Button
      onClick={moveCameraRight}
      className="btn-control button2"
      title="Move Camera Right"
    >
      <FontAwesomeIcon icon={faArrowRight} />
    </Button>
    <Button
      onClick={moveCameraTop}
      className="btn-control button1"
      title="Move Camera Up"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </Button>
    <Button
      onClick={moveCameraBottom}
      className="btn-control button4"
      title="Move Camera Down"
    >
      <FontAwesomeIcon icon={faArrowDown} />
    </Button>
    <Button
      onClick={resetCamera}
      className="btn-control button5"
      title="Reset Camera"
    >
      <FontAwesomeIcon icon={faSync} />
    </Button>
  </div>
);

export default ControlPanel;
