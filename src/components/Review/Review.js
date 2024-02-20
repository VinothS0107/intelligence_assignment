import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import { CiSearch, CiFilter } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import "./Review.css";

const reviewData = [
  {
    id: 1,
    name:"Dale Thiel",
    profileUrl: "./assets/gallery7.avif",
    verified: true,
    Date: "11 months ago",
    reiviewDescription:
      "Awesome Gym I have ever seen in my fitness cycle.. Special thanks to Arun(Master) who is very kind and motivating person. Best Trainers I have ever seen.. Thanks to 10FL & Team",
    rating: 5.0,
    imageUrl: ["./assets/gallery7.avif", "./assets/gallery7.avif"],
  },
  {
    id: 2,
    name:"Dale Thiel",
    profileUrl: "./assets/gallery7.avif",
    verified: true,
    Date: "11 months ago",
    reiviewDescription:
      "Awesome Gym I have ever seen in my fitness cycle.. Special thanks to Arun(Master) who is very kind and motivating person. Best Trainers I have ever seen.. Thanks to 10FL & Team",
    rating: 5.0,
    imageUrl: [],
  },
  
];

function Review() {
  const callimage = (imageUrl) => {
   return(
    <ul className="reviewer_image_container">
    {imageUrl.map((eachUrl)=>(
        <li className="ireviewer_image_list">
        <img src={eachUrl} alt="image_url" className="rewier_image" />
        </li>
    ))}
    </ul>
   )
  };

  return (
    <>
      <div className="review_container">
        <div className="review_sub_container">
          <h1 className="review-heading">Reviews</h1>
          <div className="add-review-conatainer">
            <PiPencilSimpleLineDuotone className="add_review_icon" />
            <p className="review-add-para">add review</p>
          </div>
        </div>
        <div className="search-review-container">
          <button type="button" className="search_button">
            <CiSearch className="search_icon" />
          </button>
          <input
            type="search"
            className="input_search"
            placeholder="Search in reviews"
          />
        </div>
        <div className="filter-container">
          <div className="filter-option-container">
            <CiFilter className="filterIcon" />
            <p>Filter</p>
            <FaCaretDown className="filterIcon" />
          </div>
          <button type="button" className="filter-button">
            Verified
          </button>
          <button type="button" className="filter-button">
            Latest
          </button>
          <button type="button" className="filter-button">
            With Photos
          </button>
          <button type="button" className="filter-button">
            With Photos
          </button>
        </div>
      </div>
      <hr />
      <ul className="review-list-container">
        {reviewData.map((eachReview) => (
          <>
            <li className="reviewer-each-list">
              <div className="reviwer-profile-details-container">
                <div className="reviwer-profile-details-sub-container">
                  <div className="reviewer_profile">
                    <img
                      src={eachReview.profileUrl}
                      alt={eachReview.id}
                      className="reviewer-profile_image"
                    /> 
                    <RiVerifiedBadgeFill className="reviewer_verified_icon"/>
                  </div>
                  <h1 className="reviewer-name">{eachReview.name}</h1>
                </div>
                <p className="reviewed_date">{eachReview.Date}</p>
              </div>
              <p className="reviewer-review">{eachReview.reiviewDescription}</p>
              <p className="rating-symbol">
                <IoIosStar className="star-icon" />
                <IoIosStar className="star-icon" />
                <IoIosStar className="star-icon" />
                <IoIosStar className="star-icon" />
                <IoIosStar className="star-icon" />
                {eachReview.rating}
              </p>
            </li>

            {(eachReview.imageUrl.length !== 0)
                ? callimage(eachReview.imageUrl)
                : null}
            <hr />
          </>
        ))}
      </ul>
    </>
  );
}
export default Review;
