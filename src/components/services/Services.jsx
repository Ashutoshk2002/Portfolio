import React from "react";
import Resume from "./Resume.pdf";
import "./services.css";
import Card from "../../components/Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";

const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id cum
          laudantium hic labore atque non, itaque mollitia, molestias
          <br />
          necessitatibus quas magni excepturi dolores? Soluta a deserunt
          corporis. Aut, reiciendis iste.
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
            heading={"Design"}
            detail={"Fingma,Photoshop,Adobe"}
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
            detail={"Html,CSS,JavaScript,React"}
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
            heading={"UI/UX"}
            detail={"Fingma,Photoshop,Adobe"}
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
