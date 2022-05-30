import "./game.scss"

import React from "react";
import {AttentionSeeker, Fade} from "react-awesome-reveal";
import {useLocation} from 'react-router-dom';

import player1Img from "../../assets/player1.png";
import player1TokenImg from "../../assets/player1token.png";
import player2Img from "../../assets/player2.png";
import player2TokenImg from "../../assets/player2token.png";
import Board from "../Board/Board";
import Header from '../Header/Header';
import Loader from '../Loader/Loader';

export default function Home() {
  const location = useLocation()
  const player1 = location.state.player1;
  const player2 = location.state.player2;

  return (
      <div className = "game__page"><Loader></Loader>
    <Header/>
      <div className = "game__container"><Fade delay = {1500} triggerOnce>
      <AttentionSeeker effect = {"bounce"} delay = {1700} triggerOnce>
      <div className = "game__player__container">
      <img src = {player1Img} className = "game__player-img player1-img" alt =
           "Player 1" /><img src = {player1TokenImg} className =
                             "player1-token" alt = "Player 1" />
      <h1 className = "game__player__name player1-name">{
          player1}</h1>
          </div></AttentionSeeker>
      </Fade>
      <Fade delay = {1500} triggerOnce><Board />
      </Fade>
      <Fade delay={1500} triggerOnce>
        <AttentionSeeker effect={"bounce"} delay={1800} triggerOnce>
          <div className="game__player__container">
            <img src={player2Img} className="game__player-img player2-img" alt="Player 2" />
      <img src = {player2TokenImg} className = "player2-token" alt =
           "Player 2" /><h1 className = "game__player__name player2-name">{
          player2}</h1>
          </div></AttentionSeeker>
      </Fade>
      </div>
  </div>)
}