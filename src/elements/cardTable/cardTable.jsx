import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import tasksImage from "./img/tasks01.png";
import Popup from "./../popup/popup";
import "./cardTable.css";
import { getProjects } from "./../../firebase/projectService";

const CardTable = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const projects = await getProjects();
      setProjects(projects);
    }
    fetchData();
  }, []);

  const toggleModal = (project) => {
    console.log("toggleModal was called: ", project);
    setModalOpen(!modalOpen);
    setSelectedProject(project);
  };

  return (
    <Container className="portfolio-projects">
      <Row>
        {projects.map((project) => (
          <Col md key={project.title} className="portfolio-project-card">
            <Card onClick={() => toggleModal(project)}>
              <Card.Img variant="top" src={project.img} />
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
