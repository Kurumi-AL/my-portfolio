import React, { useEffect, useState } from "react";
import { useWindowWidth } from "../landingPage/landingPage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import aboutMeImage from "./aboutMe_img.jpg";
import desktopImage from "./aboutMe_background_desktop.png";
import mobileImage from "./aboutMe_background_mobile.png";

import "./aboutMe.css";

const AboutMe = () => {
  const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

  return (
    <React.Fragment>
      <div className="aboutMe" style={{ backgroundImage: `url(${imageUrl})` }}>
        <Container>
          <Row className="aboutMe-row">
            <Col xs={12} md={8} className="aboutMe-firstCol">
              <div className="aboutMe-title">
                <h1>About Me</h1>
              </div>
              <div className="aboutMe-content">
                <h5>BS in Computer Science</h5>
              </div>
            </Col>
            <Col xs={6} md={4}></Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
