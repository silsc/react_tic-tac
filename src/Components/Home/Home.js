import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./home.scss"
import logoXl from "../../assets/logo-xl.png"
import vs from "../../assets/vs.png"
import player1Img from "../../assets/player1.png"
import player2Img from "../../assets/player2.png"

export default function Home() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [disableInput, setDisableInput] = useState(false);
  const [submitValue1, setSubmitValue1] = useState("Submit your name");
  const [submitValue2, setSubmitValue2] = useState("Submit your name");
  const navigate = useNavigate();

  function submitPlayer1(e) {
    e.preventDefault();
    if(e.target.player1name.value !== null && e.target.player1name.value !== "" ) {
      setPlayer1(`${e.target.player1name.value}`);
      setSubmitValue1("I am ready");
      setDisableInput(true);
    }
  }

  function submitPlayer2(e) {
    e.preventDefault();
    if(e.target.player2name.value !== null && e.target.player2name.value !== "" ) {
      setPlayer2(`${e.target.player2name.value}`);
      setSubmitValue2("I am ready");
      setDisableInput(true);
    }
  }

  function toGame() {
    navigate('/game',{state:{player1: player1 ,player2: player2}});
  }

  return (
    <div className='home__page'>
      <header className='home__header'>
        <img src={logoXl} className="logo-xl" alt="Big Logo" />
      </header>
      <div className='home__container'>
        <div className='home__forms__container'>
          <div className='home__form__player'>
            <img src={player1Img} className="player-img player1-img" alt="Player 1" />
            <form onSubmit={submitPlayer1}>
            <label htmlFor="player1name" className='player1-label'>Player 1</label>
            <input
              className="input-field"
              type="text"
              name="player1name"
              disabled={`${ player1 !== "" && disableInput ? "disabled" : ""}`}
              placeholder="Insert your warrior name"
            />
            <input 
              type="submit"
              className={`btn player1-btn ${ submitValue1 === "Submit your name" ? "btn-red" : "btn-green"}`} 
              disabled={`${ player1 !== "" && disableInput ? "disabled" : ""}`}
              value={submitValue1} />
            </form>
          </div>
          <div className='home__vs'>
            <img src={vs} className="vs-img" alt="vs img" />
          </div>
          <div className='home__form__player'>
            <img src={player2Img} className="player-img player2-img" alt="Player 1" />
            <form onSubmit={submitPlayer2}>
            <label htmlFor="player2name" className='player2-label'>Player 2</label>
              <input
                className="input-field"
                type="text"
                name="player2name"
                disabled={`${ player2 !== "" && disableInput  ? "disabled" : ""}`}
                placeholder="Insert your warrior name"
              />
              <input 
                type="submit" 
                className={`btn ${ submitValue2 === "Submit your name" ? "btn-red" : "btn-green"}`}
                disabled={`${ player2 !== "" && disableInput  ? "disabled" : ""}`}
                value={submitValue2}
              />
            </form>
          </div>
        </div>
        <a onClick={()=>{toGame()}}>
          <button 
            className={`${ player2 === "" || player1 === ""  ? "tooltip-btn disabled-btn" : ""} btn btn-start `} 
            disabled={`${ player2 === "" || player1 === ""  ? "disabled" : ""}`}>
                  Start game
              <span className="tooltiptext-btn">Please submit a name before starting the game</span>
          </button>
        </a>
      </div>
    </div>
  )
}