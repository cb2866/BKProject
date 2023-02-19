import React from "react";

import { Row, Col, Container } from "react-bootstrap";

const Hero = () => {
  return (
    <Container fluid id="hero-container">
      <Row id="hero-row">
        <Col xs={12} id="hero-col">
          <h1 id="hero-header">Shooters Shoot</h1>
          <h3 id="hero-header">Nets Edition</h3>
          <p id="hero-description">
            This project focuses on the Brooklyn Nets and their three pointer
            stats for the 2022-2023 season, with a focus on analyzing the team's
            performance in shooting three-point shots. The project currently
            looks at the team's three-point attempts, three-points scored, and
            percentage of successful shots. The data will be analyzed to
            identify trends and patterns, such as which players are the most
            effective at shooting three-pointers, which lineups perform best,
            and how the team's three-point shooting affects their overall
            performance. The insights gained from this analysis could be used to
            inform strategies for future games and help the team optimize their
            performance in three-point shooting.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
