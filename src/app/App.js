import React from "react";
// import SiteNavbar from "../features/navbar/SiteNavbar";
import AppRoutes from "./AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      {/* <SiteNavbar /> */}
      <AppRoutes />
    </div>
  );
};

export default App;
