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
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HeroSection />
              <Features />
              <TalentTradeCycle />
              <TeamSection />
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/about-us"
          element={
            <Layout>
              <AboutUs />
              <TeamSection />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
