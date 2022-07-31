import React from "react";
import "./navbar.css";

const Navbar = ({ navType }) => {
  const isFooter = navType === "footer";
  console.log(navType);
  return (
    <nav className={isFooter ? "main-nav-footer" : "main-nav"}>
      <div className={isFooter ? "logo-footer" : "logo"}>
        <h2>Aman Taneja</h2>
      </div>
      <div className={isFooter ? "menu-links-footer" : "menu-links"}>
        <ul className="links">
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
    </nav>
  );
};

export default Navbar;
