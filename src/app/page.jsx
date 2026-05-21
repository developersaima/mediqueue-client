import React from "react";
import HeroSlider from "../components/Banner";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import FeauturedTutor from "../components/FeauturedTutor";

const Home = () => {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <FeauturedTutor></FeauturedTutor>
      <WhyChooseUs></WhyChooseUs>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
