import React from "react";

import "./Banner.scss";

import Section from "./Section";
import Buttons from "../shared/Buttons";

import bannerImg from "../images/banner-img.png";
import starsImg from "../images/svg/yellow-stars.svg";

const Banner = () => {
  return (
    <>
      <Section className="banner-section__wrapper">
        <div className="banner-heading__wrapper">
          <h1>Skincare for guys that aren’t into skincare</h1>
          <p>Try the One Minute Skincare Routine</p>
          <Buttons text="TRY TODAY!" className="btn-banner" />
          <div className="rating">
            <div className="star-wrapper">
              <img
                src={starsImg}
                className="stars-testi-img"
                alt="testimonials-stars"
              />
            </div>
            <div className="testimonial__wrapper">
              <p>“I love this stuff, it totally changed the game for me”</p>
              <div className="name-wrapper">
                <span>P.S</span>
                <p>PETER S.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="banner-img__wrapper">
          <img src={bannerImg} alt="banner-image" />
        </div>
      </Section>
    </>
  );
};

export default Banner;
