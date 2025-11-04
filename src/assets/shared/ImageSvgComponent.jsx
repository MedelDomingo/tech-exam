import React from "react";

const ImageSvgComponent = (props) => {
  return (
    <svg
      className={`icon icon-${props.name}`}
      fill={props.color}
      width={props.size}
      height={props.size}
      xmlns={props.src}
    >
      <use xlinkHref={`${props.Icons}#icon-${props.name}`} />
    </svg>
  );
};

export default ImageSvgComponent;
