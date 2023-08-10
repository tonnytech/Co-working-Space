import "./about.css";
import aboutImage from "../../images/aboutImage.jpg";

import React from "react";

const About = () => {
  return (
    <section className="about__section" id="about">
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
            Empower your business at Rongai Coworking. Designed for success with a serene ambiance,
             dedicated workspaces, and uninterrupted power – your ideal professional hub awaits. 
            </p>
            <p>
            Experience seamless connectivity with our blazing-fast 
            internet, propelling your productivity at Rongai Coworking.
            </p>
            <button className="btn"> Contact us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
