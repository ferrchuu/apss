import React from "react";
import { Figure } from "react-bootstrap";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import amarre from "../images/amarre.png";
import couple from "../images/couple.jpg";
import "../components/Header.css";

function Header() {
  return (
    <div
      className="amarr"
      style={{
        backgroundImage: `url(${couple})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "99vw",
        height: "80vh",
      }}
    >
      <Figure>
        <Figure.Image src={amarre} alt="171x180" width={320} height={320} />
        <Figure.Caption className="subtitle">
          ¡Si quiere solucionar algún problema amoroso comuníquese conmigo, con
          gusto le ayudare!
        </Figure.Caption>
      </Figure>
    </div>
  );
}

export default Header;
