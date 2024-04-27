import React from "react";

const Button = ({ onClick, className, content }) => (
  <button className={className} onClick={onClick}>
    {content}
  </button>
);

export default Button;
