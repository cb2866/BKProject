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
        <Col xs={12}>
          <h1 id="hero-header">Shooters Shoot</h1>
          <h3 id="hero-header">Nets Edition</h3>
          <p id="hero-description">
            This project focuses on the Brooklyn Nets performance in shooting
            three-point shots.
          </p>
        </Col>
      </Row>
      <Row id="hero-row2">
        <Col xs={2} style={{ padding: "0px", textAlign: "right" }}>
          <Button
            size="sm"
            variant="light"
            style={{ marginRight: "4px", marginBottom: "4px" }}
          >
            <motion.a
              onClick={() => scrollToComponent("games-container")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Games
            </motion.a>
          </Button>
          {/* </Col>
        <Col xs={2} className="ms-auto"> */}
          <Button
            size="sm"
            variant="light"
            style={{ marginRight: "4px", marginBottom: "4px" }}
          >
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
