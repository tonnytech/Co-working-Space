import "./about.css";
import aboutImage from "../../images/aboutImage.jpg";

import React from "react";

const About = () => {
  return (
    <section className="about__section">
      <div className="about__imageContainer">
        <img src={aboutImage} className="about__imageElement" />
      </div>
      <div className="about__infoContainer">
        <div className="about__title">
          <div className="about__headingNumber">02</div>
          <div className="underline"></div>
          <div className="about__heading"> About us</div>
        </div>
        <div className="about__info">
          <div className="about__infoDetailsContainer">
            <h2> We are build for business</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. 
            </p>
            <p>
            Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <button className="btn"> Contact us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
