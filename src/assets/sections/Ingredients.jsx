import React from "react";

import "./Ingredients.scss";
import Section from "../components/Section";
import Buttons from "../shared/Buttons";

// Images
import ingridient_1 from "../images/ing-1.png";
import ingridient_2 from "../images/ing-2.png";
import ingridient_3 from "../images/ing-3.png";
import ingridient_4 from "../images/ing-4.png";
import ingridient_5 from "../images/ing-5.png";
import ingridient_6 from "../images/ing-6.png";

const ingredientsList = [
  {
    name: "Hyaluronic Acid",
    subHeading: "All Day Moisturizer",
    imgUrl: ingridient_1,
  },
  {
    name: "Niacinamide",
    subHeading: "All Day Moisturizer",
    imgUrl: ingridient_2,
  },
  {
    name: "Bamboo Charcoal",
    subHeading: "All Day Moisturizer",
    imgUrl: ingridient_3,
  },
  {
    name: "Centella Asiatica",
    subHeading: "Charcoal Cleanser",
    imgUrl: ingridient_4,
  },
  {
    name: "Rose Oil",
    subHeading: "Charcoal Cleanser",
    imgUrl: ingridient_5,
  },
  {
    name: "Bamboo Charcoal",
    subHeading: "Charcoal Cleanser",
    imgUrl: ingridient_6,
  },
];

const Ingredients = () => {
  return (
    <Section className="ingredients-class__wrapper">
      <h2>
        best-in-class <br />
        ingredients that work
      </h2>
      <Buttons text="FULL INGREDIENT LIST" src="#" className="ing-list-btn" />
      <ul>
        {ingredientsList.map((item, index) => {
          return (
            <li key={index}>
              <div className="inner-list-content__wrapper">
                <img src={item.imgUrl} alt={item.name} />
                <div className="list-content-wrapper">
                  <p className="text-heading">{item.name}</p>
                  <p className="text-sub-heading">{item.subHeading}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Ingredients;
