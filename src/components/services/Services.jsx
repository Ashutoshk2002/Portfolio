import React from "react";
import Resume from "./Resume.pdf";
import "./services.css";
import Card from "../../components/Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>
        Strong foundation in data structures and algorithms (DSA).
          <br />
          Proficient in C++, Java, and JavaScript.
          <br />
          Always looking for new challenges and opportunities to learn and grow.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <div

          style={{
            left: "14rem",
          }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Coder"}
            detail={"Java,C,C++"}
          />
        </div>
        <div
          style={{
            top: "12rem",
            left: "-4rem",
          }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"React.js,JavaScript,HTML,CSS"}
          />
        </div>
        <div
          style={{
            top: "19rem",
            left: "12rem",
          }}
        >
          <Card
            emoji={Humble}
            heading={"Database"}
            detail={"MySQL,MongoDB"}
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
