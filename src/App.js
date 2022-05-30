import "./App.scss";

import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Game from "./Components/Game/Game.js";
import Home from "./Components/Home/Home";
import Results from "./Components/Results/Results";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
<Home />} />
        <Route exact path="/game" element={<Game />} />
        <Route exact path="/results" element={
<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
