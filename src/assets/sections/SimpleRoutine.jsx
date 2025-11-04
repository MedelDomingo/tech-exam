import React from "react";
import Section from "../components/Section";

import "./SimpleRoutine.scss";

import simpleRoutineImg from "../images/simple-routine-img.png";
import cuttingEdge from "../images/cutting-edge.png";
import scienceBacked from "../images/science-backed.png";
import dematological from "../images/dematologically.png";
import checkedMark from "../images/check.png";

const SimpleRoutine = () => {
  return (
    <Section className="simple-routine__wrapper">
      <div className="title-wrapper">
        Just <span>one minute</span> a day will make your skin look healthier
        and younger
      </div>
      <div className="main-content__wrapper">
        <div className="inner-contents__wrapper">
          <h2>A simple routine that works</h2>
          <p>
            Say goodbye to complicated skincare routines. Our mens' skincare
            line is designed for simplicity and effectiveness. With our
            lightweight formulas, you can achieve healthier and younger-looking
            skin with minimal effort. Perfect for guys who are new to skincare
            or just want to keep it simple.
          </p>
          <ul>
            <li>
              <img src={checkedMark} alt="check-mark" />
              Lightweight formulas
            </li>
            <li>
              <img src={checkedMark} alt="check-mark" />
              Easy to use formats
            </li>
            <li>
              <img src={checkedMark} alt="check-mark" />
              Clean Ingredients
            </li>
            <li>
              <img src={checkedMark} alt="check-mark" />
              Everything you need, nothing you don’t
            </li>
          </ul>
        </div>
        <div className="img-wrapper">
          <img src={simpleRoutineImg} alt="Mens Skin Care" />
        </div>
      </div>

      <div className="card-list-wrapper">
        <ul>
          <li>
            <img src={cuttingEdge} alt="Cutting Edge Technology" />
            <p>Cutting-edge Korean Skincare Technology</p>
          </li>
          <li>
            <img src={scienceBacked} alt="Science-backed Ingredients" />
            <p>Science-backed Ingredients</p>
          </li>
          <li>
            <img src={dematological} alt="Dematologically Tested" />
            <p>Dematologically Tested</p>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default SimpleRoutine;

/* NOTE: this component can be re-usable but for the sake of the exam I will make it one section at a time */
