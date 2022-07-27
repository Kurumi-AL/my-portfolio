import React from "react";
import Carousel from "react-bootstrap/Carousel";

const BootstrapCarousel = () => {
  return (
    <div>
      <div className="container-fluid">
        <Carousel>
          <Carousel.Item style={{ height: "250px" }}>
            <img
              style={{ height: "250px" }}
              className="d-block w-100"
              src="/images/img02.jpg"
            />
          </Carousel.Item>

          <Carousel.Item style={{ height: "250px" }}>
            <img
              style={{ height: "250px" }}
              className="d-block w-100"
              src={"/images/img01.jpg"}
            />
          </Carousel.Item>

          <Carousel.Item style={{ height: "250px" }}>
            <img
              style={{ height: "250px" }}
              className="d-block w-100"
              src={"/images/img03.jpg"}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default BootstrapCarousel;
