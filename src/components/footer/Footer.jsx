import React from "react";
import "./footer.css";
import Navbar from "../navbar/Navbar";

const Footer = () => {
  return (
    <div className="footer-container">
      <Navbar navType="footer" />
      <span className="footer-text">
        &copy;2021 company name All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
