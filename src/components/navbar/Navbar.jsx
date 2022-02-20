import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">Find a doctor</a>
    </p>
    <p>
      <a href="#possibility">Apps</a>
    </p>
    <p>
      <a href="#features">Testimonials</a>
    </p>
    <p>
      <a href="#blog">About Us</a>
    </p>
  </>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="trfg__navbar">
      <div className="trfg__navbar-links">
        <div className="trfg__navbar-links__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="trfg__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="trfg__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#1F1534"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#1F1534"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="trfg__navbar-menu_container scale-up-center">
            <div className="trfg__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
