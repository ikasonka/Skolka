import React from "react";

import "./References.css";

const autoplay = () => {
  const carouselEl = document.getElementById("carousel");
  const slideContainerEl = carouselEl.querySelector("#slide-container");
  const slideEl = carouselEl.querySelector(".slide");
  let slideWidth = slideEl.offsetWidth;
  // Add click handlers
  /*document.querySelector("#back-button")
  .addEventListener("click", () => navigate("backward"));
document.querySelector("#forward-button")
  .addEventListener("click", () => navigate("forward"));*/
  document.querySelectorAll(".slide-indicator").forEach((dot, index) => {
    dot.addEventListener("click", () => navigate(index));
    dot.addEventListener("mouseenter", () => clearInterval(autoplay));
  });
  // Add keyboard handlers
  document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft") {
      clearInterval(autoplay);
      navigate("backward");
    } else if (e.code === "ArrowRight") {
      clearInterval(autoplay);
      navigate("forward");
    }
  });
  // Add resize handler
  window.addEventListener("resize", () => {
    slideWidth = slideEl.offsetWidth;
  });
  // Autoplay
  const autoplay = setInterval(() => navigate("forward"), 3000);
  slideContainerEl.addEventListener("mouseenter", () =>
    clearInterval(autoplay)
  );
  // Slide transition
  const getNewScrollPosition = (arg) => {
    const gap = 10;
    const maxScrollLeft = slideContainerEl.scrollWidth - slideWidth;
    if (arg === "forward") {
      const x = slideContainerEl.scrollLeft + slideWidth + gap;
      return x <= maxScrollLeft ? x : 0;
    } else if (arg === "backward") {
      const x = slideContainerEl.scrollLeft - slideWidth - gap;
      return x >= 0 ? x : maxScrollLeft;
    } else if (typeof arg === "number") {
      const x = arg * (slideWidth + gap);
      return x;
    }
  };
  const navigate = (arg) => {
    slideContainerEl.scrollLeft = getNewScrollPosition(arg);
  };
  // Slide indicators
  const slideObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const slideIndex = entry.target.dataset.slideindex;
          carouselEl
            .querySelector(".slide-indicator.active")
            .classList.remove("active");
          carouselEl
            .querySelectorAll(".slide-indicator")
            [slideIndex].classList.add("active");
        }
      });
    },
    { root: slideContainerEl, threshold: 0.1 }
  );
  document.querySelectorAll(".slide").forEach((slide) => {
    slideObserver.observe(slide);
  });
};

//autoplayCarousel();

const References = () => {
  return (
    <>
      <section className="references">
        <div id="carousel">
          <div id="slide-container">
            <div
              className="slide"
              data-slide-index="0"
            >
              <div className="slide-banner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  fill="currentColor"
                  className="bi bi-chat-quote"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                  <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                </svg>
                <p>
                  1.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                  impedit dicta architecto modi et! Ea architecto iure sequi
                  libero hic distinctio expedita sed non, iusto facilis ducimus
                  fugit, incidunt aspernatur.
                </p>

                <div className="hr"></div>
                <p>Olivkin ocino</p>
              </div>
            </div>

            <div
              className="slide"
              data-slide-index="1"
            >
              <div className="slide-banner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  fill="currentColor"
                  className="bi bi-chat-quote"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                  <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                </svg>
                <p>
                  2.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                  impedit dicta architecto modi et! Ea architecto iure sequi
                  libero hic distinctio expedita sed non, iusto facilis ducimus
                  fugit, incidunt aspernatur.
                </p>

                <div className="hr"></div>
                <p>Maťkova mamina</p>
              </div>
            </div>

            <div
              className="slide"
              data-slide-index="2"
            >
              <div className="slide-banner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  fill="currentColor"
                  className="bi bi-chat-quote"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                  <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                </svg>
                <p>
                  3.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                  impedit dicta architecto modi et! Ea architecto iure sequi
                  libero hic distinctio expedita sed non, iusto facilis ducimus
                  fugit, incidunt aspernatur.
                </p>
                <div className="hr"></div>
                <p>Jakubkova mamina</p>
              </div>
            </div>

            <div
              className="slide"
              data-slide-index="3"
            >
              <div className="slide-banner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  fill="currentColor"
                  className="bi bi-chat-quote"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                  <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                </svg>
                <p>
                  4.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                  impedit dicta architecto modi et! Ea architecto iure sequi
                  libero hic distinctio expedita sed non, iusto facilis ducimus
                  fugit, incidunt aspernatur.
                </p>
                <div className="hr"></div>
                <p>Letíciin ocino</p>
              </div>
            </div>

            <div
              className="slide"
              data-slide-index="4"
            >
              <div className="slide-banner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  fill="currentColor"
                  className="bi bi-chat-quote"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                  <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                </svg>
                <p>
                  5.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                  impedit dicta architecto modi et! Ea architecto iure sequi
                  libero hic distinctio expedita sed non, iusto facilis ducimus
                  fugit, incidunt aspernatur.
                </p>
                <div className="hr"></div>
                <p>Adamkova mamina</p>
              </div>
            </div>
          </div>
          <div className="slide-indicators">
            <div className="slide-indicator active"></div>
            <div className="slide-indicator"></div>
            <div className="slide-indicator"></div>
            <div className="slide-indicator"></div>
            <div className="slide-indicator"></div>
          </div>
        </div>
      </section>
      {autoplay()}
    </>
  );
};

export default References;

//<div id="back-button" className="arrow back">←</div>
//<div id="forward-button" className="arrow forward">→</div>
