import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <section className="map__section">
      <div className="map__wrapper">
        <div className="about__title map__section__title">
          <div>05</div>
          <div className="underline"></div>
          <div className="about__heading"> Our location</div>
        </div>
        <div className="mapElement__wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6316933663115!2d36.75705937495387!3d-1.3974263985893667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f05c2b235ded3%3A0x2eb3e0528329a0e!2sTyme%20Arcade%2C%20Magadi%20Rd%2C%20Ongata%20Rongai!5e0!3m2!1sen!2ske!4v1691593085865!5m2!1sen!2ske"
          loading="lazy"
          className="map"
        ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
