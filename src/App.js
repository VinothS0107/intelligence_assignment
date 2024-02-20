import { Routes, Route,Navigate} from "react-router-dom";
import About from "./components/About/About";
import MenuBar from "./components/MenuBar/MenuBar";
import Trainer  from "./components/Trainer/Trainer";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import Review from "./components/Review/Review"
import { GiNetworkBars } from "react-icons/gi";
import {
  IoWifiOutline,
  IoBatteryFull,
  IoArrowBackOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { IoIosStar } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";


import "./App.css";




const homeImage = [
  { id: 1, imageUrl: "./assets/home1.avif", menu: "About" },
  { id: 2, imageUrl: "./assets/home2.avif", menu: "Trainer" },
  { id: 3, imageUrl: "./assets/home3.avif", menu: "Gallery" },
  { id: 4, imageUrl: "./assets/home4.jpg", menu: "Review" },
];
function App() {


  return (
    <div className="container">
      <div className="main-container">
        <img
          src="./assets/home1.avif"
          width="375px"
          height="100%"
          alt="head_image"
        />
        <div className="main-time-container">
          <div className="timer-container">
            <p>9.00</p>
          </div>
          <div className="main-information-container">
            <GiNetworkBars />
            <IoWifiOutline />
            <IoBatteryFull />
          </div>
        </div>
        <div className="back_share-container">
          <div className="back-arrow-container">
            <IoArrowBackOutline />
          </div>
          <div className="main-information-container">
            <div className="back-arrow-container">
              <IoShareSocialOutline />
            </div>
            <div className="back-arrow-container">
              <GrFavorite />
            </div>
          </div>
        </div>
        <ul className="home-suggestion-container">
          {homeImage.map((eachImage) => (
            <li key={eachImage.id} className="separate_image">
              <img
                src={eachImage.imageUrl}
                className="image_class"
                alt="sept_image"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="gym-details-container">
        <div className="gym">
          <p>GYM</p>
        </div>
        <div className="rating-review-container">
          <p>
            <IoIosStar className="star-icon" /> 4.5 (365 reviews)
          </p>
        </div>
      </div>
      <div className="hub-container">
        <div className="hub-head">
          <h1 className="heading">ProActive Fitness Hub</h1>
          <p className="hub-address">1012 Ocean avanue, New york, USA</p>
        </div>
        <div>
          <FaTelegram className="tele-icon" />
        </div>
      </div>
      <div className="all-menu-wrapper">
        <ul className="all-menu-container">
          {homeImage.map((eachMenu) => (
            <MenuBar key={eachMenu.id} menu={eachMenu.menu} />
          ))}
        </ul>
      </div>

      <Routes>
        <Route path="*" element={<Navigate to="/About" />} />
        <Route path="/About" element={<About />} />
        <Route path="/Trainer" element={<Trainer />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Review" element={<Review />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
