import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="*" />
      </Routes>
    </div>
  );
};

export default AppRoutes;
