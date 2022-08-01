import "./App.css";
import Explore from "./components/explore/Explore";
import MainScreen from "./components/mainScreen/MainScreen";
import AboutUs from "./components/aboutUs/AboutUs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <div className="mainScreen">
        <MainScreen />
      </div>
      <div className="explore">
        <Explore />
      </div>
      <div className="aboutUs">
        <AboutUs />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
