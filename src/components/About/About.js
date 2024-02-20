import { useState } from "react";
import { BiSolidMessageAltDots } from "react-icons/bi";
import { MdPhone } from "react-icons/md";
import "./About.css";

const facilitiesObject = [
  { id: 1, name: "Car Parking", imageUrl: "/assets/car.svg" },
  { id: 2, name: "Change Room", imageUrl: "/assets/changeroom.svg" },
  { id: 3, name: "Locker", imageUrl: "/assets/locker.svg" },
  { id: 4, name: "Shower", imageUrl: "/assets/shower.svg" },
  { id: 5, name: "Wi-fi", imageUrl: "/assets/wifi.svg" },
  { id: 6, name: "Childcare Area", imageUrl: "/assets/childcare.svg" },
  { id: 7, name: "Juice Bar", imageUrl: "/assets/juice bar.svg" },
  { id: 8, name: "Sunday Open", imageUrl: "/assets/open.svg" },
];
function About() {
  const [currentState, setCurrentState] = useState([
    "read-more",
    "anchor-show",
  ]);

  const readMore = () => {
    setCurrentState(["read-less", "anchor-hide"]);
  };

  const readLess = () => {
    setCurrentState(["read-more", "anchor-show"]);
  };

  return (
    <div className="about-container">
      <h1 className="description-heading">Description</h1>
      <p className="description-para">
        Fitness refers to a good physical condition which includes being in a
        good shape, burning excess fat in the body and consuming an appropriate
        diet.
        <p className={currentState[1]} onClick={() => readMore()}>
          Read more
        </p>
      </p>
      <p className={`description-para ${currentState[0]}`}>
        Having good health is part of being fit.Fitness means a healthy body
        which is not ridden with diseases, gets sufficient sleep and is active{" "}
        <a href="#" onClick={() => readLess()}>
          Read Less
        </p>
      </p>
      <h1 className="description-heading">GYM Owner</h1>
      <div className="gym-owner-details-container">
        <div className="owner-name-profile-details">
          <div className="owner-profile">
            <img
              src="./assets/owner.jfif"
              alt="profile"
              className="owner-image"
            />
          </div>
          <div>
            <h1 className="owner-name">John Doe</h1>
            <p className="designation">GYM Owner</p>
          </div>
        </div>
        <div className="owner-contact-details-container">
          <div className="owner-contact">
            <BiSolidMessageAltDots className="icons" />
          </div>
          <div className="owner-contact">
            <MdPhone className="icons" />
          </div>
        </div>
      </div>
      <div className="facility-details">
        <h1 className="description-heading">Facilities</h1>
        <ul className="facility-list-parent-container">
          {facilitiesObject.map((eachFacilityList) => (
            <li key={eachFacilityList.id} className="list-facilities-details">
              <div className="list-facilites-icons">
                <img
                  src={eachFacilityList.imageUrl}
                  className="svg"
                  alt={eachFacilityList.name}
                />
              </div>
              <p className="facilities-heading">{eachFacilityList.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="address">
        <h1 className="description-heading">Address</h1>
        <p className="address-link">View on Map</p>
      </div>
      <hr className="horizontal-line" />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d124379.339555223!2d80.2193408!3d13.0449408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1708410290686!5m2!1sen!2sin"
        width="100%"
        height="200px"
        style={{ border: "none", borderRadius: "10px" }}
        allowFullScreen=""
        loading="lazy"
        title="iFrame"
      ></iframe>
    </div>
  );
}

export default About;
