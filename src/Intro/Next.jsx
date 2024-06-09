import React from "react";
import Basic from "./Basic";
import Button from "./Button";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Next = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="whole">
        <Basic content="Hi ,I am Mizo and I love bananas " />
        <button onClick={() => navigate("/")}>
          <img className="back" src="./Assets/back.png" alt="back" />{" "}
        </button>
        <Button content="next" />
      </div>
    </>
  );
};

export default Next;
