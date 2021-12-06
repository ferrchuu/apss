import React from "react";
import "./App.css";
import "bootstrap";
import Header from "./components/Header";
import { Container, Row } from "react-bootstrap";
import Vieja from "./components/Vieja";
import Testimonios from "./components/Testimonios";
import Boton from "./components/Boton";
import Escritos from "./components/Escritos";
import ReactGA from "react-ga";

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);
  const TRACKING_ID = "UA-214476434-1"; // YOUR_OWN_TRACKING_ID
  ReactGA.initialize('UA-214476434-1"', { standardImplementation: true });

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
}

export default App;
