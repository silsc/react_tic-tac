import React from "react";
import "./nomovements.scss"
import stopImg from "../../assets/stop.svg";

export default function Nomovements() {

  return ( 
    <section className="results__nomove">
      <h1 className="nomove-title">No more movements</h1>
      <img src={stopImg} className="nomove-img" alt="No movements" />
    </section>
  )
}