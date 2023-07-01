import React from "react";
import './membership.css'

const Membership = () => {
  return (
    <section className="membership__section">
      <div className="about__title">
        <div>03</div>
        <div className="underline"></div>
        <div className="about__heading"> Membership</div>
      </div>

      <div className="membership__intro">
        <h1>Membership type</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.{" "}
        </p>
      </div>
      <div className="memberhip__info">
        {/* start of membership item */}
        <div className="membership__item">
            <h5>Hourly</h5>
            <p>Lorem Ipsum is simply dummy text of the</p>
            <h5>@ Ksh 100</h5>
            <button className="btn">Available</button>
        </div>
        {/* end of membership item */}
        {/* start of membership item */}
        <div className="membership__item">
            <h5>Daily</h5>
            <p>Lorem Ipsum is simply dummy text of the</p>
            <h5>@ Ksh 500</h5>
            <button className="btn">Available</button>
        </div>
        {/* end of membership item */}
        {/* start of membership item */}
        <div className="membership__item">
            <h5>weekly</h5>
            <p>Lorem Ipsum is simply dummy text of the</p>
            <h5>@ Ksh 2000</h5>
            <button className="btn">Available</button>
        </div>
        {/* end of membership item */}
        {/* start of membership item */}
        <div className="membership__item">
            <h5>Monthly</h5>
            <p>Lorem Ipsum is simply dummy text of the</p>
            <h5>@ Ksh 6000</h5>
            <button className="btn">Available</button>
        </div>
        {/* end of membership item */}
      </div>
    </section>
  );
};

export default Membership;
