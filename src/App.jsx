import { HeroSection, Features, Contact, TalentTradeCycle } from "./components";
import AboutUs from "./components/AboutUs";
import TeamSection from "./components/TeamSection";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layout";
import FeaturesScreen from "./components/FeatureScreen";
import FAQuestions from "./components/FAQ";
import MainSection1 from "./components/Extra";

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
              <Contact />
              <FAQuestions />
              {/* <MainSection1 /> */}
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
        <Route
          path="/features"
          element={
            <Layout>
              <FeaturesScreen />
            </Layout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
