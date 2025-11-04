import "./App.scss";
import Header from "./assets/components/Header";
import Banner from "./assets/components/Banner";
import SimpleRoutine from "./assets/sections/SimpleRoutine";
import HowD1Works from "./assets/sections/HowD1Works";
import ResultsYouCanSee from "./assets/sections/ResultsYouCanSee";
import OneMinuteRoutine from "./assets/sections/OneMinuteRoutine";
import DailyBenefits from "./assets/sections/DailyBenefits";
import GetTheSet from "./assets/sections/GetTheSet";

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
      <GetTheSet />
    </>
  );
}

export default App;
