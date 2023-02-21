import React from "react";

import { Row, Col, Container } from "react-bootstrap";

const Hero = () => {
  return (
    <Container fluid id="hero-container">
      <Row id="hero-row">
        <Col xs={12} id="hero-col">
          <h1 id="hero-header" >Shooters Shoot</h1>
          <h3 id="hero-header">Nets Edition</h3>
          <p id="hero-description">
            This project focuses on the Brooklyn Nets performance in shooting
            three-point shots.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
