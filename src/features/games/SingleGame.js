import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row, Card, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleGame,
  fetchSingleGameSpecifics,
  selectSingleGame,
  selectSingleGameSpecifics,
} from "./singleGameSlice";

const SingleGame = () => {
  const dispatch = useDispatch();
  const gameId = useParams();
  const { date, homeTeam, awayTeam, homeTeamScore, awayTeamScore } =
    useSelector(selectSingleGame);
  const gameSpecifics = useSelector(selectSingleGameSpecifics);
  console.log(gameSpecifics);

  //exclude if anyone didn't play more than 1 mintues
  const uniqueGameSpecifics =
    gameSpecifics.length &&
    [...gameSpecifics]
      .reduce((accum, current) => {
        if (!accum.find((record) => record.playerId === current.playerId)) {
          accum.push(current);
        }
        return accum;
      }, [])
      .sort((a, b) => {
        return b.threePointPercent - a.threePointPercent;
      })
      .filter((player) => player.minutesPlayed !== "00");
  console.log(uniqueGameSpecifics);

  useEffect(() => {
    dispatch(fetchSingleGame(gameId.id));
    dispatch(fetchSingleGameSpecifics(gameId.id));
  }, [dispatch]);

  return (
    <Container>
      <Row className="p-4">
        <Card style={{ padding: "0px" }}>
          <Card.Header className="text-muted justify-content-start">
            {date}
          </Card.Header>
          <Card.Header>
            {homeTeam} vs {awayTeam}
          </Card.Header>

          <Card.Body>
            <p>
              Final Score
              <br />
              {homeTeamScore} : {awayTeamScore}
            </p>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Player</th>
                  <th>Min</th>
                  <th>Pts</th>
                  <th>3PA</th>
                  <th>3PM</th>
                </tr>
              </thead>
              <tbody>
                {uniqueGameSpecifics &&
                  uniqueGameSpecifics.map((player, idx) => {
                    return (
                      <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>
                          {player.playerFirstName} {player.playerLastName}
                        </td>
                        <td>{player.minutesPlayed}</td>
                        <td>{player.pointsMade}</td>
                        <td>{player.threePointAttempt}</td>
                        <td>{player.threePointMade}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default SingleGame;
