import React from "react";
import "./servicescard.css";
const Servicescard = ({ imgurl, title, subtitle }) => {
  return (
    <div className="trfg__servicescard">
      <div className="trfg__servicescard-container">
        <div className="trfg__servicescard-container__image">
          <img src={imgurl} alt="image" />
        </div>
        <div className="trfg__servicescard-container__content">
          <div className="trfg__servicescard-container__content__title">
            <h1>{title}</h1>
          </div>
          <div className="trfg__servicescard-container__content__subtitle">
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicescard;
