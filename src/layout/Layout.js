import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import myImage from "../imageinsrc.jpg"
import myVideo from "../javascript-es6-intro.mp4";
import "./Layout.css"
const Layout = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 style={{ color: "red"}}>Nihel Mrad</h1>
        </Col>
      </Row>
      <Col>
        <Col>
          <img src="./imageInPublic.jpg" alt="myimage" />
        </Col>
        <Col>
          <img src={myImage} alt="myImage" />
          <p>votre photo de profil</p>
        </Col>
        <Col>
          <video style={{ width: 320, height: 240 }} controls>
            <source src={myVideo} type="video/mp4" />
          </video>
        </Col>
      </Col>
    </Container>
  );
};

export default Layout;
