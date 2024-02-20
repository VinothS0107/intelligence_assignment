import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoHeart } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import "./Trainer.css";

const dummyProfile = [
  {
    id: 1,
    category: "Pofessional Trainer",
    name: "Bassie Cooper",
    designation: "Trainer",
    rating: 4.8,
    reviews: 49,
    profileUrl: "./assets/profile1.jfif",
  },
  {
    id: 2,
    category: "Pofessional Trainer",
    name: "Bassie Cooper",
    designation: "Trainer",
    rating: 4.8,
    reviews: 49,
    profileUrl: "./assets/profile1 (2).jfif",
  }, {
    id: 3,
    category: "Pofessional Trainer",
    name: "Wade Warren",
    designation: "Trainer",
    rating: 4.8,
    reviews: 49,
    profileUrl: "./assets/profile3.avif",
  },
];

function Trainer() {
  return (
    <div className="Trainer-container">
      <h1 className="specialist-heading">
        Specialist<span> ({dummyProfile.length})</span>
      </h1>

      <ul className="specialist-container">
        {dummyProfile.map((eachProfile) => (
          <li className="list-specalist-container">
            <div className="list-each-profile-container">
              <div className="profile-container">
                <img src={eachProfile.profileUrl} alt={eachProfile.name} />
              </div>
              <div className="trainer-details">
                <div className="trainer-details-no1">
                  <div className="trainer-details-no1-sub-cont">
                    <p className="profile_category">
                      <RiVerifiedBadgeFill /> {eachProfile.category}
                    </p>
                  </div>
                  <IoHeart className="like-icon" />
                </div>
                <h1 className="trainer-name">{eachProfile.name}</h1>
                <p className="desig-name">{eachProfile.designation}</p>
                <div className="star-rating-container">
                    <p className="star"><IoIosStar className="star-icon"/><IoIosStar className="star-icon" /><IoIosStar className="star-icon"/><IoIosStar className="star-icon" /><IoIosStar className="star-icon" />{eachProfile.rating}</p>
                    <p className="trainer_review">{eachProfile.reviews} Reviews</p>
                </div>
              </div>
            </div>
            <button type="button" title="appointment-button" className="appointment_button">Make Appointment</button>
          </li>
        ))}
        <div></div>
      </ul>
    </div>
  );
}

export default Trainer;
