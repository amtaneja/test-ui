import React, { useState } from "react";
import "./navbar.css";

const Navbar = ({ navType }) => {
  const [isMobile, setIsMobile] = useState(false);
  const isFooter = navType === "footer";

  return (
    <nav className={isFooter ? "main-nav-footer" : "main-nav"}>
      <div className={isFooter ? "logo-footer" : "logo"}>
        <h2>Aman Taneja</h2>
      </div>
      <div
        className={
          isFooter
            ? "menu-links-footer"
            : isMobile
            ? "mobile-links"
            : "menu-links"
        }
      >
        <ul>
          <li>
            <a href="/about">Explore</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/about">Cities</a>
          </li>
          <li>
            <button className={isFooter ? "btn-footer default" : "btn default"}>
              Call
            </button>
          </li>
        </ul>
      </div>
      {!isFooter && (
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      )}
    </nav>
  );
};

export default Navbar;
