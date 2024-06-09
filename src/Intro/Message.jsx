import React from "react";

const containerStyle = {
  position: "relative",
  height: "220px",
  width: "450px",
  top: "17vh",
  left: "50%",
};

const messageStyle = {
  position: "absolute",
  height: "100%",
  width: "100%",
};

const contentStyle = {
  position: "absolute",
  color: "#11AEC6",
  fontFamily: "Nunito",
  padding: "20px",
  margin: "25px",
  fontSize: "30px",
  fontWeight: "800",
};

const Message = (props) => {
  return (
    <div style={containerStyle}>
      <img style={messageStyle} src="./Assets/message.png" alt="message" />
      <div style={contentStyle}>
        <h2>{props.content}</h2>
      </div>
    </div>
  );
};

export default Message;
