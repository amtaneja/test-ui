import React from "react";
import CardAbout from "../common/cardAbout/CardAbout";
import "./about.css";
import { aboutData } from "../../utils/dataUtils";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <div className="about-subheading">
        Allow us to tell you a short story.
      </div>
      <div className="cards-container-about">
        {aboutData &&
          aboutData.map((data, index) => {
            return <CardAbout aboutData={data} key={index} />;
          })}
      </div>
    </div>
  );
};

export default AboutUs;
