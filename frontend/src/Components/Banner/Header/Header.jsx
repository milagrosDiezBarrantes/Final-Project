import React from "react";
import "./Header.css";
import background from "../Header/imgHeader/bg2.jpg";
import spiderman from "../Header/imgHeader/spiderman.png";
import blood1 from "../Header/imgHeader/blood1.png";
import marvelogo from "../Header/imgHeader/logo.png";
import spider from "../Header/imgHeader/ragno.png";
import spider2 from "../Header/imgHeader/ragno2.png";
import { Link } from "react-router-dom";

function HeaderBanner() {
  return (
    <div>
    <div className="container-HeaderBanner">
      <img className="background" src={background} alt="background" />
      <img className="spiderman" src={spiderman} alt="spider-man" />
      <div className="lines">
        <div className="line-one"></div>
        <div className="line-two"></div>
      </div>

      <img className="blood" src={blood1} alt="blood" />
      <img className="marvel-logo" src={marvelogo} alt="marvel-logo" />
      <img className="spider" src={spider} alt="spider" />
      <img className="spider2" src={spider2} alt="spider2" />
    </div>
    </div>
  );
}

export default HeaderBanner;
