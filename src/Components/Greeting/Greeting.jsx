import "./Greeting.css";

const Greeting = () => {
  return (
    <div className="greeting-sections">
      <h2 className="section-heading">Príhovor pani riaditeľky</h2>
      <div className="greeting-container">
        <div className="greeting-image-container">
          <img
            className="greeting-image"
            src="src/assets/greeting-image.png"
          ></img>
        </div>
        <div className="greeting-text-container">
          <p className="greeting-text">
            Hello this is just a card text so you know how it looks like and
            what it is capable of. Lorem ipsum, dolor sit amet consectetur adipisicing elit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
