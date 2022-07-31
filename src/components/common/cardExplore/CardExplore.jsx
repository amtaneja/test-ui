import React from "react";
import "./cardExplore.css";

const CardExplore = ({ roomData }) => {
  return (
    <div className="card-wrapper-explore">
      <img src={roomData.img} alt="" className="img-explore"></img>
      <div className="details-explore">
        <div>
          <div>{roomData.details}</div>
          <button className="secondary-button">{roomData.price}$</button>
          <button className="secondary-button">
            {roomData.area}m<sup>2</sup>
          </button>
        </div>
        <button className="main-button">Book !</button>
      </div>
    </div>
  );
};

export default CardExplore;
