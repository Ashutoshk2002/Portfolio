import React from "react";
import "./intro.css";
import FloatingDiv from "../floatingdiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I Am</span>
          <span>Ashutosh Khairnar</span>
          <span>
            Full Stack Developer having experience in web designing and
            development,producing the Quality Work
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icon">
          <img src={Github} alt=""></img>
          <img src={LinkedIn} alt=""></img>
          <img src={Instagram} alt=""></img>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt=""></img>
        <img src={Vector2} alt=""></img>
        <img src={boy} alt=""></img>
        <img src={glassesimoji} alt=""></img>
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </div>
        {/* blur divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
      </div>
      <div
        className="blur"
        style={{
          background: "#c1f5ff",
          top: "17rem",
          width: "21rem",
          height: "11rem",
          left: "-9rem",
        }}
      ></div>
    </div>
  );
};

export default Intro;
