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

function App() {
  return (
    <div className="w-screen min-h-screen">
      <Navbar />
      <main className="w-full overflow-hidden">
        <HeroSection />
        <Features />
        <TalentTradeCycle />
        <Section4 />
        <Contact />
        <Footer />
      </main>
      <div className="w-full bg-purple-500 h-12 -z-20"></div>
    </div>
  );
}

export default App;
