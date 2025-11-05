import React from "react";
import Section from "../components/Section";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeXmark } from "@fortawesome/free-solid-svg-icons";

import "./WhatOurFansSay.scss";

import wofsImage from "../images/wofs.jpg";
import playBtn from "../images/svg/playbutton.svg";
import Buttons from "../shared/Buttons";
import starsImg from "../images/stars.png";

const videoList = [
  {
    id: 1,
    imgUrl: wofsImage,
    name: "D1 Eye Cream",
    price: "$20.99",
  },
  {
    id: 2,
    imgUrl: wofsImage,
    name: "D1 Face Wash",
    price: "$20.99",
  },
  {
    id: 3,
    imgUrl: wofsImage,
    name: "D1 Complete Set",
    price: "$20.99",
  },
  {
    id: 4,
    imgUrl: wofsImage,
    name: "D1 Moisturizer",
    price: "$20.99",
  },
];

const WhatOurFansSay = (props) => {
  return (
    <Section className="wofs__wrapper">
      <h2>{props.heading}</h2>
      <ul className="cards-wrapper">
        {videoList.map((item, index) => {
          return (
            <li key={index}>
              <div className="list-inner__wrapper">
                <div className="img-wrapper">
                  <FontAwesomeIcon icon={faVolumeXmark} />
                  <img src={item.imgUrl} alt={item.name} />
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="play-btn"
                  >
                    <img src={playBtn} alt="Play Button" />
                  </a>
                </div>
                <div className="vid-details__wrapper">
                  <div className="text-content">
                    <div className="rating">
                      <img src={starsImg} alt="Star Rating" />
                    </div>
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
                  </div>
                  <Buttons
                    src="#"
                    className="wofs-add-btn"
                    text="ADD"
                    label="Add item"
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default WhatOurFansSay;
