import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Game.css";
import Card from "./Card";

import { data } from "../Data/data";
const Game = () => {
  const navigate = useNavigate();

  const [leftOpen, setLeftOpen] = useState(null);
  const [rightOpen, setRightOpen] = useState(null);

  const [matched, setMatched] = useState([]);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    if (points === 5) {
      navigate("/finish");
    }
  }, [points]);

  useEffect(() => {
    if (leftOpen !== null && rightOpen !== null) {
      console.log(leftOpen, rightOpen);
      if (leftOpen === rightOpen) {
        setPoints((prev) => prev + 1);
        setTimeout(() => {
          setMatched((prev) => [...prev, leftOpen]);
          setLeftOpen(null);
          setRightOpen(null);
        }, 1000);
      } else {
        setTimeout(() => {
          setLeftOpen(null);
          setRightOpen(null);
          alert("Not matched");
        }, 1000);
      }
    }
  }, [leftOpen, rightOpen]);

  const handleLeftClick = (index) => {
    setLeftOpen((prev) => (prev === index ? null : index));
  };

  const handleRightClick = (index) => {
    setRightOpen((prev) => (prev === index ? null : index));
  };

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
                  <Card
                    color="red"
                    val={index}
                    value={item.value}
                    image={item.image}
                    isOpen={leftOpen === item.value}
                    onClick={() => handleLeftClick(item.value)}
                    visible={matched.includes(item.value)}
                  />
                </div>
              );
            })}
          </div>
          <div className="gright">
            {data.right.map((item, index) => {
              return (
                <div key={index} className="gcard">
                  {/* <img src={item.image} alt={item.value} /> */}
                  <Card
                    color="blue"
                    value={item.value}
                    image={item.image}
                    isOpen={rightOpen === item.value}
                    onClick={() => handleRightClick(item.value)}
                    visible={matched.includes(item.value)}
                  />
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
