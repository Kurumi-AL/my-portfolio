import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./components/aboutMe/aboutMe";
import NotFound from "./components/notFound/notFound";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./elements/contact/contact";
import LandingPage from "./components/landingPage/landingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
