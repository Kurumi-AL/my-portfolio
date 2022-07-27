import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col xs={6} className="footer-copyright vertical-center">
            <span className="span">
              <FontAwesomeIcon
                className="fontawesome-icon"
                icon={faCopyright}
              />
              2022 Copyright: Kurumi Lawrence
            </span>
          </Col>
          <Col xs={6} className="footer-icons vertical-center">
            <a href="https://www.linkedin.com/in/kurumi-lawrence/">
              <FontAwesomeIcon
                className="fontawesome-icon footer-icon fa-2x linkedin"
                icon={faLinkedin}
              />
            </a>
            <a href="https://github.com/Kurumi-AL">
              <FontAwesomeIcon
                className="fontawesome-icon footer-icon fa-2x github"
                icon={faGithub}
              />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
