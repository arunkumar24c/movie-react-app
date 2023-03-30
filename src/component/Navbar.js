import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";
import { IoMdNotifications } from "react-icons/io";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        {/* left container */}
        <div className="left-container">
          <img
            src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png"
            alt=""
            className="netify"
          />
          <span className="span-title">Homepage</span>
          <span className="span-title">Series</span>
          <span className="span-title">Movies</span>
          <span className="span-title">New and Popular</span>
          <span className="span-title">My List</span>
        </div>

        {/* right container */}
        <div className="right-container">
          <AiOutlineSearch className="icon" />
          <span className="span-title">KID</span>
          <IoMdNotifications className="icon" />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbXGsL1KrGy8Tm9E71EDPwQHtjfaC9Z-78d5MABM0&s"
            alt=""
            className="profile"
          />
          {/* dropdown */}
          <div class="dropdown">
            <button class="dropbtn">
              <SlArrowDown className="sl" />
            </button>
            <div class="dropdown-content">
              <a href="#" className="a1">
                Link 1
              </a>
              <a href="#" className="a1">
                Link 2
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
