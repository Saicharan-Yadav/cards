import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Intro/Home";
import Next from "./Intro/Next";
import Yes from "./Intro/Yes";
import Finish from "./Finish/FinishBasic";
import NotFound from "./NotFound/NotFound";
import CardsGame from "./Play/CardsGame";
import Explain from "./Intro/Explain";
// import Ec from "./Intro/Ec";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/intro1" element={<Next />} />
          <Route exact path="/intro2" element={<Yes />} />
          <Route exact path="/intro3" element={<Explain />} />

          <Route exact path="/game" element={<CardsGame />} />
          <Route exact path="/finish" element={<Finish />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
