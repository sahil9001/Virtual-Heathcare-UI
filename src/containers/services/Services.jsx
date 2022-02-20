import React from "react";
import { Servicescard } from "../../components";
import "./services.css";
import {
  services01,
  services02,
  services03,
  services04,
  services05,
  services06,
} from "./imports";
const Services = () => {
  return (
    <div className="trfg__services section__padding">
      <div className="trfg__services-container">
        <div className="trfg__services-content">
          <div className="trfg__services-content__title">
            <h1>Our services</h1>
          </div>
          <div className="trfg__services-content__dash" />
          <div className="trfg__services-content__subtitle">
            <p>
              We provide to you the best choiches for you. Adjust it to your
              health needs and make sure your undergo treatment with our highly
              qualified doctors you can consult with us which type of service is
              suitable for your health
            </p>
          </div>
        </div>
        <div className="trfg__services-list">
          <div className="trfg__services-list__item">
            <Servicescard
              imgurl={services01}
              title="Search doctor"
              subtitle="Choose your doctor from thousands of specialist, general, and trusted hospitals"
            />
          </div>
          <div className="trfg__services-list__item">
            <Servicescard
              imgurl={services02}
              title="Online pharmacy"
              subtitle="Buy your medicines with our mobile application with a simple delivery system"
            />
          </div>
          <div className="trfg__services-list__item">
            <Servicescard
              imgurl={services03}
              title="Consultation"
              subtitle="Free consultation with our trusted doctors and get the best recomendations"
            />
          </div>
          <div className="trfg__services-list__item">
            <Servicescard
              imgurl={services04}
              title="Details info"
              subtitle="Free consultation with our trusted doctors and get the best recomendations"
            />
          </div>
          <div className="trfg__services-list__item">
            <Servicescard
              imgurl={services05}
              title="Emergency care"
              subtitle="You can get 24/7 urgent care for yourself or your children and your
              lovely family"
            />
          </div>
          <div className="trfg__services-list__item">
            <Servicescard
              imgurl={services06}
              title="Tracking"
              subtitle="Track and save your medical history and health data "
            />
          </div>
        </div>
        <div className="trfg__services-button">
          <button type="button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
