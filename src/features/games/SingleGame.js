import React, { useEffect } from "react";
import { Card, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleGame,
  fetchSingleGameSpecifics,
  selectSingleGame,
  selectSingleGameSpecifics,
} from "./singleGameSlice";

const SingleGame = ({ gameId }) => {
  const dispatch = useDispatch();

  const { homeTeam, awayTeam, homeTeamScore, awayTeamScore } =
    useSelector(selectSingleGame);
  const gameSpecifics = useSelector(selectSingleGameSpecifics);

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

  useEffect(() => {
    dispatch(fetchSingleGame(gameId));
    dispatch(fetchSingleGameSpecifics(gameId));
  }, [dispatch, gameId]);

  return (
    <Card style={{ border: "none" }}>
      <Card.Header style={{ border: "none" }}>
        {homeTeam} vs {awayTeam}
      </Card.Header>
      <Card.Header
        className="text-muted justify-content-start"
        style={{ border: "none" }}
      >
        <p>
          Final Score: {homeTeamScore} - {awayTeamScore}
        </p>
      </Card.Header>

      <Card.Body>
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
    </Card>
  );
};

export default SingleGame;
