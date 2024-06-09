import React from "react";
import "./Home.css";
import Message from "./Message";
import Basic from "./Basic";
import Button from "./Button";

function Home() {
  return (
    <>
      <div className="whole">
        <Basic content="Welcome Kiddo!" />
        <Button content="start" />
      </div>
    </>
    //     <>
    //     <div className="whole">
    //       <img className="cover" src="./Assets/background.png" alt="bg" />

    //       <button>
    //         <img className="back" src="./Assets/back.png" alt="back" />
    //       </button>

    //       <div className="level">
    //         <img src="./Assets/level.png" alt="levelintro" />
    //         <div className="greybanana">
    //           <img
    //             className="banana"
    //             src="./Assets/greybanana.png"
    //             alt="greybanana"
    //           />
    //         </div>
    //       </div>
    //       <img className="monkey" src="./Assets/monkey.png" alt="monkey" />
    //       {/* <img className="message" src="./Assets/message.png" alt="message" /> */}
    //       <Message content="Welcome Kiddo!" />

    //       <button>
    //         <img className="button" src="./Assets/start.png" alt="startbtn" />
    //       </button>
    //     </div>
    //   </>
  );
}

export default Home;
