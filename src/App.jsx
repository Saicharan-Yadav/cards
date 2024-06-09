import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Intro/Home";
import Next from "./Intro/Next";
import Yes from "./Intro/Yes";
import Play from "./Game/Play";
import Finish from "./Finish/FinishBasic";
import NotFound from "./NotFound/NotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/intro1" element={<Next />} />
          <Route exact path="/intro2" element={<Yes />} />
          <Route exact path="/game" element={<Play />} />
          <Route exact path="/finish" element={<Finish />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
