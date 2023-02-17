import React, { useEffect } from "react";
import { Button, Card, Container, Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllGames, selectGames } from "./gamesSlice";

const AllGames = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const games = useSelector(selectGames);
  const completedGames = games.filter((game) => {
    return game.status === "Final";
  });
  const pendingGames = games.filter((game) => {
    return game.status !== "Final";
  });

  useEffect(() => {
    dispatch(fetchAllGames());
  }, [dispatch]);

  return (
    <Container>
      <h1>2022-2023</h1>
      <Row>
        <Col xs={6}>
          <Table
            id="games-table"
            borderless
            hover
            responsive="sm"
            style={{ backgroundColor: "white", textAlign: "left" }}
          >
            <thead>
              <tr>
                <th colSpan={3} className="text-center">
                  Upcoming Games
                </th>
              </tr>
              <tr>
                <th>Date</th>
                <th>Home</th>
                <th>Away</th>
              </tr>
            </thead>
            <tbody>
              {pendingGames.length &&
                pendingGames.map(({ id, date, awayTeam, homeTeam }) => {
                  return (
                    <tr key={id}>
                      <td>{date}</td>
                      <td>{homeTeam}</td>
                      <td>{awayTeam}</td>
                    </tr>
                  );
                })}
              <td></td>
            </tbody>
          </Table>
        </Col>{" "}
        <Col xs={6}>
          <Table
            id="games-table"
            borderless
            hover
            responsive="sm"
            style={{ backgroundColor: "white", textAlign: "left" }}
          >
            <thead>
              <tr>
                <th colSpan={5} className="text-center">
                  Past Games
                </th>
              </tr>
              <tr>
                <th>Date</th>
                <th>Home</th>
                <th>Home Score</th>
                <th>Away</th>
                <th>Away Score</th>
              </tr>
            </thead>
            <tbody>
              {completedGames.length &&
                completedGames.map(
                  ({
                    id,
                    date,
                    awayTeam,
                    awayTeamScore,
                    homeTeam,
                    homeTeamScore,
                  }) => {
                    return (
                      <tr key={id}>
                        <td>{date}</td>
                        <td>{homeTeam}</td>
                        <td>{homeTeamScore}</td>
                        <td>{awayTeam}</td>
                        <td>{awayTeamScore}</td>
                      </tr>
                    );
                  }
                )}
              <td></td>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default AllGames;
