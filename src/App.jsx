import "./App.scss";

import Header from "./assets/components/Header";
import Banner from "./assets/components/Banner";
import SimpleRoutine from "./assets/sections/SimpleRoutine";
import HowD1Works from "./assets/sections/HowD1Works";
import ResultsYouCanSee from "./assets/sections/ResultsYouCanSee";
import OneMinuteRoutine from "./assets/sections/OneMinuteRoutine";
import DailyBenefits from "./assets/sections/DailyBenefits";
import Footer from "./assets/components/Footer";
import TwoColumnLayout from "./assets/sections/TwoColumnLayout";
import WhatOurFansSay from "./assets/sections/WhatOurFansSay";

// Images Import
import getTheSetImg from "./assets/images/get-the-set.png";
import Formulas from "./assets/sections/Formulas";
import Ingredients from "./assets/sections/Ingredients";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <SimpleRoutine />
      <HowD1Works />
      <ResultsYouCanSee />
      <OneMinuteRoutine />
      <DailyBenefits />
      <TwoColumnLayout
        className="get-the-set__wrapper"
        subHeading="Start your 1 minuite routine"
        heading="Get the set"
        contents="Omne animal, simul atque haec putat, ut labore et impetus quo voluptas nulla pariatur? at magnum periculum adiit in quo quaerimus."
        listItemValue={[
          "$10 Off Each Pouch",
          "Never Run Out",
          "No Commitment. Cancel Anytime",
          "Pause, Delay, or Change Frequency",
        ]}
        btnText="ADD TO CART — $58.99"
        spanText="$10.99"
        rightImg={getTheSetImg}
      />
      <Ingredients />
      <Formulas />
      <WhatOurFansSay heading="WHAT OUR FANS SAY" />
      <TwoColumnLayout
        className="two-column__wrapper"
        subHeading="Start your 1 minuite routine"
        heading="Get the set"
        contents="Omne animal, simul atque haec putat, ut labore et impetus quo voluptas nulla pariatur? at magnum periculum adiit in quo quaerimus."
        listItemValue={[
          "$10 Off Each Pouch",
          "Never Run Out",
          "No Commitment. Cancel Anytime",
          "Pause, Delay, or Change Frequency",
        ]}
        btnText="ADD TO CART — $58.99"
        rightImg={getTheSetImg}
      />
      <Footer />
    </>
  );
}

export default App;
