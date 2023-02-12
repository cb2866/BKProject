import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import GameSample from "../features/games/GameSample";
import Home from "../features/home/Home";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/game" element={<GameSample />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
