/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

import logoo from "./image/mp logo2.png";

const Sidebar = () => {
  return (
    <>
      <div className="Sidebar">
        <div className="Sidebar-logo-main">
          <img className="Sidebar-logo" src={logoo} alt="logo" />
          <div style={{ marginTop: "2rem" }}>
            <span
              className="Sidebar-logo-text"
              style={{ color: "#191e5f", marginRight: "0.3rem" }}
            >
              Mentor
            </span>
            <span className="Sidebar-logo-text" style={{ color: "red" }}>
              Plus
            </span>
          </div>
        </div>

        <NavLink exact to="/mentorplus/">
          <div className="Sidebar-btn">Home</div>
        </NavLink>
        <NavLink exact to="/mentorplus/profile">
          <div className="Sidebar-btn">Profile</div>
        </NavLink>
        <div className="Sidebar-btn"></div>
        <div className="Sidebar-btn"></div>
        <div className="Sidebar-btn"></div>
      </div>
    </>
  );
};

export default Sidebar;
