import React from "react";
import "./Explanation.css";

const ExplainCard = (props) => {
  return (
    <>
      <div className="econtainer">
        <div className="ercontainer">
          <div className="eimg">
            <img src={props.image} alt="e2" />
          </div>
          <div className="econtent">
            <div className="enum">{props.num}</div>
            <div className="tcontent">
              <div className="eheading">{props.mcontent}</div>
              <div className="esubheading">{props.scontent}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExplainCard;
