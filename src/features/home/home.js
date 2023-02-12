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
      <h1>dashboard</h1>
    </div>
  );
};

export default Home;
