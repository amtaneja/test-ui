import React from "react";
import "./cardAbout.css";

const CardAbout = ({ aboutData }) => {
  return (
    <div className="card-wrapper-about">
      <img src={aboutData.img} alt="" className="img-about"></img>
      <div className="details-about ">
        <h3 className="about-cardheading">Chapter {aboutData.chapter}</h3>
        <div>{aboutData.details}</div>
      </div>
    </div>
  );
};

export default CardAbout;
