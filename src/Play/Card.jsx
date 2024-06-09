import React from "react";
import "./Card.css";

const Card = (props) => {
  let grad = "";
  let shadow = "";
  console.log(props);
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
    <>
      <div className="gmain" on>
        <div className="rect1" style={{ background: grad }}>
          <div className="rect2">
            <div className="mainheart" style={{ boxShadow: shadow }}>
              <div className="heart">
                <img src="./Assets/love.png" alt="love" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
