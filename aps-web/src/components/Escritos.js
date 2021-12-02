import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Figure } from "react-bootstrap";
import fototest1 from "../images/fototest1.jpeg";
import fototest2 from "../images/fototest2.jpeg";
import fototest3 from "../images/fototest3.jpeg";
import fototest4 from "../images/fototest4.jpeg";
import "../components/Escritos.css";
import sunset from "../images/sunset.jpg";

function Escritos() {
  return (
    <div
      style={{
        backgroundImage: `url(${sunset})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100vw",
      }}
    >
      <Container xs={6} className="container-prop">
        <Row>
          <Col>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                src={fototest3}
                roundedCircle
              />
              <Figure.Caption className="txt">
                Buen día aquí Gerardo me encuentro en Conocoto, Quito, Ecuador.
                Paso a comentar brevemente mi historia, estaba teniendo
                conflictos con mi pareja y poco a poco la relación iba
                deteriorando día a día, mi esposa me pidió el divorcio algo
                terrorífico tenía días para dar mi respuesta en este tiempo me
                comunique con la señorita María Victoria comentando cada una de
                las causas, ella me tranquilizo, me trato como a un hijo fue ahí
                cuando decidí realizar un trabajo de 7 días ya devastado sin
                ganas de nada. Poco a poco de no creer comencé a sentirme mejor,
                mi esposa a hablar conmigo y luego decidimos romper lo del
                divorcio y aquí estamos juntos siendo felices esperando nuestro
                tercer hijo estoy muy agradecido y a cada persona le relato mi
                historia tanto buscar y sufrir estafas y robos logre llegar a
                los brazos de alguien sabia con un enorme corazón quien tomo mi
                caso con mucha importancia. Saludos desde el Ecuador
              </Figure.Caption>
            </Figure>

            <Figure>
              <Figure.Image
                width={171}
                height={180}
                src={fototest2}
                roundedCircle
              />
              <Figure.Caption className="txt">
                Hola aquí habla Maricarmen desde Sant Felíu Barcelona España,
                quería dejar mi agradecimiento y mi muestra de respeto para la
                maestra María Victoria Donatto quien logro devolverme mi vida
                nuevamente y gracias a sus servicios es que estoy aquí firme, me
                contacte debido a una fuerte separación con mi marido quien
                estaba hacia 13 años a mi lado y un día decidió alejarse,
                devastada conté mi caso a la señora quien me dio todo su apoyo y
                confianza en cuestión de 7 días me devolvió a mi pareja mi vida
                y mi felicidad. Gracias de todo corazón eternamente agradecida
                mi maestra
              </Figure.Caption>
            </Figure>

            <Figure>
              <Figure.Image
                width={171}
                height={180}
                src={fototest4}
                roundedCircle
              />
              <Figure.Caption className="txt">
                Buenas aquí habla Vinicio me habito en el Caserío Aldea Guior,
                Chiquimula, Guatemala, hablo en forma de agradecimiento con mi
                maestra María Victoria Donatto ella cambio mi vida por completo
                ya que luego de 3 meses de separarme con mi esposa ella se
                marchó con mi hija y no supe más nada de ella, mi maestra
                realizo una serie de rituales y trabajos los cuales ayudaron a
                devolverme a mi familia nuevamente en cuestión de días ella me
                desbloqueo y apareció en mi casa pidiendo volver a retomar
                nuestras vidas. Hoy en día estamos recién casados planeando
                nuestra luna de miel a las costas de Brasil con nuestra hija,
                muy agradecido y hasta el final con usted mi maestra.
              </Figure.Caption>
            </Figure>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                src={fototest1}
                roundedCircle
              />
              <Figure.Caption className="txt">
                Hola soy Mayra hablo de un pueblo llamado naranjito Ecuador, me
                contacte con la licenciada María Victoria Donatto ya que estaba
                teniendo algunos problemas con mi pareja, lo quería de vuelta
                cuanto antes. Sin esperanza confié luego de haber sufrido
                estafas y que jugaran conmigo, la señora María Victoria me
                devolvió a mi amor nuevamente y hoy estamos planeando nuestra
                boda, estoy sumamente agradecida por los servicios y por
                devolverme mi vida nuevamente. Muchas gracias saludos desde
                Ecuador
              </Figure.Caption>
            </Figure>
            <Figure className="invis">
              <Figure.Image
                width={171}
                height={180}
                src={fototest3}
                roundedCircle
              />
            </Figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Escritos;
