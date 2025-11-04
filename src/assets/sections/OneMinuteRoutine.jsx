import React from "react";

import "./OneMinuteRoutine.scss";

import backgroundImage from "../images/one-minute.jpg";
import checkedMark from "../images/check.png";

const OneMinuteRoutine = () => {
  return (
    <>
      <section
        className="one-routine__wrapper"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="content-wrapper">
          <h2>“The one minute routine that will save your face”</h2>
        </div>
      </section>
      <div className="one-minute-list__wrapper">
        <ul>
          <li>
            <img src={checkedMark} alt="check-mark" />
            No prescription Required
          </li>
          <li>
            <img src={checkedMark} alt="check-mark" />
            All-natural ingredients
          </li>
          <li>
            <img src={checkedMark} alt="check-mark" />
            Formulated by doctors & PHDs
          </li>
          <li>
            <img src={checkedMark} alt="check-mark" />
            100% risk-free returns
          </li>
          <li>
            <img src={checkedMark} alt="check-mark" />
            No prescription Required
          </li>
        </ul>
      </div>
    </>
  );
};

export default OneMinuteRoutine;
