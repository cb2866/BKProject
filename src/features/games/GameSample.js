import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryStack,
  VictoryTheme,
} from "victory";
import { Container, Card } from "react-bootstrap";

import { selectGames, fetchPlayedGames } from "./gamesSlice";

const GameSample = () => {
  const dispatch = useDispatch();
  const games = useSelector(selectGames);

  useEffect(() => {
    dispatch(fetchPlayedGames());
  }, [dispatch]);

  console.log(games);
  return (
    <Container>
      <h1>Sample Game Page</h1>
      <Card>
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryStack>
            <VictoryBar data={games} x="date" y="homeTeamScore" />
            <VictoryBar data={games} x="date" y="awayTeamScore" />
          </VictoryStack>
        </VictoryChart>
      </Card>
    </Container>
  );
};

export default GameSample;
