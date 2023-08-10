import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="opening_days">
          <ul>
            <li> <h3>Opening days:</h3> <span>Monday-Saturday</span></li>
            <li>Opening time: 8am-8pm</li>
          </ul>
          <hr className="divider"/>
        </div>
        
        <div className="footer_contacts">
          <ul>
            <li><h3>Contact Us:</h3></li>
            <li>cell1: +254 799448839</li>
            <li>cell2: +254 708 864 510</li>
          </ul>
          <hr className="divider"/>
        </div>
        
        <div className="footer_location">
          <ul>
            <li><h3>Location:</h3></li>
            <li>3rd Floor, Room 306, TYME SUITES,</li>
            <li>Opp Ongata Mall, Next To ABSA BANK,</li>
            <li>Magadi Road, Ongata Rongai.</li>
          </ul>
          <hr className="divider"/>
        </div>
        
        <div className="footer_logo_and_icons">
          <ul>
            {/* <li>co-working logo</li> */}
            <li>
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
            </li>
          </ul>
          <hr className="divider"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
