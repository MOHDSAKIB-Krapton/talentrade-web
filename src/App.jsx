import { useState } from "react";

import {
  Navbar,
  HeroSection,
  Footer,
  Features,
  Contact,
  TalentTradeCycle,
  Section4,
} from "./components";
import { Skill } from "./assets";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1920px] min-h-screen mx-auto">
        <HeroSection />
        <Features />
        <TalentTradeCycle />
        <Section4 />
        <Contact />
        <Footer />
      </main>
      <div className="w-full bg-purple-500 h-12 -z-20"></div>
    </>
  );
}

export default App;
