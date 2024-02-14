import React from "react";

import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-bg">
        <div className="hero-container">
          <div className="hero-text-container">
            <div className="waviy">
              <span className="waviy1">V</span>
              <span className="waviy2">i</span>
              <span className="waviy3">t</span>
              <span className="waviy4">a</span>
              <span className="waviy5">j</span>
              <span className="waviy6">t</span>
              <span className="waviy7">e</span>
            </div>
            <p className="hero-text">
              ...v našom čarovnom detskom svete u nás doma v Turni...
            </p>
            <button className="hero-button">Chcem sa pridať</button>
          </div>
          <div className="hero-image-container">
            <img
              className="hero-image"
              src="src/assets/hero-image.png"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
