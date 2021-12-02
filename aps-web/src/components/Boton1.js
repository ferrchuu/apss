import React, { Component } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../components/Boton.css";
import { RiWhatsappFill } from "react-icons/ri";

class Boton extends Component {
  render() {
    return (
      <div className="boton-overlay">
        <Container fluid>
          <Row>
            <Col>
              <Button
                className="buttom-color"
                size="lg"
                variant="success"
                type="button"
              >
                <RiWhatsappFill className="text-position" />
                ¡Comuníquese conmigo en cualquier momento!
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Boton;
