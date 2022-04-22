import React from "react";
import "./square.scss"


export default function Square({ value, cantclick, onClickEvent, addClass}) {
  
  return ( 
    <button 
      className={`game__square ${addClass}`}
      onClick={onClickEvent}
      disabled ={value != null || cantclick === true ? "disable" : ""}
      >
      {value === null ? null : <img src={value} className="player-token" alt="Player" /> }
    </button>
  )
}