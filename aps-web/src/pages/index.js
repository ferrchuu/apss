import React from "react";
import "../App.css";
import "bootstrap";
import Header from "../components/Header";
import { Container, Row } from "react-bootstrap";
import Vieja from "../components/Vieja";
import Testimonios from "../components/Testimonios";
import Boton from "../components/Boton";
import Escritos from "../components/Escritos";

const Home = () => {
  return (
    <div className="App">
      <Container fluid>
        <Boton></Boton>
        <header className="App-header">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Sofia"
          />
          <Row>
            <Header></Header>
          </Row>
        </header>
        <Row>
          <Vieja></Vieja>
        </Row>
        <Row>
          <Testimonios></Testimonios>
        </Row>
        <Row>
          <Escritos></Escritos>
        </Row>
        <Row>
          <div className="footer"> María Victoria Donatto</div>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
