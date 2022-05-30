import "./loader.scss";

import React, {useEffect, useState} from 'react';
import {AttentionSeeker, Fade} from "react-awesome-reveal";

import logoXl from "../../assets/logo-xl.png";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add("disable-scrolling");
    setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("disable-scrolling");
    }, 1000);
  }, []);

  return (<section className = {`loader ${
               loading ? "loader--show" : "loader--hide"}`}>
          <AttentionSeeker effect = {"bounce"}>
          <img src = {logoXl} className = "logo-xl" alt = "Big Logo" />
          </AttentionSeeker>
    </section>)
}