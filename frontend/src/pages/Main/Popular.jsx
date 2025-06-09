import React from "react";
import "./Popular.css";
import { FaStar } from "react-icons/fa";

// Image imports
import Digital from "../../Assets/digital.jpg";
import UI from "../../Assets/ui-ux.jpg";
import HTML from "../../Assets/Html.jpg";
import DesignThinking from "../../Assets/DesignThinking.jpg";
import DataEntry from "../../Assets/DataEntry.jpg";
import ContentWriter from "../../Assets/ContentWriter.jpg";
import GraphicDesign from "../../Assets/GraphicDesign.jpg";
import SocialMedia from "../../Assets/SocialMedia.jpg";

const cartData = [
  {
    id: 1,
    imgSrc: Digital,
    courseName: "Digital Marketing & With Basic to Advance",
    courseFee: "$55.00",
    prevFee: "$60.50",
    rating: 5.0
  },
  {
    id: 2,
    imgSrc: UI,
    courseName: "The Journey of UX Design: From Basics to Mastery",
    courseFee: "$42.00",
    prevFee: "$47.30",
    rating: 5.0
  },
  {
    id: 3,
    imgSrc: HTML,
    courseName: "HTML Programming: From Fundamentals to Expertise",
    courseFee: "$32.50",
    prevFee: "$39.50",
    rating: 4.9
  },
  {
    id: 4,
    imgSrc: DesignThinking,
    courseName: "Design-Led Strategy: The Power of Design Thinking",
    courseFee: "$50.00",
    prevFee: "$59.50",
    rating: 5.0
  },
  {
    id: 5,
    imgSrc: SocialMedia,
    courseName: "Mastering Social Media Management: Step by Step",
    courseFee: "$60.00",
    prevFee: "$64.50",
    rating: 4.8
  },
  {
    id: 6,
    imgSrc: GraphicDesign,
    courseName: "Graphic Design Expert: From Fundamentals to Mastery",
    courseFee: "$35.00",
    prevFee: "$40.30",
    rating: 5.0
  },
  {
    id: 7,
    imgSrc: DataEntry,
    courseName: "Data Entry: From Basics to Proficiency",
    courseFee: "$25.50",
    prevFee: "$30.50",
    rating: 4.9
  },
  {
    id: 8,
    imgSrc: ContentWriter,
    courseName: "Content Writer: Crafting Impactful Narratives",
    courseFee: "$22.50",
    prevFee: "$25.50",
    rating: 4.7
  }
];

const Popular = () => {
  return (
    <section className="popularDiv">
      <div className="heading">
        <h3 className="title">Popular Courses</h3>
      </div>

      <div className="sectionForContent grid">
        {cartData.map(
          ({ id, imgSrc, courseName, courseFee, prevFee, rating }) => (
            <div key={id} className="showedSection">
              <div className="imageSection">
                <img src={imgSrc} alt={courseName} />
              </div>

              <div className="cardSec">
                <div className="courseName">{courseName}</div>
                <div className="feeAndRatingDiv flex">
                  <div className="feeDiv flex">
                    <div className="courseFee">{courseFee}</div>
                    <div className="prevFee">{prevFee}</div>
                  </div>
                  <div className="rating flex">
                    <FaStar className="icon" /> {rating}
                  </div>
                </div>
              </div>

              <button className="button">All Details</button>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Popular;
