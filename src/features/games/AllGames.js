import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CompletedGames from "./CompletedGames";
import { fetchAllGames, selectGames } from "./gamesSlice";

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
        <h1 id="games-header">Game Breakdown</h1>
        <h3 id="games-header">2022-2023 Season</h3>
      </Row>

      <Row id="games-row2">
        <Col className="d-flex justify-content-end">
          <CompletedGames completedGames={completedGames} />
        </Col>
      </Row>
    </Container>
  );
};

export default AllGames;
