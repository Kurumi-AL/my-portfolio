import React, { useState, useEffect } from "react";
import ContactForm from "../../elements/contact/contactForm";
import ReactNavbar from "../../elements/navbar/reactNavbar";
import AboutMe from "../aboutMe/aboutMe";
import Portfolio from "../portfolio/portfolio";
import Showcase from "../showcase/showcase";
import BackToTopButton from "../../elements/backToTopButton/backToTopButton";

const LandingPage = () => {
  return (
    <React.Fragment>
      <div>
        <ReactNavbar />
        <Showcase />
        <AboutMe />
        <Portfolio />
        <ContactForm />
        <BackToTopButton />
      </div>
    </React.Fragment>
  );
};

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      // Clean up
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return windowWidth;
};

export default LandingPage;
