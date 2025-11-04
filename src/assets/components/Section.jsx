import React from "react";

import "./Section.scss";

const Section = (props) => {
  return (
    <>
      <section className={`section-wrapper ${props.className}`}>
        <div className="content-wrapper">{props.children}</div>
      </section>
    </>
  );
};

export default Section;
