import React from "react";
import Navbar from "../features/navbar/Navbar";
import "./App.css";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
