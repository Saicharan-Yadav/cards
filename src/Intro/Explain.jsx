import React from "react";
import "../Finish/Finish.css";
import { data } from "../Data/data";

import { useNavigate } from "react-router-dom";
import ExplainCard from "./ExplainCard";

const Explain = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="whole">
        <div className="header">
          <div className="hbutton">
            <button onClick={() => navigate("/intro2")}>
              <img src="./Assets/back.png" alt="" />
            </button>
          </div>
          <div className="hlevel">
            <div className="hbar">
              <img src="./Assets/level.png" alt="level" />
            </div>
            <div className="hbanana">
              <img src="./Assets/greybanana.png" alt="greybanana" />
            </div>
          </div>
        </div>
        <div className="expcontent">
          {data.explain.map((item, index) => {
            return (
              <ExplainCard
                num={item.num}
                scontent={item.scontent}
                mcontent={item.mcontent}
                image={item.image}
              />
            );
          })}
        </div>
        <div className="footer">
          <div className="fbutton">
            <button onClick={() => navigate("/game")}>
              <img src="./Assets/play.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explain;
