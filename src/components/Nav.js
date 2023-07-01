import React, { useState } from "react";

const Nav = () => {
    const [Sidebar, setSidebar] = useState(false);
    const [scroll, setScroll] = useState(false);

    // react scroll event
    // const navbar = document.querySelector("#nav");
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 80) {
            setScroll(true); 
        }
        if(window.pageYOffset <= 80){
            setScroll(false)
        } 
      });

    let scrollStyle;
      if(scroll) {
scrollStyle= 'nav navbar-fixed'
      } else {
        scrollStyle = "nav"
      }
     // nav bar side bar

  const toggleSidebar = () => {
    setSidebar(!Sidebar);
  };
  let sidebarClass;
  if (Sidebar) {
    sidebarClass = "sidebar show-sidebar";
  } else {
    sidebarClass = "sidebar";
  }
  return (
    <>
      <nav className={scrollStyle} id="nav">
        <div className="nav-center">
          {/* nav header */}
          <div className="nav-header">
            <div alt="logo" className="nav-logo">Co working space</div>
            <button className="nav-btn" id="nav-btn" onClick={toggleSidebar}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* nav links */}
          <ul className="nav-links">
            <li>
              <a href="#"> home</a>
            </li>
            <li>
              <a href="#"> about</a>
            </li>
            <li>
              <a href="#"> projects</a>
            </li>
            <li>
              <a href="#"> contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <aside className={sidebarClass} id="sidebar">
        <div className="">
          <button className="close-btn" id="close-btn" onClick={toggleSidebar}>
            <i className="fas fa-times"></i>
          </button>
          <ul className="sidebar-links">
            <li>
              <a href="#" onClick={toggleSidebar}>
                {" "}
                home
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleSidebar}>
                {" "}
                about
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleSidebar}>
                {" "}
                projects
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleSidebar}>
                {" "}
                contact
              </a>
            </li>
          </ul>
          {/* social icons */}
          <ul className="social-icons">
            <li>
              <a
                href="https://www.twitter.com"
                className="social-icon"
                onClick={toggleSidebar}
              >
                {" "}
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                className="social-icon"
                onClick={toggleSidebar}
              >
                {" "}
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                className="social-icon"
                onClick={toggleSidebar}
              >
                {" "}
                <i className="fab fa-squarespace"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                className="social-icon"
                onClick={toggleSidebar}
              >
                {" "}
                <i className="fab fa-behance"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                className="social-icon"
                onClick={toggleSidebar}
              >
                {" "}
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </aside>

    
    </>
  );
};

export default Nav;
