import React from "react";
import { Route, Routes } from "react-router-dom";
import AllGames from "../features/games/AllGames";
import SingleGame from "../features/games/SingleGame";
import Home from "../features/home/Home";
import AllPlayers from "../features/players/AllPlayers";
import SinglePlayerCharts from "../features/players/SinglePlayerCharts";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/games" element={<AllGames />} />
        <Route path="/games/:id" element={<SingleGame />} />
        <Route path="/players" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayerCharts />} />÷
      </Routes>
    </div>
  );
};

export default AppRoutes;
