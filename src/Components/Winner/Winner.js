import React from "react";
import { useLocation } from 'react-router-dom';
import "./winner.scss"
import winnerImg from "../../assets/winner.svg";


export default function Winner() {
  const location = useLocation()
  const winner = location.state.winner;

  return ( 
    <section className="results__winner">
      <h1 className="winner-title">And the winner is...</h1>
      <h1 className="winner-name">{winner}</h1>
      <img src={winnerImg} className="winner-img" alt="Winner" />
    </section>
  )
}