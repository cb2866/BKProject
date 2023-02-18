import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../features/home/Home";
import AllGames from "../features/games/AllGames";
import AllPlayers from "../features/players/AllPlayers";
import SinglePlayerCharts from "../features/players/SinglePlayerCharts";
import SingleGame from "../features/games/SingleGame";

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
