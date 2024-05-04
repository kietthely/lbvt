import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faSync,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const ControlPanel = ({
  moveCameraLeft,
  moveCameraRight,
  moveCameraTop,
  moveCameraBottom,
  resetCamera,
}) => (
  <div
    className="control-panel"
    style={{ position: "absolute", top: "10px", right: "10px" }}
  >
    <Button
      onClick={moveCameraLeft}
      className="btn-control"
      title="Move Camera Left"
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </Button>
    <Button
      onClick={moveCameraRight}
      className="btn-control"
      title="Move Camera Right"
    >
      <FontAwesomeIcon icon={faArrowRight} />
    </Button>
    <Button
      onClick={moveCameraTop}
      className="btn-control"
      title="Move Camera Up"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </Button>
    <Button
      onClick={moveCameraBottom}
      className="btn-control"
      title="Move Camera Down"
    >
      <FontAwesomeIcon icon={faArrowDown} />
    </Button>
    <Button onClick={resetCamera} className="btn-control" title="Reset Camera">
      <FontAwesomeIcon icon={faSync} />
    </Button>
  </div>
);

export default ControlPanel;
