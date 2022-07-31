import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "./bootstrapCarousel.css";

const BootstrapCarousel = ({ selectedProject }) => {
  return (
    <div>
      <div className="container-fluid">
        <Carousel className="pictures">
          <Carousel.Item style={{ height: "250px" }}>
            <img
              style={{ height: "250px" }}
              className="d-block w-100"
              src={selectedProject.img[0]}
            />
          </Carousel.Item>

          <Carousel.Item style={{ height: "250px" }}>
            <img
              style={{ height: "250px" }}
              className="d-block w-100"
              src={selectedProject.img[1]}
            />
          </Carousel.Item>

          <Carousel.Item style={{ height: "250px" }}>
            <img
              style={{ height: "250px" }}
              className="d-block w-100"
              src={selectedProject.img[2]}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default BootstrapCarousel;
