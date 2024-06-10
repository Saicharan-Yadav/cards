import "./App.css";
import Card from "./Card.jsx";
import { useEffect, useState } from "react";

const leftArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const rightArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Play() {
  const [leftOpen, setLeftOpen] = useState(null);
  const [rightOpen, setRightOpen] = useState(null);

  const [matched, setMatched] = useState([]);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    if (points === 7) {
      alert("You won");
    }
  }, [points]);

  useEffect(() => {
    if (leftOpen !== null && rightOpen !== null) {
      console.log(leftOpen, rightOpen);
      if (leftOpen === rightOpen) {
        setPoints((prev) => prev + 1);
        setMatched((prev) => [...prev, leftOpen]);
        setTimeout(() => {
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
    <div className="main">
      <div className="left">
        {leftArr.map((item, index) => (
          <Card
            key={index}
            val={item}
            isOpen={leftOpen === index}
            onClick={() => handleLeftClick(index)}
            visible={matched.includes(index)}
          />
        ))}
      </div>
      <div className="middle">
        {" "}
        <b>Points</b>
        <h1>{points}</h1>{" "}
      </div>
      <div className="right">
        {rightArr.map((item, index) => (
          <Card
            key={index}
            val={item}
            isOpen={rightOpen === index}
            onClick={() => handleRightClick(index)}
            visible={matched.includes(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Play;
