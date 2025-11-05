import React, { useState, useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./OneMinuteRoutine.scss";

import backgroundImage from "../images/one-minute.jpg";
import checkedMark from "../images/check.png";

const OneMinuteRoutine = () => {
  // Use state to manage the current slidesToShow value
  const [slidesToShowSetting, setSlidesToShowSetting] = useState(1);

  const determineSlidesToShow = () => {
    if (window.innerWidth >= 1200) {
      return 4;
    }
    if (window.innerWidth >= 768) {
      return 2;
    }
    if (window.innerWidth >= 576) {
      return 2;
    }
    return 1; // Default Value for mobile
  };

  useEffect(() => {
    // Set the initial value on mount
    setSlidesToShowSetting(determineSlidesToShow());

    // Add event listener for window resize
    const handleResize = () => {
      setSlidesToShowSetting(determineSlidesToShow());
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slideSettings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: slidesToShowSetting,
    slidesToScroll: 1,
    mobileFirst: true,
  };
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
