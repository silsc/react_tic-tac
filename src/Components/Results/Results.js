import React from "react";
import { useLocation } from 'react-router-dom';
import "./results.scss";
import Header from "../Header/Header";
import Winner from "../Winner/Winner";
import Nomovements from "../Nomovements/Nomovements";

export default function Results() {
  const location = useLocation()
  const winner = location.state.winner;
  let content
  if(winner) {
    content = <Winner winner={winner}/>
  } else {
    content = <Nomovements/>
  }

  return ( 
    <div className="results__page">
      <Header/>
      {content}
    </div>
  )
}