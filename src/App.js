/** @format */

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// CSS LINKS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style/main.css";

// COMPONENTS
import Home from "./Home";
import Nav from "./Nav";
import Profile from "./Profile";
import Sidebar from "./Sidebar ";

// Function START
function App() {
  const [sidebar, setSidebar] = useState(false);

  const change = () => {
    setSidebar(!sidebar);
  };

  setInterval(() => {
    let width = window.innerWidth;
    if (width >= 660 && sidebar === false) {
      setSidebar(true);
    }
  }, 500);

  return (
    <>
      <Nav change={change} />
      {sidebar && <Sidebar />}
      <Routes>
        <Route exact path="/mentorplus/" element={<Home />} />
        <Route exact path="/mentorplus/profile" element={<Profile />} />
      </Routes>
    </>
  );
}
// FUNCTION END

export default App;
