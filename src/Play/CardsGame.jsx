import React, { useState, useEffect } from "react";
import Game from "./Game";
import { data } from "../Data/data";

const CardsGame = () => {
  const [leftData, setLeftData] = useState(data.left);
  const [rightData, setRightData] = useState(data.right);

  useEffect(() => {
    const shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    setLeftData(shuffle(leftData));
    setRightData(shuffle(rightData));
  }, []);

  return (
    <>
      <Game left={leftData} right={rightData} />
    </>
  );
};

export default CardsGame;
