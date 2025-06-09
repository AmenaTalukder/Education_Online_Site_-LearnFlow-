import React from "react";
import "./Footer.css";
import { IoCall } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../Assets/LogoImage.png";

const Footer = () => {
  return (
    <section className="footerDiv flex">
      <div className="leftDiv flex">
        <div className="logoDiv flex">
          <h1 className="headerLogoh1 flex">
            <div className="LogoimageDiv">
              <img src={Logo} alt="Logo" className="brandLogo" />
            </div>
            LearnFlow
          </h1>
        </div>
        <div className="phone flex">
          <IoCall />
          <p> +880 1745-457002</p>
        </div>
        <div className="email flex">
          <MdAttachEmail />
          <p> learnflow23@gmail.com</p>
        </div>
        <div className="iconsDiv flex">
          <FaFacebook className="icon" />
          <FaXTwitter className="icon" />
          <IoLogoYoutube className="icon" />
          <RiInstagramFill className="icon" />
        </div>
      </div>
      <div className="middleDiv flex">
        <div className="menu">
          <h1>Menu</h1>
          <ul>
            <li>Catagories</li>
            <li>Course</li>
            <li>Detials</li>
            <li>New</li>
            <li>Certificates</li>
          </ul>
        </div>
        <div className="company">
          <h1>Company</h1>
          <ul>
            <li>About Us</li>
            <li>News</li>
            <li>Self Courses</li>
            <li>Mentor</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="support">
          <h1>Support</h1>
          <ul>
            <li>Trems & Conditions</li>
            <li>Career</li>
            <li>Comments</li>
            <li>Security</li>
            <li>Community</li>
          </ul>
        </div>
      </div>
      <div className="rightDiv flex">
        <h1 className="title">Subscribe to Our Newsletter</h1>

        <button className="buttonEm">Enter Your Email</button>
        <button className="button">Subscribe Now</button>
      </div>
    </section>
  );
};

export default Footer;
