import React from "react";
import "./Finish.css";
import { useNavigate } from "react-router-dom";

const FinishBasic = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="whole">
        <div className="header">
          <div className="hbutton">
            <button onClick={() => navigate("/game")}>
              <img src="./Assets/back.png" alt="" />
            </button>
          </div>
          <div className="hlevel">
            <div className="hbar">
              <img src="./Assets/completed.png" alt="" />
            </div>
            <div className="hbanana">
              <img src="./Assets/yellowbanana.png" alt="" />
            </div>
          </div>
        </div>
        <div className="content">
          <div className="reward" onClick={() => alert("Congo")}>
            <img src="./Assets/final.png" alt="" />
          </div>
          <div className="happymonkey">
            <img src="./Assets/happymonkey.png" alt="" />
          </div>
          {/* <div className="celebrations">
            <img src="./Assets/yellowbanana.png" alt="" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default FinishBasic;
