import React from "react";

import ImageWebpComponent from "../shared/ImageWebpComponent";
import ImageSvgComponent from "../shared/ImageSvgComponent";
import Buttons from "../shared/Buttons";

import "./Header.scss";

import webpImage from "../images/d1-logo.webp";
import pngfallBack from "../images/d1-logo.png";
import cartImg from "../images/Bitmap.png";
import playImg from "../images/svg/playbutton.svg";

const Header = () => {
  return (
    <>
      <div className="free-shipping__wrapper">
        free shipping on us orders over $100
      </div>
      <section className="nav-bar__wrapper">
        <div className="hamburger-menu__wrapper">
          <div className="hamburger-menu">
            <button>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="logo-wrapper">
            <ImageWebpComponent
              sourcewebp={webpImage}
              fallbackImage={pngfallBack}
              description="d1-logo"
            />
          </div>
        </div>
        <div className="button-cart__wrapper">
          <img
            src={playImg}
            alt="play-icon-header"
            className="get-started-mobile-btn"
          />
          <Buttons
            src="#"
            label="go-to-cart-page"
            text="GET STARTED"
            className="go-to-cart"
          />
          <div className="cart">
            <a href="#">
              <span className="badge">1</span>
              <img src={cartImg} alt="cart" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
