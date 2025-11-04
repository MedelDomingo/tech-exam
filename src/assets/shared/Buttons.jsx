import React from "react";

import "./Buttons.scss";

const Buttons = (props) => {
  return props.type === "button" ? (
    <button type="button">{props.buttonText}</button>
  ) : (
    <a
      className={`btn-primary ${props.className}`}
      href={props.src}
      aria-label={props.label}
    >
      {props.text}
    </a>
  );
};

export default Buttons;
