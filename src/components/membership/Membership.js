import React from "react";
import './membership.css'

const Membership = () => {
  return (
    <section className="membership__section" id="membership">
      <div className="about__title">
        <div>04</div>
        <div className="underline"></div>
        <div className="about__heading"> Membership</div>
      </div>

      <div className="membership__intro">
        <h2>Membership type</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.{" "}
        </p>
      </div>
      <div className="memberhip__info">
        {/* start of membership item */}
        <div className="membership__item">
            <h3>Hourly</h3>
            <p>Reserve a comfortable spot for a delightful hour!</p>
            <h4>@ Ksh 100</h4>
            <button className="btn">Available</button>
        </div>
        {/* end of membership item */}
        {/* start of membership item */}
        <div className="membership__item">
            <h3>Daily</h3>
            <p>Secure your spot for a full day of comfort and convenience!</p>
            <h4>@ Ksh 500</h4>
            <button className="btn">Available</button>
        </div>
        {/* end of membership item */}
        {/* start of membership item */}
        <div className="membership__item">
            <h3>weekly</h3>
            <p>Elevate your experience with a reserved seat for an entire week!</p>
            <h4>@ Ksh 2,000</h4>
            <button className="btn">Available</button>
        </div>
        {/* end of membership item */}
        {/* start of membership item */}
        <div className="membership__item">
            <h3>Monthly</h3>
            <p>Embark on a month-long journey of comfort and luxury by reserving your exclusive seat today!</p>
            <h4>@ Ksh 6,000</h4>
            <button className="btn">Available</button>
        </div>
        {/* end of membership item */}
      </div>
    </section>
  );
};

export default Membership;
