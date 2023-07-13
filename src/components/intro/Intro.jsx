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
import { themeContext } from "../../Context";
import { useContext } from "react";
import glassesimoji from "../../img/glassesimoji.png";
// import { motion } from 'framer-motion';
import { Link } from "react-scroll";

const Intro = () => {
  const transition = { duration: 2, type: 'spring' };
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
        <div className="i-icon">
          <img src={Github} alt=""></img>
          <img src={LinkedIn} alt=""></img>
          <img src={Instagram} alt=""></img>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img
          // initial={{ left: '-36%' }}
          // whileInView={{ left: "-24%" }}
          // transition={transition}
          src={glassesimoji} alt="" />
        <div
          initial={{ top: '-4%', left: '74%' }}
          whileInView={{ left: '68%' }}
          transition={transition}
          className="floating-div"
        style={{ top: "-4%", left: "68%" }}
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div
          initial={{ top: '18rem', left: '9rem' }}
          whileInView={{ left: '0rem' }}
          transition={transition}
          className="floating-div"
          style={{ top: "18rem", left: "0rem" }}>
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
