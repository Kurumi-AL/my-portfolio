import React, { useEffect, useState } from "react";
import { useWindowWidth } from "../landingPage/landingPage";
import desktopImage from "./landing_page_background_desktop.png";
import mobileImage from "./landing_page_background_mobile.png";

import "./showcase.css";

const Showcase = () => {
  const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

  return (
    <div className="showcase" style={{ backgroundImage: `url(${imageUrl})` }}>
      {/* <div className="container d-flex align-items-center justify-content-center text-center h-100">
        <div className="text-white">
          <h1 className="m-2">Hi!</h1>
          <h1 className="m-2">I'm Kurumi Lawrence</h1>
        </div>
      </div> */}
    </div>
  );
};

export default Showcase;
