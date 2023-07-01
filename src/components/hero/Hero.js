import React from "react";
import "./Hero.css";
import videoDisplay from "../../videos/connect.mp4";

const Hero = () => {
  return (
    <section className="hero__section">
      <div className="hero__info">
        <div className="hero__infoContainer">
          <h1 className="hero__heading">
            <span className="hero__headingOne">Meet your</span>
            <span className="hero__headingTwo">New Office</span>
          </h1>
          <p className="hero__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          {/* social icons */}
          <ul className="social-icons">
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                {" "}
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                {" "}
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                {" "}
                <i className="fab fa-squarespace"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                {" "}
                <i className="fab fa-behance"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                className="social-icon"

              >
                {" "}
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
          <div className="hero__buttonContainer">
            <button className="btn">contact us</button>
            <button className="btn">whatsapp</button>
          </div>
        </div>
      </div>
      <div className="hero__video">
        <div className="hero__videoContainer">
          <video
            controls
            autoPlay
            muted
            loop
            className="connect__videoElement"
            poster=""
          >
            <source src={videoDisplay} /> sorry your browser does not support
            embedded video
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
