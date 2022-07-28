import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Chip from "@mui/material/Chip";
import "./popup.css";
import BootstrapCarousel from "../carousel/bootstrapCarousel";

function Popup({ show, selectedItem, onClose }) {
  console.log("Popup: ", selectedItem);
  if (!selectedItem) return;

  return (
    <Modal
      // {...props}
      show={show}
      onHide={onClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {selectedItem.title}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col sm>
              <BootstrapCarousel />
            </Col>
            <Col sm>
              <div className="popup-info">
                <span>
                  <b>What is this for: </b>
                  {selectedItem.description}
                </span>
                <br />
                <span>
                  <b>Used skills: </b>
                  {selectedItem.skills.map((skill) => (
                    <Chip label={skill} variant="outlined" size="small" />
                  ))}
                </span>
                <br />
                <span>
                  <b>When: </b>
                  {selectedItem.date}
                </span>
                <br />
                <br />
                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  href={selectedItem.url}
                  variant="secondary"
                >
                  Demo
                </Button>
                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  href={selectedItem.github}
                  variant="secondary"
                >
                  Github
                </Button>
              </div>{" "}
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default Popup;
