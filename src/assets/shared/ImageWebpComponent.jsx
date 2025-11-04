import React from "react";

const ImageWebpComponent = (props) => {
  return (
    <picture>
      {/* Source for WebP compatible browsers */}
      <source srcSet={props.sourcewebp} type="image/webp" />

      {/* Fallback for non-WebP compatible browsers */}
      <img src={props.fallbackImage} alt={props.description} type="image/png" />
    </picture>
  );
};

export default ImageWebpComponent;
