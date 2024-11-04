import React from "react";
import { Features, HeroSection, TalentTradeCycle } from "../../components";
import WaitListSection from "../../components/WaitListSection";
import WaitingCard from "../../components/WaitingCard";
import { Contact } from "lucide-react";
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
