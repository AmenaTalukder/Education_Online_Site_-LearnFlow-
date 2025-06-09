import React, { useState } from "react";
import Logo from "../../Assets/LogoImage.png";
import "./Navbar.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RiMenuSearchFill } from "react-icons/ri";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navItems = ["Home", "Apply", "Video Gallery", "Blog", "Contact"];

  return (
    <section className="navbarSection">
      <div className="navBar flex">
        <div className="logoDiv flex">
          <h1 className="headerLogoh1 flex">
            <div className="LogoimageDiv">
              <img src={Logo} alt="Logo" className="brandLogo" />
            </div>
            LearnFlow
          </h1>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="toggleBar"
          onClick={toggleMenu}
          aria-label="Open menu"
          role="button"
          tabIndex={0}
        >
          <RiMenuSearchFill className="icon" />
        </div>

        {/* Mobile / Desktop Nav */}
        <div className={`navListsDiv ${mobileMenuOpen ? "showMenu" : ""} flex`}>
          <div
            className="closeBar"
            onClick={toggleMenu}
            aria-label="Close menu"
            role="button"
            tabIndex={0}
          >
            <IoIosCloseCircleOutline className="icon" />
          </div>

          <div className="itemDiv">
            <ul className="navLists flex">
              {navItems.map((item, index) => (
                <li key={index} className="navLinks flex">
                  <a href="default" onClick={(e) => e.preventDefault()}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="buttonDiv flex">
            <button className="btnOne">Sign Up</button>
            <button className="btnTwo button">Sign In</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
