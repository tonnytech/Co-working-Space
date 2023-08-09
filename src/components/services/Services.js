import React from "react";
import serviceImage from "../../images/aboutImage.jpg";
import "./services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services__infoContainer">
        <div className="services__title">
          <div className="services__numbers">03</div>
          <div className="underline"></div>
          <div className="services__heading"> Our services</div>
        </div>
        <div className="services__titleAndParagraph">
          <h2>Your comfort is our priority</h2>
          <p>
          Indulge in productivity and relaxation at 
          our premium coworking space. Elevating your workday,
           we ensure top-notch comfort and lightning-fast internet,
            because your comfort is our unwavering commitment.
          </p>
          <p>
          Experience seamless workdays with our exceptional amenities.
          </p>
        </div>
        <div className="services__grid">
          {/* start of element */}
          <div className="services__gridElement">
            <div className="services__ElementIcon">
            <i className="fas fa-bars"></i>
            </div>
            <p className="services__iconName">seren environment</p>
          </div>
          {/* end of element */}
          {/* start of element */}
          <div className="services__gridElement">
            <div className="services__ElementIcon">
              <i className="fas fa-bars"></i>
            </div>
            <p className="services__iconName">fast internet</p>
          </div>
          {/* end of element */}
          {/* start of element */}
          <div className="services__gridElement">
            <div className="services__ElementIcon">
              <i className="fas fa-bars"></i>
            </div>
            <p className="services__iconName">backup genertor</p>
          </div>
          {/* end of element */}
          {/* start of element */}
          <div className="services__gridElement">
            <div className="services__ElementIcon">
              <i className="fas fa-bars"></i>
            </div>
            <p className="services__iconName">IT support</p>
          </div>
          {/* end of element */}
          {/* start of element */}
          <div className="services__gridElement">
            <div className="services__ElementIcon">
              <i className="fas fa-bars"></i>
            </div>
            <p className="services__iconName">Refreshments</p>
          </div>
          {/* end of element */}
          {/* start of element */}
          <div className="services__gridElement">
            <div className="services__ElementIcon">
              <i className="fas fa-bars"></i>
            </div>
            <p className="services__iconName">icon name</p>
          </div>
          {/* end of element */}
          {/* start of element */}
          <div className="services__gridElement">
            <div className="services__ElementIcon">
              <i className="fas fa-bars"></i>
            </div>
            <p className="services__iconName">icon name</p>
          </div>
          {/* end of element */}
          {/* start of element */}
          <div className="services__gridElement">
            <div className="services__ElementIcon">
              <i className="fas fa-bars"></i>
            </div>
            <p className="services__iconName">icon name</p>
          </div>
          {/* end of element */}
        </div>
      </div>
      <div className="services__imageContainer">
        <div className="services__imageElementContainer">
        <img
          src={serviceImage}
          alt="services__Image"
          className="services__Image"
        />
        </div>
      </div>
    </section>
  );
};

export default Services;
