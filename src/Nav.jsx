/** @format */

import React from "react";
import logo from "./image/mp logo.png";
function Nav({ change }) {
  return (
    <>
      <div className="Nav">
        <img className="Nav-logo" src={logo} alt="logo" />
        <input type="checkbox" id="menu" />
        <label htmlFor="menu" className="Nav-toggle" onClick={() => change()}>
          <i className="fa fa-bars"></i>
        </label>
      </div>
    </>
  );
}

export default Nav;
