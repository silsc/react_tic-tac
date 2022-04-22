import React from "react";
import { Link } from 'react-router-dom';
import "./header.scss"
import logoXs from "../../assets/logo-xs.png";

export default function Header() {

  return ( <>
    <header className="header__container">
      <img src={logoXs} className="logo-xs" alt="Small logo"/>
      <Link to="/">
        <button className={`btn btn-start`}> Start new game</button>
      </Link>
    </header>
  </>
  )
}