import React, { useState, useEffect } from 'react';
import "./loader.scss";
import logoXl from "../../assets/logo-xl.png";
import { Fade, AttentionSeeker } from "react-awesome-reveal";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      document.body.classList.add("disable-scrolling");
      setTimeout(() => {
        setLoading(false);
        document.body.classList.remove("disable-scrolling");
      }, 1000);
  }, []);

  return ( 
    <section className={`loader ${ loading ? "loader--show" : "loader--hide"}`}>
      <AttentionSeeker effect={"bounce"}>
        <img src={logoXl} className="logo-xl" alt="Big Logo" /> 
      </AttentionSeeker>
    </section>
  )
}