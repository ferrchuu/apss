import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Container, Row, Col, Card } from "react-bootstrap";
import "../components/Vieja.css";
import vieja from "../images/vieja.jpeg";
import velas from "../images/velas.jpg";

function Vieja() {
  return (
    <div
      style={{
        backgroundImage: `url(${velas})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100vw",
      }}
    >
      <Container fluid="xxl">
        <Row>
          <Col className="descontainer">
            <Card className="special-card">
              <Card.Body>
                <Card.Title>
                  No sufras más por su ausencia, no más llanto.
                </Card.Title>
                <Card.Text>
                  Realizamos trabajos para que en cuestión de días vuelva de
                  rodillas a tus pies, te ame y jamás se aleje de su lado.
                </Card.Text>
                <Card.Text>
                  Tienes tu solución en frente más de 15 años de trayectoria.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xxl={4}>
            <Image
              src={vieja}
              roundedCircle
              className="viejita"
              height="auto"
              width="auto"
            />
          </Col>
          <Col xxl={{ span: 4, offset: 4 }} className="rightcontainer">
            <Card border="dark" className="fotosubtitle">
              <Card.Text>
                Soy María Victoria Donatto, si estas pasando por una mala
                situación en tu vida no dudes en comunicarte cuanto antes, puedo
                ayudarte.
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Vieja;
