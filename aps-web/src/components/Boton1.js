import React, { Component } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../components/Boton.css";
import { RiWhatsappFill } from "react-icons/ri";
import axios from "axios";

export default class Boton extends Component {
  handleButtonClick = () => {
    axios.get("/").then((response) => {
      window.location.href = "https://wa.me/5493512407364";
    });
  };

  componentDidMount() {
    // Simple GET request using fetch
    fetch("https://people.googleapis.com/v1/{resourceName=people/me*}")
      .then((response) => response.json())
      .then((data) => this.setState({ totalReactPackages: data.total }));
  }
  render() {
    return (
      <div className="boton-overlay">
        <Container fluid>
          <Row>
            <Col>
              <Button
                onClick={this.handleButtonClick}
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
