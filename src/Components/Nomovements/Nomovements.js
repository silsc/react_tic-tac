import React from "react";
import "./nomovements.scss"
import stopImg from "../../assets/stop.svg";
import { Fade, AttentionSeeker } from "react-awesome-reveal";


export default function Nomovements() {

  return ( 
    <section className="results__nomove">
      <AttentionSeeker effect={"bounce"}>
        <h1 className="nomove-title">No more movements</h1>
      </AttentionSeeker>

      <AttentionSeeker effect={"rubberBand"} delay={200}>
        <img src={stopImg} className="nomove-img" alt="No movements" />
      </AttentionSeeker>
    </section>
  )
}