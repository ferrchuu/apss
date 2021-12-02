import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import testimonio1 from "../images/testimonio1.jpeg";
import testimonio2 from "../images/testimonio2.jpeg";
import testimonio3 from "../images/testimonio3.jpeg";
import testimonio4 from "../images/testimonio4.jpeg";
import testimonio5 from "../images/testimonio5.jpeg";
import testimonio6 from "../images/testimonio6.jpeg";
import love from "../images/love.jpeg";
import "../components/Testimonios.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { AiFillHeart } from "react-icons/ai";

function Testimonios() {
  return (
    <div
      style={{
        backgroundImage: `url(${love})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100vw",
      }}
    >
      <Container fluid="xxl">
        <Row>
          <Col>
            <Carousel className="img-prop">
              <Carousel.Item>
                <Zoom>
                  <img
                    src={testimonio1}
                    alt="First slide"
                    className=" img-rescale"
                  />
                </Zoom>
              </Carousel.Item>
              <Carousel.Item>
                <Zoom>
                  <img
                    src={testimonio2}
                    alt="Second slide"
                    className=" img-rescale"
                  />
                </Zoom>
              </Carousel.Item>
              <Carousel.Item>
                <Zoom>
                  <img
                    src={testimonio3}
                    alt="Second slide"
                    className=" img-rescale"
                  />
                </Zoom>
              </Carousel.Item>
              <Carousel.Item>
                <Zoom>
                  <img
                    src={testimonio4}
                    alt="Second slide"
                    className=" img-rescale"
                  />
                </Zoom>
              </Carousel.Item>
              <Carousel.Item>
                <Zoom>
                  <img
                    src={testimonio5}
                    alt="First slide"
                    className=" img-rescale"
                  />
                </Zoom>
              </Carousel.Item>
              <Carousel.Item>
                <Zoom>
                  <img
                    src={testimonio6}
                    alt="First slide"
                    className=" img-rescale"
                  />
                </Zoom>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col className="rightcontainer">
            <h1 className="testimonio-sub">
              <AiFillHeart />
              ¡PERSONAS <br></br> QUE HAN <br></br> ENCONTRADO <br></br> EL
              AMOR!
              <AiFillHeart />
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Testimonios;
