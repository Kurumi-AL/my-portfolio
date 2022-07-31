import React from "react";
import logo from "./logo192.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";

import "./reactNavbar.css";

const ReactNavbar = () => {
  return (
    <Navbar className="color-nav" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">Kurumi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <li className="nav-item">
              <Link
                href="#aboutme"
                to="aboutme"
                activeClass="active"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="#portfolio"
                to="portfolio"
                activeClass="active"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="#contact"
                to="contact"
                activeClass="active"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ReactNavbar;
