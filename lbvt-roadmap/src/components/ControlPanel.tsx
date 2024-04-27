import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const ControlPanel = ({
  moveCameraLeft,
  moveCameraRight,
  moveCameraTop,
  moveCameraBottom,
}) => (
  <div style={{ position: "absolute", top: "10px", right: "10px" }}>
    <Button onClick={moveCameraLeft} className="btn-control">
      <FontAwesomeIcon icon={faArrowLeft} />
    </Button>
    <Button onClick={moveCameraRight} className="btn-control">
      <FontAwesomeIcon icon={faArrowRight} />
    </Button>
    <Button onClick={moveCameraTop} className="btn-control">
      <FontAwesomeIcon icon={faArrowUp} />
    </Button>
    <Button onClick={moveCameraBottom} className="btn-control">
      <FontAwesomeIcon icon={faArrowDown} />
    </Button>
  </div>
);

export default ControlPanel;
