import React, { useState, useEffect } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../components/Boton.css";
import { RiWhatsappFill } from "react-icons/ri";
import axios from "axios";
import firebase from "../firebase";

function Boton() {
  const [cells, setCell] = useState([]);
  const ref = firebase.firestore().collection("cells");

  function getCells() {
    ref.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setCell(items);
    });
  }

  // eslint-disable-next-line
  useEffect(
    () => {
      // eslint-disable-next-line
      getCells();
      // eslint-disable-next-line
    },
    // eslint-disable-next-line
    []
  );

  function handleButtonClick() {
    // eslint-disable-next-line
    {
      cells.map((cell) =>
        axios.get("/").then((response) => {
          window.location.href = `https://api.whatsapp.com/send/?phone=${cell.numero}&text&app_absent=0`;
        })
      );
    }
  }

  return (
    <div className="boton-overlay">
      <Container fluid>
        <Row>
          <Col>
            <Button
              onClick={() => handleButtonClick()}
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

export default Boton;
