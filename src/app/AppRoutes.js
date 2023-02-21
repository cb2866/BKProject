import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../features/home/Home";
import LoadingScreen from "../features/loading/LoadingScreen";

const AppRoutes = () => {
  const loading = useSelector((state) => state.singlePlayer.loading);

  return (
    <div>
      {loading && <LoadingScreen />}
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
