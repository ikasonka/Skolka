import React from "react";

import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-container">
        <div className="nav-bar"></div>
        <ul className="nav-list">
          <li>
            <a href="#">Domov</a>
          </li>
          <li>
            <a href="#">Učitelia</a>
          </li>
          <li>
            <a href="#">Triedy</a>
          </li>
          <li>
            <a href="#">Krúžky</a>
          </li>
          <li>
            <a href="#">Zábava</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
