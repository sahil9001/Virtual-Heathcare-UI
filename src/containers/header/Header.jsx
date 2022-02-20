import React from "react";
import "./header.css";
import illustration01 from "../../assets/illustration01.svg";
const Header = () => {
  return (
    <div className="trfg__header section__padding">
      <div className="trfg__header-container">
        <div className="trfg__header-content">
          <div className="trfg__header-content-flex">
            <div className="trfg__header-content-heading">
              <h1> Virtual healthcare for you</h1>
            </div>
            <div className="trfg__header-content-subheading">
              <p>
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
            </div>
            <div className="trfg__header-content-button">
              <button type="button">Consult today</button>
            </div>
          </div>
        </div>
        <div className="trfg__header-image">
          <img src={illustration01} alt="illustration" />
        </div>
      </div>
    </div>
  );
};

export default Header;
