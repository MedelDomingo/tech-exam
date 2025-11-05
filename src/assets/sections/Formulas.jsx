import React from "react";
import Section from "../components/Section";

import "./Formulas.scss";

import charcoalFaceWashImg from "../images/charcoalfacewash.png";
import moisturizerImg from "../images/moisturizer.png";
import eyeStickImg from "../images/eye-stick.png";
import starsImg from "../images/svg/stars-dark.svg";

const testimonialList = [
  {
    text: "“The testosterone support my daily regimine has needed for ages! I haven’t felt this young in years.”",
    name: "Eric Trexler",
    initials: "ET",
    occupation: "Men’s Wellness Influencer",
  },
  {
    text: "“The testosterone support my daily regimine has needed for ages! Thanks Joymode, I will definitely be renewing my subscription”",
    name: "Ben Steelheart",
    initials: "BS",
    occupation: "Ph.D., Human Movement Science",
  },
  {
    text: "“I dont miss a day without it now. This is the best stuff on the market for sure!”",
    name: "Harrison Rockwell",
    initials: "HR",
    occupation: "Men’s Wellness Influencer",
  },
];

const Formulas = () => {
  return (
    <Section className="formula__wrapper">
      <div className="heading__wrapper">
        <p className="innerheading-yellow">Just 1 minute a day</p>
        <h2>THREE PERFECT FORMULAS</h2>
        <p className="sub-heading">
          A <span>game changer</span> for your skin
        </p>
      </div>

      <ul className="product-list__wrapper">
        <li>
          <div className="text-content">
            <h3>Charcoal face Wash</h3>
            <p>
              Omne animal, simul atque haec putat, ut labore et impetus quo
              voluptas nulla pariatur? at magnum periculum adiit in quo
              quaerimus.
            </p>
          </div>
          <img src={charcoalFaceWashImg} alt="Charcoal Face Wash" />
        </li>
        <li>
          <div className="text-content">
            <h3>All Day Face Moisturizer</h3>
            <p>
              Omne animal, simul atque haec putat, ut labore et impetus quo
              voluptas nulla pariatur? at magnum periculum adiit in quo
              quaerimus.
            </p>
          </div>
          <img src={moisturizerImg} alt="All Day Face Moisturizer" />
        </li>
        <li>
          <div className="text-content">
            <h3>daily eye cream</h3>
            <p>
              Omne animal, simul atque haec putat, ut labore et impetus quo
              voluptas nulla pariatur? at magnum periculum adiit in quo
              quaerimus.
            </p>
          </div>
          <img src={eyeStickImg} alt="Daily eye cream" />
        </li>
      </ul>

      <div className="testimonials__wrapper">
        <p className="heading-text">Here is what our customers say</p>
        <ul>
          {testimonialList.map((item, index) => {
            return (
              <li key={index}>
                <div className="rating">
                  <img src={starsImg} alt="Star Rating" />
                </div>
                <p>{item.text}</p>
                <div className="name-contents-wrapper">
                  <div className="initials">{item.initials}</div>
                  <div className="name-details__wrapper">
                    <h4>{item.name}</h4>
                    <p>{item.occupation}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};

export default Formulas;
