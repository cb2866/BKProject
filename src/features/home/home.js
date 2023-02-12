import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../games/gamesSlice";

const Home = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.games);
  console.log(games);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  return (
    <div>
      <h1>hold for game data</h1>
      <ul>
        {games &&
          games.map((game) => {
            return <li>Game Date: {game.date}</li>;
          })}
      </ul>
    </div>
  );
};

export default Home;
