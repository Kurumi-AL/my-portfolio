import React, { useEffect, useState } from "react";
import { useWindowWidth } from "../landingPage/landingPage";
import desktopImage from "./landing_page_background_desktop.png";
import mobileImage from "./landing_page_background_mobile.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import flowerImage from "./landingPage_flower.PNG";
import Aos from "aos";

import "./showcase.css";
import "aos/dist/aos.css";

const Showcase = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);

  return (
    <div className="showcase">
      <Container className="align-middle container">
        <Row className="showcase_row ">
          <Col sm>
            <img src={flowerImage} className="img-responsive" width="90%"></img>
          </Col>
          <Col sm data-aos="fade-left">
            <h1 className="responsive-font">Hello! I'm</h1>
            <h1 className="responsive-font bold">Kurumi Lawrence</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Showcase;
