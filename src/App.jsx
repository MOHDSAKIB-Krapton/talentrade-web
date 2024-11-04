import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./app/home";
import Aboutus from "./app/aboutus";
import Features from "./app/features";
import Contactus from "./app/contact";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact-us" element={<Contactus />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
