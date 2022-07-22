import React, { useState, useEffect } from "react";
import Contact from "../../elements/contact/contact";
import Navbar from "../../elements/navbar/navbar";
import AboutMe from "../aboutMe/aboutMe";
import Portfolio from "../portfolio/portfolio";
import Showcase from "../showcase/showcase";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Showcase />
      <AboutMe />
      <Portfolio />
      <Contact />
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
