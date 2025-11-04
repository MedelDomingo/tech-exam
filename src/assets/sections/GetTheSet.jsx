import React from "react";
import "./GetTheSet.scss";
import Buttons from "../shared/Buttons";

import Section from "../components/Section";

import checkedMark from "../images/check.png";

import getTheSetImg from "../images/get-the-set.png";

const GetTheSet = () => {
  return (
    <Section className="get-the-set__wrapper">
      <div className="inner-content__wrapper">
        <p className="start-text">Start your 1 minute routine</p>
        <h2>GET THE SET</h2>
        <p>
          Experience the ultimate simplicity and effectiveness with our complete
          skincare set. Designed for men who want great skin without the hassle,
          our set includes everything you need for a daily routine that takes
          just one minute.
        </p>
        <ul className="content-list">
          <li>
            <img src={checkedMark} alt="check-mark" />
            <p>$10 Off Each Pouch</p>
          </li>
          <li>
            <img src={checkedMark} alt="check-mark" />
            <p>Never Run Out</p>
          </li>
          <li>
            <img src={checkedMark} alt="check-mark" />
            <p>No Commitment. Cancel Anytime</p>
          </li>
          <li>
            <img src={checkedMark} alt="check-mark" />
            <p>Pause, Delay, or Change Frequency</p>
          </li>
        </ul>
        <Buttons
          text="Add to cart — $58.99"
          className="btn-add-cart"
          subtext="true"
          spantext="$10.99"
        />
      </div>
      <div className="img-wrapper">
        <img src={getTheSetImg} alt="Get The Set Image " />
      </div>
    </Section>
  );
};

export default GetTheSet;
