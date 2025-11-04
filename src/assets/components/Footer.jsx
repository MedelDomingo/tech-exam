import React from "react";

import "./Footer.scss";
import Section from "./Section";

import footerLogo from "../images/footer-logo.png";

const Footer = () => {
  return (
    <Section className="footer-section__wrapper">
      <div className="inner-contents__wrapper">
        <div className="contents">
          <h3>JOIN THE D1 CLUB</h3>
          <p>Subscribe for deals, and tips on mens skincare</p>
        </div>
        <div className="footer-logo">
          <img src={footerLogo} alt="Footer d1 logo" />
        </div>
      </div>
      <form action="submit">
        <input type="email" id="email" name="email" />
        <button>Submit</button>
      </form>

      <div className="socials-wrapper"></div>
    </Section>
  );
};

export default Footer;
