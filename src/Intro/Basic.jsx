import React from "react";
import "./Home.css";
import Message from "./Message";
import MonkeyMessage from "./MonkeyMessage";

const Basic = (props) => {
  return (
    <>
      <img className="cover" src="./Assets/background.png" alt="bg" />
      <MonkeyMessage />
      <Message content={props.content} />
    </>
  );
};

export default Basic;
