import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./board.scss"
import Square from "../Square/Square";
import helpers from "../../helpers";
import player1TokenImg from "../../assets/player1token.png";
import player2TokenImg from "../../assets/player2token.png";

export default function Board() {
  const location = useLocation()
  const player1 = location.state.player1;
  const player2 = location.state.player2;
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [player1IsNext, setPlayer1IsNext] = useState(true);
  
  const navigate = useNavigate();

  const handleClickEvent = (i) => {
    const newSquares = [...squares];
    const winnerDeclared = Boolean(helpers.calculateWinner(newSquares));
    if(winnerDeclared) {
      return
    }
    newSquares[i] = player1IsNext ? player1TokenImg : player2TokenImg;
    setSquares(newSquares);
    setPlayer1IsNext(!player1IsNext);
  }

  const renderSquare = (i, input) => {
    return ( 
      <Square 
        value={squares[i]} 
        onClickEvent={() => {handleClickEvent(i)}}
        addClass={input ? input : ""}
        /> 
    )
  }

  let turn = player1IsNext ? player1 : player2

  if (helpers.calculateWinner(squares) === player1TokenImg ) {
    turn = null;
    setTimeout(() => {
      navigate('/results',{state:{winner: player1}})
    }, 1000);
  } else if (helpers.calculateWinner(squares) === player2TokenImg ){
    turn = null;
    setTimeout(() => {
      navigate('/results',{state:{winner: player2}})
    }, 1000);
  } else if (squares.includes(null) === false) {
    turn = null;
    setTimeout(() => {
      navigate('/results',{state:{winner: null}})
    }, 1000);
  }


  return ( 
    <div className="game__board__container">
        <div className="game__board__info">
          <h1 className={`game__player__turn ${turn ? '' : 'is-hidden'}`}>Your turn:</h1>
          <h1 className={`game__player__name current-gameplayer ${turn ? '' : 'is-hidden'}`}>{turn ? turn : ''}</h1>
        </div>
        <div className="game__board">
          <div className="game__board-row">
            {renderSquare(0, "")} 
            {renderSquare(1, "")} 
            {renderSquare(2, "")} 
          </div>
          <div className="game__board-row">
            {renderSquare(3, "")} 
            {renderSquare(4, "")} 
            {renderSquare(5, "")} 
          </div>
          <div className="game__board-row">
            {renderSquare(6, "last-row")} 
            {renderSquare(7, "last-row")} 
            {renderSquare(8, "last-row")} 
          </div>
        </div>
    </div>
  )
}