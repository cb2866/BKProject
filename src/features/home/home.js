import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllGames, selectGames } from "../games/gamesSlice";

const Home = () => {
  const dispatch = useDispatch();
  const games = useSelector(selectGames);
  console.log(games);

  useEffect(() => {
    dispatch(fetchAllGames());
  }, [dispatch]);

  return (
    <div>
      <h1>hold for game data</h1>
      <ul>
        {games &&
          games.map(({ date, id }) => {
            return <li key={id}>Game Date: {date}</li>;
          })}
      </ul>
    </div>
  );
};

export default Home;
