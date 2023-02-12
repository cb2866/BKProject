import React from "react";
import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
