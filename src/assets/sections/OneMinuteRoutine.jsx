import React, { useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./OneMinuteRoutine.scss";

import backgroundImage from "../images/one-minute.jpg";
import checkedMark from "../images/check.png";

const slideSettings = {
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

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
          <Slider {...slideSettings}>
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
          </Slider>
        </ul>
      </div>
    </>
  );
};

export default OneMinuteRoutine;
