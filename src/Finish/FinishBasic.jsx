import React from "react";
import "./Finish.css";
import { useNavigate } from "react-router-dom";

const FinishBasic = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="fcontainer">
        <div className="header">
          <button>
            <img src="./Assets/back.png" alt="back" />
          </button>
        </div>
        <div className="content">content</div>
      </div>
    </>
  );
};

export default FinishBasic;
