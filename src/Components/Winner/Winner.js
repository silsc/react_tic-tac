import "./winner.scss";

import React from "react";
import {AttentionSeeker, Fade} from "react-awesome-reveal";
import {useLocation} from "react-router-dom";

import winnerImg from "../../assets/winner.svg";

export default function Winner() {
  const location = useLocation();
  const winner = location.state.winner;

  return (
    <section className="results__winner">
      <AttentionSeeker effect={"bounce"}>
        <h1 className="winner-title">And the winner is...</h1>
      </AttentionSeeker>

      <Fade delay={200} className="width-100">
        <AttentionSeeker effect={"tada"} delay={300} className="width-100">
          <h1 className="winner-name width-100">{winner}</h1>
        </AttentionSeeker>
      </Fade>

      <Fade delay={400}>
        <AttentionSeeker effect={"tada"}>
          <img src={winnerImg} className="winner-img" alt="Winner" />
        </AttentionSeeker>
      </Fade>
    </section>
  );
}
