import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CompletedGames from "./CompletedGames";
import { fetchAllGames, selectGames } from "./gamesSlice";
import "./slideshow/slideshow.css";

const AllGames = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllGames());
  }, [dispatch]);

  const games = useSelector(selectGames);
  const completedGames = games.filter((game) => {
    return game.status === "Final";
  });

  return (
    <Container id="games-container" fluid>
      <Row id="games-row1">
        <Col sm={7} className="me-auto">
          <h1 id="games-header">Game Breakdown</h1>
          <h3 id="games-header">2022-2023 Season</h3>

          <p id="section-instructions-right">
            {" "}
            Click on a different month to display games played during that
            period. For specific game details, click into a row. Information
            displayed includes final score, as well as player stats, including
            minutes played, overall points scored.
          </p>
        </Col>{" "}
        <Col sm={3} id="nets-logo-col">
          <img id="nets-logo" src="/brooklyn-nets-logo.svg" alt="nets logo" />
        </Col>
      </Row>
      <Row id="games-row2">
        <Col className="d-flex justify-content-start">
          <CompletedGames completedGames={completedGames} />
        </Col>
      </Row>
    </Container>
  );
};

export default AllGames;
