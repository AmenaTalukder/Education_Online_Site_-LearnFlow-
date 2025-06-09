import React from "react";
import "./Mentors.css";
import img1 from "../../Assets/Men-1.jpg";
import img2 from "../../Assets/Men-2.jpg";
import img3 from "../../Assets/Women.jpg";
import img4 from "../../Assets/Men-4.webp";
import { FaStar } from "react-icons/fa";

const mentorsData = [
  {
    id: 1,
    imgSrc: img1,
    title: "Mastering Socialy",
    courseName: "Data Entry",
    people: "(4,787)",
    rating: 4.8
  },
  {
    id: 2,
    imgSrc: img2,
    title: "Mastering Socialy",
    courseName: "Python Courses",
    people: "(3,790)",
    rating: 4.8
  },
  {
    id: 3,
    imgSrc: img3,
    title: "Mastering Socialy",
    courseName: "Java Courses",
    people: "(5,787)",
    rating: 4.8
  },
  {
    id: 4,
    imgSrc: img4,
    title: "Mastering Socialy",
    courseName: "Programming",
    people: "(7,477)",
    rating: 4.8
  }
];

const Mentors = () => {
  return (
    <section className="mentorsSection">
      <div className="heading">
        <h1 className="title">Meet Our Mentors</h1>
      </div>

      <div className="cartSec ">
        {mentorsData.map(
          ({ id, imgSrc, title, courseName, people, rating }) => {
            return (
              <div key={id} className="cartBody">
                <div className="imgDiv">
                  <img src={imgSrc} alt="courseName" className="img" />
                </div>
                <div className="cartDetails">
                  <div className="titleDiv flex">
                    <h1 className="title">{title}</h1>
                    <h2 className="rating flex">
                      <FaStar className="icon" />
                      {rating}
                    </h2>
                  </div>

                  <div className="coursePeopleDiv flex">
                    <span className="courseName">{courseName}</span>
                    <span className="poeple">{people}</span>
                  </div>
                </div>
                <button className="button"> All Details</button>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Mentors;
