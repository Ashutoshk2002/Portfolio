import React from "react";
import "./intro.css";
import FloatingDiv from "../floatingdiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy1 from "../../img/boy1.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import glassesimoji from "../../img/glassesimoji.png";
// import { motion } from 'framer-motion';
import { Link } from "react-scroll";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Ashutosh Khairnar</span>
          <span>
            Full Stack Developer having experience in web designing and
            development,producing the Quality Work
          </span>
        </div>
        <Link to="Contact" smooth={true} spy={true}>
          <button className="button i-button">Hire Me</button>
        </Link>
        <Link to="Footer" smooth={true} spy={true}>
        <div className="i-icon">
          <img src={Github} alt=""></img>
          <img src={LinkedIn} alt=""></img>
          <img src={Instagram} alt=""></img>
        </div>
        </Link>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy1} alt="" />
        <img src={glassesimoji} alt="" />
        <div

          className="floating-div"
          style={{ top: "-4%", left: "68%" }}
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div
          className="floating-div"
          style={{ top: "19rem", left: "5.9rem" }}>
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
