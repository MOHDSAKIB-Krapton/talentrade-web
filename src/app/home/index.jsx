import React from "react";
import {
  Contact,
  Features,
  HeroSection,
  TalentTradeCycle,
} from "../../components";
import WaitListSection from "../../components/WaitListSection";
import WaitingCard from "../../components/WaitingCard";
import FAQuestions from "../../components/FAQ";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <TalentTradeCycle />
      <WaitListSection />
      <WaitingCard />
      <Contact />
      <FAQuestions />
    </>
  );
};

export default Home;
