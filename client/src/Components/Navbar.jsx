import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LiaTimesSolid } from "react-icons/lia";
import { IoMenu, IoPerson } from "react-icons/io5";
import logo from "../assets/images/logo/logo1.png";
import profilePic from "../assets/images/userProfile.png";
import { ScreenSizeContext } from "./ScreenSizeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const screenSize = useContext(ScreenSizeContext);
  return (
    <>
      <nav
        className={`navbar menuItems ${
          menuOpen && menuOpen
        } fixed top-2 right-1 md:right-2 left-1 md:left-2 h-15 p-4 md:px-8 mx-2 md:mx-6 flex items-center justify-between shadow shadow-lg rounded-xl bg-white`}
      >
        <a href="/" className="logo">
          <img src={logo} alt="logo" className="w-20 md:w-32  h-auto " />
        </a>

        <div
          className="menuBtnDiv"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? (
            <LiaTimesSolid className="menuBtn closeBtn" />
          ) : (
            <IoMenu className="menuBtn openBtn" />
          )}
        </div>

        <ul
          className={`${
            menuOpen ? "menu menuOpen" : "menu"
          } flex items-center space-between gap-6 md:gap-10`}
          onClick={() => setMenuOpen(false)}
        >
          {[
            ["About", "#about", "nav-links", "fa-solid fa-circle-info"],
            ["Service", "#service", "nav-links", "fa-solid fa-briefcase"],
            ["Contact", "#contact", "nav-links", "fa-solid fa-address-book"],
          ].map(([title, url, className, icon]) => (
            <li key={title}>
              <a
                href={url}
                className={`${className} text-lg md:text-3xl font-extrabold hover:text-orange-500 focus:text-orange-500`}
              >
                {title}
              </a>
            </li>
          ))}
          <li>
            <Link to="/signup" className="">
              <img
                src={profilePic}
                className="w-10 rounded-full border hover:border-orange-500 hover:border-4 "
                alt=""
              />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
