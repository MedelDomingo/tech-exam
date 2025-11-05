import React from "react";

import "./Footer.scss";
import Section from "./Section";

import footerLogo from "../images/footer-logo.png";
import igSvg from "../images/svg/ig.svg";
import fbSvg from "../images/svg/fb.svg";
import tiktokSvg from "../images/svg/tiktok.svg";

const footerNav = [
  {
    navTitle: "Support",
    navChild: [
      {
        navText: "Support",
        navUrl: "#",
      },
      {
        navText: "Contact",
        navUrl: "#",
      },
      {
        navText: "FAQS",
        navUrl: "#",
      },
      {
        navText: "Account",
        navUrl: "#",
      },
      {
        navText: "Terms & Conditions",
        navUrl: "#",
      },
      {
        navText: "Privacy Policy",
        navUrl: "#",
      },
    ],
  },
  {
    navTitle: "Company",
    navChild: [
      {
        navText: "Company",
        navUrl: "#",
      },
      {
        navText: "Shop",
        navUrl: "#",
      },
      {
        navText: "Philosophy",
        navUrl: "#",
      },
    ],
  },
];

const Footer = () => {
  const OnClickHandler = (e) => {
    e.preventDefault();
  };
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
        <div className="input-wrapper">
          <input name="email" type="email" placeholder="Enter your email" />
        </div>
        <button type="submit">SUBMIT</button>
      </form>

      <div className="socials-wrapper">
        <ul>
          <li>
            <a href="#" onClick={OnClickHandler}>
              <img src={igSvg} alt="instagram" />
            </a>
          </li>
          <li>
            <a href="#" onClick={OnClickHandler}>
              <img src={tiktokSvg} alt="Tiktok" />
            </a>
          </li>
          <li>
            <a href="#" onClick={OnClickHandler}>
              <img src={fbSvg} alt="Facebook" />
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-nav__wrapper">
        <div className="nav-links__wrapper">
          {footerNav.map((navItem, index) => {
            return (
              <div className="nav-inner__wrapper" key={index}>
                <h3>{navItem.navTitle}</h3>
                <ul>
                  {navItem.navChild.map((item, childKey) => {
                    return (
                      <li key={childKey}>
                        <a href={item.navUrl}>{item.navText}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="note__wrapper">
          <p>
            These statements have not been evaluated by the Food and Drug
            Administration. This product is not inteded to diagnose, treat,
            cure, or prevent any disease. Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="copy-write__wrapper">
          <p>@D1 2025 — site by manufactur</p>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
