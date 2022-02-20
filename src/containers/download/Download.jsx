import React from "react";
import "./download.css";
import illustration03 from '../../assets/illustration03.svg';
const Download = () => {
  return  <div className="trfg__download section__padding">
  <div className="trfg__download-container">
    
    <div className="trfg__download-content">
      <div className="trfg__download-content-flex">
        <div className="trfg__download-content-heading">
          <h1> Download our 
mobile apps</h1>
        </div>
        <div className="trfg__download-content-dash" />
        <div className="trfg__download-content-subheading">
          <p>
          Our dedicated patient engagement app and 
web portal allow you to access information instantaneously (no tedeous form, long calls, 
or administrative hassle) and securely
          </p>
        </div>
        <div className="trfg__download-content-button">
          <button type="button">Download</button>
        </div>
      </div>
    </div>
    <div className="trfg__download-image">
      <img src={illustration03} alt="illustration" />
    </div>
  </div>
</div>;
};

export default Download;
