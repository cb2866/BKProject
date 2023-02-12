import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../features/home/Home";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
