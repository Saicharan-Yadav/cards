import React from "react";
import { useNavigate } from "react-router-dom";
import "./Game.css";
import Card from "./Card";

import { data } from "../Data/data";
const Game = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="gcontainer">
        <img
          className="background-image"
          src="./Assets/background.png"
          alt="gb"
        />
        <div className="gheader">
          <div className="gback">
            <button onClick={() => navigate("/intro2")}>
              <img src="./Assets/back.png" alt="" />
            </button>
          </div>
          <div className="glevel">
            <div className="gbar"></div>
            <div className="gbanana"></div>
          </div>
        </div>
        <div className="gcontent">
          <div className="gleft">
            {data.left.map((item, index) => {
              return (
                <div key={index} className="gcard">
                  {/* <img src={item.image} alt={item.value} /> */}
                  <Card color="red" value={item.value} image={item.image} />
                </div>
              );
            })}
          </div>
          <div className="gright">
            {data.right.map((item, index) => {
              return (
                <div key={index} className="gcard">
                  {/* <img src={item.image} alt={item.value} /> */}
                  <Card color="blue" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
