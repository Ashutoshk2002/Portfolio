import React from 'react';
import "./works.css";
// import Upwork from "../../img/Upwork.png";
// import Fiverr from "../../img/fiverr.png";
// import Amazon from "../../img/amazon.png";
// import Shopify from "../../img/Shopify.png";
// import Facebook from "../../img/Facebook.png";
import js from "../../img/js.png"
import expressjs from "../../img/expressjs.png"
import nodejs from "../../img/nodejs.png"
import react from "../../img/react.png"
import mongodb from "../../img/mongodb.png"
import { Link } from 'react-scroll';
import { themeContext } from "../../Context";
import { useContext } from 'react';

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="works" id='Work'>
            {/* left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>Worked on the</span>
                <span>MERN Stack</span>
                <span>
                    ▶️I have experience working with the MERN stack,
                    <br /> which is a popular JavaScript stack for building web applications.
                    <br />
                    ▶️I am proficient in all four technologies that make up the stack:
                    <br />
                     MongoDB, Express, React, and Node.js.
                    <br />
                    ▶️I have used the MERN stack to build a variety of web applications
                    <br />
                    ▶️I am confident in my ability to use the MERN stack to build high-quality,
                    <br /> scalable web applications.
                </span>
                <Link spy={true} to='Contact' smooth={true}>
                    <button className="button s-button">Hire me</button>
                </Link>

                <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
            </div>

            {/* right side */}
            <div className="w-right">
                <div className="w-maincircle">
                    <div className="w-seccircle">
                        <img src={mongodb} alt="" />
                    </div>
                    <div className="w-seccircle">
                        <img src={react} alt="" />
                    </div>
                    <div className="w-seccircle">
                        <img src={js} alt="" />
                    </div>
                    <div className="w-seccircle">
                        <img src={expressjs} alt="" />
                    </div>
                    <div className="w-seccircle">
                        <img src={nodejs} alt="" />
                    </div>

                </div>
                {/* bg circle */}
                <div className="w-backcircle bluecircle"></div>
                <div className="w-backcircle yellowcircle"></div>
            </div>
        </div>
    )
}

export default Works


