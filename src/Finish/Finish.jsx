import React from "react";
import { useNavigate } from "react-router-dom";
import Basic from "../Intro/Basic";
import "../Intro/Home.css";
// import FinishBasic from "./FinishBasic";

const Finish = () => {
  const navigate = useNavigate();
  return (
    <>
      <Basic content="Congratulations! You have successfully completed the game." />
      <button onClick={() => navigate("/play")}>
        <img className="back" src="./Assets/back.png" alt="back" />{" "}
      </button>
      <div className="level">
        <img src="./Assets/completed.png" alt="levelintro" />
        <div className="greybanana">
          <img
            className="banana"
            src="./Assets/yellowbanana.png"
            alt="yellowbanana"
          />
        </div>
      </div>
      {/* <img className="finish" src="./Assets/final.png" alt="finish" /> */}
    </>
  );
};

export default Finish;
