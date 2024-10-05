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
import AboutUs from "./components/AboutUs";
import TeamSection from "./components/TeamSection";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <main className="w-full overflow-hidden">
        <HeroSection />
        <Features />
        <TalentTradeCycle />
        {/* <Section4 /> */}
        <AboutUs />
        <TeamSection />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
