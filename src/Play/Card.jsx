import React, { useState, useEffect } from "react";
import "./Card.css";

const Card = (props) => {
  let rimg = "./Assets/love.png";
  let rdim = {
    width: "64px",
    heigth: "56px",
  };

  if (props.isOpen) {
    rimg = props.image;
    rdim = {
      width: "100%",
      height: "100%",
    };
  }

  let grad = "";
  let shadow = "";

  if (props.color === "red") {
    grad =
      "linear-gradient(180deg, #fba8c1 0%, rgba(251, 168, 193, 0.54) 46%, rgba(251, 168, 193, 0.97) 100%)";
    shadow = "0px 4px 17.2px 0px rgba(251, 131, 167, 1)";
  } else if (props.color === "blue") {
    grad =
      "linear-gradient(180deg, #a2e3f3 0%, rgba(162, 227, 243, 0.29) 46%, #a2e3f3 100%)";
    shadow = "0px 4px 20.8px 0px rgba(57, 201, 236, 1)";
  }

  return (
    <div className={props.visible ? "invisible" : ""} onClick={props.onClick}>
      <div className="gmain">
        <div className="rect1" style={{ background: grad }}>
          <div className="rect2">
            <div className="mainheart" style={{ boxShadow: shadow }}>
              <div
                className="heart"
                style={{ width: rdim.width, height: rdim.height }}
              >
                <img
                  src={rimg}
                  alt="love"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
