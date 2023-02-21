import React from "react";
import { motion } from "framer-motion";
import { Row, Col, Container, Button } from "react-bootstrap";

const Hero = () => {
  const scrollToComponent = (id) => {
    const el = document.getElementById(id);
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container fluid id="hero-container">
      <Row id="hero-row">
        <Col xs={12} id="hero-col">
          <h1 id="hero-header">Shooters Shoot</h1>
          <h3 id="hero-header">Nets Edition</h3>
          <p id="hero-description">
            This project focuses on the Brooklyn Nets performance in shooting
            three-point shots.
          </p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs={2} className="d-flex justify-content-end">
          <Button size="sm" variant="light">
            <motion.a
              onClick={() => scrollToComponent("games-container")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Games{" "}
            </motion.a>
          </Button>
        </Col>
        <Col xs={2} className="d-flex justify-content-start">
          <Button size="sm" variant="light">
            <motion.a
              onClick={() => scrollToComponent("players-container")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Players
            </motion.a>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
