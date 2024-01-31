import React from "react";

import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-container">
        <div className="nav-bar-top"></div>
        <div className="nav-bar">
          <div className="logo-container">LOGO</div>
          <div className="nav-info-container">
            Tu nase cislo a Tu nasa adresa
          </div>
        </div>
        <div className="nav-list-container">
          <div className="nav-list-edge"></div>
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
            <li className="nav-last-item">
              <a href="#">Zábava</a>
            </li>
          </ul>
          <div className="nav-list-edge"></div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
