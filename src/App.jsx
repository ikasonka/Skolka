import Navigation from "./Components/Navigation/Navigation";
import Hero from "./Components/Hero/Hero";
import Features from "./Components/Features/Features";
import Autoplay from "./Components/Autoplay/Autoplay";
import Greeting from "./Components/Greeting/Greeting";
import Education from "./Components/Education/Education";
import Activities from "./Components/Activities/Activities";
import Footer from "./Components/Footer/Footer";
import Divider2 from "./Components/Divider/Divider2";

import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Divider2 className={"divider-partial"} />
      <Features />
      <Divider2 className={"divider-features-white"} />
      <Greeting />
      <Divider2 className={"divider-greeting-orange"} />
      <Education />
      <Divider2 className={"divider-education-white"} />
      <Activities />
      <Divider2 className={"divider-activities-green"} />
      <Autoplay />
      <Divider2 className={"divider-activities-blue"} />
      <Footer />
    </>
  );
}

export default App;

