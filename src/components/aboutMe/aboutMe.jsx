import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useWindowWidth } from "../landingPage/landingPage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import desktopImage from "./aboutMe_background_desktop.png";
import mobileImage from "./aboutMe_background_mobile.png";
import KurumiResume from "./Kurumi-Resume.pdf";

import "./aboutMe.css";

const AboutMe = () => {
  const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

  return (
    <React.Fragment>
      <div
        id="aboutme"
        className="aboutMe"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <Container>
          <Row className="aboutMe-row">
            <Col xs={12} md={8} className="aboutMe-firstCol">
              <div className="aboutMe-title">
                <h1>About Me</h1>
              </div>
              <div className="aboutMe-content">
                <h5 className="aboutMe-content-intro">
                  I was born and raised in Japan. <br />I came to the US in 2019
                  to study abroad which had been one of my biggest dreams.{" "}
                  <br /> I like to cook, bake, read, and workout during my free
                  time.
                </h5>
                <h5 className="aboutMe-content-info">
                  <b>Education:</b> Bachelor's in Computer Science at Brigham
                  Young University (class of 2023)
                </h5>
                <h5 className="aboutMe-content-info">
                  <b>Skills:</b> React.js, Firebase, HTML, CSS, Bootstrap,
                  JavaScript, Java
                </h5>
                <h5 className="aboutMe-content-info">
                  <b>Activities:</b> Women in STEM, Women in Computer Science
                </h5>
                <h5 className="aboutMe-content-info">
                  <b>Projects:</b> Please check the Portfolio section below.
                </h5>
                {/* <Link to={KurumiResume} target="_blank" download>
                  Download Kurumi's Resume
                </Link> */}
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
