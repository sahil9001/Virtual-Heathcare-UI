import React from "react";
import "./healthcare.css";
import illustration02 from "../../assets/illustration02.svg";
const Healthcare = () => {
  return (
    <div className="trfg__healthcare section__padding">
      <div className="trfg__healthcare-container">
        <div className="trfg__healthcare-image">
          <img src={illustration02} alt="illustration" />
        </div>
        <div className="trfg__healthcare-content">
          <div className="trfg__healthcare-content-flex">
            <div className="trfg__healthcare-content-heading">
              <h1> Leading healthcare providers</h1>
            </div>
            <div className="trfg__healthcare-content-dash" />
            <div className="trfg__healthcare-content-subheading">
              <p>
              Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
in the solutions we deliver
              </p>
            </div>
            <div className="trfg__healthcare-content-button">
              <button type="button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Healthcare;
