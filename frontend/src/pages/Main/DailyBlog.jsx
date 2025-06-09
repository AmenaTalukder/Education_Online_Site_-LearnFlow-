import React from "react";
import "./DailyBlog.css";
import img1 from "../../Assets/careerjpg.jpg";
import img2 from "../../Assets/Cleaverjpg.jpg";
import img3 from "../../Assets/developjpg.jpg";
import img4 from "../../Assets/empower.jpg";
import { IoArrowForwardSharp } from "react-icons/io5";

const mentorsData = [
  {
    id: 1,
    imgSrc: img1,
    title: "10 Realities to Consider Before Choosing a Career Path",
    date: "04/07/2023",
    description: "Read More"
  },
  {
    id: 2,
    imgSrc: img2,
    title: "20 Key Insights ti Reflect on Before Choosing a Career Path",
    date: "04/07/2023",
    description: "Read More"
  },
  {
    id: 3,
    imgSrc: img3,
    title: "Find a career that aligns with your values and passions",
    date: "04/07/2023",
    description: "Read More"
  },
  {
    id: 4,
    imgSrc: img4,
    title: "Fouces on developing a growth mindset",
    date: "04/07/2023",
    description: "Read More"
  }
];

const DailyBlog = () => {
  return (
    <section className="blogsSection">
      <div className="heading">
        <h1 className="title">Read Our Daily Blogs</h1>
      </div>

      <div className="cartSec ">
        {mentorsData.map(({ id, imgSrc, title, date, description }) => {
          return (
            <div key={id} className="cartBody">
              <div className="imgDiv">
                <img src={imgSrc} alt="title" className="img" />
              </div>
              <div className="cartDetails">
                <div className="titleDiv ">{title}</div>

                <div className="datedestcDiv flex">
                  <span className="date">{date}</span>
                  <span className="description flex">
                    {description}
                    <IoArrowForwardSharp />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DailyBlog;
