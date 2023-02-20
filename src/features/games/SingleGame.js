import React, { useEffect } from "react";
import { Card, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSingleGame,
  fetchSingleGameSpecifics,
  selectSingleGame,
  selectSingleGameSpecifics,
} from "./singleGameSlice";

const SingleGame = ({ gameId }) => {
  const dispatch = useDispatch();
  console.log(gameId);
  // const gameId = useParams();
  const { date, homeTeam, awayTeam, homeTeamScore, awayTeamScore } =
    useSelector(selectSingleGame);
  const gameSpecifics = useSelector(selectSingleGameSpecifics);
  console.log(gameSpecifics);
  //exclude any instances where player time is 0 minutes
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
    dispatch(fetchSingleGame(gameId));
    dispatch(fetchSingleGameSpecifics(gameId));
  }, [dispatch]);

  return (
    // <Container>
    <Row className="p-4">
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
            {uniqueGameSpecifics ? (
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
              })
            ) : (
              <tr>
                <td colSpan={6} style={{ color: "red", textAlign: "center" }}>
                  No other game data available at this time.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Card.Body>
      {/* </Card> */}
    </Row>
    // </Container>
  );
};

export default SingleGame;
