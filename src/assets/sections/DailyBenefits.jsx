import React from "react";
import Section from "../components/Section";

import "./DailyBenefits.scss";

import lookFresherImg from "../images/look-frehser.png";
import preventAgingImg from "../images/prevent-aging.png";
import boostSkinImg from "../images/boost-skin.png";

const dailyBenefits = [
  {
    imgUrl: lookFresherImg,
    heading: "Look Fresher and More Confident",
    details:
      "Prevent and reduce fine lines and wrinkles that develop with dry skin as you age",
  },
  {
    imgUrl: preventAgingImg,
    heading: "Prevent Aging and Maintain Youthful Skin",
    details:
      "Prevent and reduce fine lines and wrinkles that develop with dry skin as you age",
  },
  {
    imgUrl: boostSkinImg,
    heading: "Boost Your Skin Health",
    details:
      "Prevent and reduce fine lines and wrinkles that develop with dry skin as you age",
  },
];

const DailyBenefits = () => {
  return (
    <Section className="daily-benefits__wrapper">
      <h2>Daily Benefits. Long-term Results</h2>
      <p>We started D1 beacuse....</p>
      <ul className="card-list__wrapper">
        {dailyBenefits.map((benefit, index) => {
          return (
            <li key={index}>
              <img src={benefit.imgUrl} alt={benefit.heading} />
              <div className="benefit-details">
                <h4>{benefit.heading}</h4>
                <p>{benefit.details}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default DailyBenefits;
