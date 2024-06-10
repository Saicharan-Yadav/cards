import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  const navigate = useNavigate();
  function fn() {
    if (props.content === "start") {
      navigate("/intro1");
    }
    if (props.content === "next") {
      navigate("/intro2");
    }
    if (props.content === "yes") {
      navigate("/intro3");
    }
    if (props.content === "play") {
      navigate("/game");
    }
  }
  return (
    <>
      <button onClick={fn}>
        <img
          className="button"
          src={`./Assets/${props.content}.png`}
          alt="startbtn"
        />
      </button>
    </>
  );
};

export default Button;
