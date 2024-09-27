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
    <div className="w-full min-h-screen">
      <Navbar />
      <main className="w-full overflow-hidden">
        <HeroSection />
        <Features />
        <TalentTradeCycle />
        {/* <Section4 /> */}
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
