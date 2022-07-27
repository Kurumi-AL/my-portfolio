import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./components/aboutMe/aboutMe";
import NotFound from "./components/notFound/notFound";
import Portfolio from "./components/portfolio/portfolio";
import ContactForm from "./elements/contact/contactForm";
import LandingPage from "./components/landingPage/landingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./elements/footer/footer";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
