import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css";

const Carousel = ({ images }) => {
  console.log(images);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextImage;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, 2000); // Change this to the desired autoplay speed in milliseconds
    return () => {
      clearInterval(interval);
    };
  }, []);

  const nextImage = () => {
    const newIndex =
      currentImageIndex >= images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="carousel-section">
      <div
        className="carousel"
        onMouseEnter={() => clearInterval(autoPlayRef.current)}
        onMouseLeave={() => setInterval(autoPlayRef.current, 2000)} // Restart the interval when the mouse leaves
      >
        <img
          src={images[currentImageIndex]}
          alt=""
        />
      </div>
    </div>
  );
};

export default Carousel;
