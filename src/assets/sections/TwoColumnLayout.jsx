import React from "react";
import "./TwoColumnLayout.scss";
import Buttons from "../shared/Buttons";

import Section from "../components/Section";

import checkedMark from "../images/check.png";

const TwoColumnLayout = (props) => {
  return (
    <Section className={`two-col__wrapper ${props.className}`}>
      <div className="inner-content__wrapper">
        <p className="start-text">{props.subHeading}</p>
        <h2>{props.heading}</h2>
        <p>{props.contents}</p>
        <ul className="content-list">
          {props.listItemValue.map((item, index) => {
            return (
              <li key={index}>
                <img src={checkedMark} alt="check-mark" />
                <p>{item}</p>
              </li>
            );
          })}
        </ul>
        <Buttons
          text={props.btnText}
          className="btn-add-cart"
          spanText={props.spanText}
        />
      </div>
      <div className="img-wrapper">
        <img src={props.rightImg} alt={props.altImage} />
      </div>
    </Section>
  );
};

export default TwoColumnLayout;
