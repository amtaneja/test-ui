import React from "react";
import Navbar from "../navbar/Navbar";
import "./home.css";

const MainScreen = () => {
  return (
    <div className="main">
      <div className="navbar">
        <Navbar navType="main" />
      </div>
      <div className="heading">
        <h1>Rethink your living & renting</h1>
      </div>
      <div className="sub-heading">Make your stay painless with us.</div>
      <div className="inputBox">
        <div className="button">
          <label>CITY</label>
          <input placeholder="Select your city" />
        </div>
        <div className="button">
          <label>DATES</label>
          <input placeholder="Select your dates" />
        </div>
        <div className="button">
          <label>GUESTS</label>
          <input placeholder="Select your guests" />
        </div>
        <div className="button search">Search</div>
      </div>
    </div>
  );
};

export default MainScreen;
