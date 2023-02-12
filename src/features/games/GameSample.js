import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import * as V from "victory";

import { selectGames, fetchPlayedGames } from "./gamesSlice";

const GameSample = () => {
  const dispatch = useDispatch();
  const games = useSelector(selectGames);
  useEffect(() => {
    dispatch(fetchPlayedGames());
  }, [dispatch]);

  console.log(games);
  return (
    <div>
      <h1>Sample Game Page</h1>
    </div>
  );
};

export default GameSample;
