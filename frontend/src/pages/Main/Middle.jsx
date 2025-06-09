import React from "react";
import "./Middle.css";
import {
  BsMortarboardFill,
  BsBookFill,
  BsPersonFill,
  BsPlayCircleFill
} from "react-icons/bs";
import img1 from "../../Assets/Home-img.jpg";
import img2 from "../../Assets/home-2.jpg";
import { FaMicrophoneAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";

const benefits = [
  {
    icon: <BsMortarboardFill />,
    title: "Online Degrees",
    desc: "Learn from Anywhere Flexible, Accredited Online Programs Advance Your Career With Respected Online Degrees.",
    color: "#a16eff"
  },
  {
    icon: <BsBookFill />,
    title: "Short Courses",
    desc: "Boost Your Skills Quickly Practical Learning in Weeks Learn Fast, Grow Faster. Learn Fast, Grow Faster Short Courses.",
    color: "#ff96a2"
  },
  {
    icon: <BsPersonFill />,
    title: "Training From Experts",
    desc: "Master Skills with Experts Guidance from the Best in the Field. Learn From Industry Leaders Hands-On Expertise.",
    color: "#a16eff"
  },
  {
    icon: <BsPlayCircleFill />,
    title: "1.2k Video Courses",
    desc: "Visual Learning Made Easy Interactive Video Courses for You Learn Anytime. Learn Anytime, Anywhere Engaging Lessons.",
    color: "#ff96a2"
  }
];

const Middle = () => {
  return (
    <div className="middle-wrapper">
      <div className="left-images">
        <div className="image-card pink-border">
          <img src={img1} alt="video call" />
          <div className="video-controls">
            <button className="mic">
              <FaMicrophoneAlt />
            </button>
            <button className="call">
              <IoCall />
            </button>
            <button className="video">
              <FaVideo />
            </button>
          </div>
        </div>
        <div className="image-card purple-border">
          <img src={img2} alt="video call" />
          <div className="video-controls ">
            <button className="mic">
              <FaMicrophoneAlt />
            </button>
            <button className="call">
              <IoCall />
            </button>
            <button className="video">
              <FaVideo />
            </button>
          </div>
        </div>
      </div>

      <div className="right-benefits">
        <h2>Benefits From Our Online Learning</h2>
        {benefits.map((item, i) => (
          <div key={i} className="benefit-item">
            <div className="icon" style={{ backgroundColor: item.color }}>
              {item.icon}
            </div>
            <div className="text">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Middle;
