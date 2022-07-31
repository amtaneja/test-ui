import React from "react";
import CardExplore from "../common/cardExplore/CardExplore";
import "./explore.css";
import { roomData } from "../../utils/dataUtils";

const Explore = () => {
  return (
    <div className="explore-container">
      <h1 className="explore-heading">Explore</h1>
      <div className="explore-subheading">
        From one-guest rooms to <br></br>penthouses with pools and gardens.
      </div>
      <div className="cards-container-explore">
        {roomData &&
          roomData.map((data, index) => {
            return <CardExplore roomData={data} key={index} />;
          })}
      </div>
    </div>
  );
};

export default Explore;
