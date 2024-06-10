import React from "react";
import "./Explanation.css";

const Ec = () => {
  return (
    <>
      <div className="emain">
        <div className="econtainer">
          <div className="ercontainer">
            <div className="eimg">
              {/* <img className="eimg1" src="../Assets/explain11.png" alt="e2" /> */}
              <img className="eimg2" src="../Assets/explain1.png" alt="e2" />
            </div>
            <div className="econtent">
              {/* <div className="eline">
                <img src="./Assets/line.png" alt="eline" />
              </div> */}
              <div className="ocontent">
                <div className="enum">01</div>
                <div className="tcontent">
                  <div className="eheading">Lorem ipsum consectetur</div>
                  <div className="esubheading">iure non gertos.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ec;
