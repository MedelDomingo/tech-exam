import React from "react";

import Section from "../components/Section";

import clockImg from "../images/clock.png";
import step1Img from "../images/step-1.png";
import step2Img from "../images/step-2.png";
import step3Img from "../images/step-3.png";

import mosititurizer from "../images/mositurizer.png";
import clearnser from "../images/cleanser.png";
import stick from "../images/stick.png";

import "./HowD1Works.scss";

const stepsImages = [
  {
    id: 1,
    stepImg: step1Img,
    productImg: clearnser,
    details: "Wash your face with our Bamboo Charcoal Cleanser",
  },
  {
    id: 2,
    stepImg: step2Img,
    productImg: mosititurizer,
    details:
      "Apply a dime size amount of All Day Moisturizer evenly to your face",
  },
  {
    id: 3,
    stepImg: step3Img,
    productImg: stick,
    details:
      "Apply small amount of our Eye Cream under your eyes and around the sides",
  },
];

const HowD1Works = () => {
  return (
    <>
      <Section className="how-it-works__wrapper">
        <p>Heres how D1 works</p>
        <img src={clockImg} alt="Heres how d1 works" className="clock-img" />
        <h2>Just 1 minute a day</h2>
        <ul className="card-list-wrapper">
          {stepsImages.map((step, index) => {
            return (
              <li key={index}>
                <div className="step-badge">{step.id}</div>
                <img src={step.stepImg} alt={step.details} />
                <div className="product-wrapper">
                  <img src={step.productImg} alt={step.details} />
                  <p>{step.details}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Section>
    </>
  );
};

export default HowD1Works;
