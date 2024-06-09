import React from "react";
import Basic from "./Basic";
import Button from "./Button";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Yes = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="whole">
        <Basic content="Can you help me get some ? " />
        <button onClick={() => navigate("/intro1")}>
          <img className="back" src="./Assets/back.png" alt="back" />{" "}
        </button>
        <div className="level">
          <img src="./Assets/level.png" alt="levelintro" />
          <div className="greybanana">
            <img
              className="banana"
              src="./Assets/greybanana.png"
              alt="greybanana"
            />
          </div>
        </div>
        <Button content="yes" />
      </div>
    </>
  );
};

export default Yes;
