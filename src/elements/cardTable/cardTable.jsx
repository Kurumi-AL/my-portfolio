import React, { useState, useEffect } from "react";
import { getProjects } from "./../../firebase/projectService";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Popup from "./../popup/popup";
import Aos from "aos";

import "./cardTable.css";
import "aos/dist/aos.css";

const CardTable = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);

  // Get data from Firestore
  useEffect(() => {
    async function fetchData() {
      const projects = await getProjects();
      projects.sort((a, b) => {
        return b.id - a.id;
      });
      setProjects(projects);
    }
    fetchData();

    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);

  // Change the status of modalOpen
  const toggleModal = (project) => {
    setModalOpen(!modalOpen);
    setSelectedProject(project);
  };

  return (
    <Container className="portfolio-projects">
      <Row>
        {projects.map((project) => (
          <Col
            md
            key={project.title}
            className="portfolio-project-card"
            data-aos="flip-left"
          >
            <Card onClick={() => toggleModal(project)} className="hvr-grow">
              <Card.Img variant="top" src={project.img[1]} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.short_description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Popup
        show={modalOpen}
        onClose={toggleModal}
        selectedItem={selectedProject}
      />
    </Container>
  );
};

export default CardTable;
