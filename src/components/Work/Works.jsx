import React from 'react';
import "./works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";


const Works = () => {
    return (
        <div className="works">
            {/* left side */}
            <div className="awesome">
                <span>Works for All these</span>
                <span>Brands & Clients</span>
                <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    <br />
                    Id cum
                    laudantium hic labore atque non, itaque mollitia, molestias
                    <br />
                    necessitatibus quas magni excepturi dolores?
                    <br />
                    Soluta a deserunt
                    corporis. Aut, reiciendis iste.
                </span>
                <button className="button s-button">Hire me</button>

                <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
            </div>

            {/* right side */}
            <div className="w-right"></div>
            <div className="w-maincircle">
                <div className="w-seccircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-seccircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-seccircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-seccircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-seccircle">
                    <img src={Facebook} alt="" />
                </div>
            </div>
            {/* bg circle */}
            <div className="w-backcircle bluecircle"></div>
            <div className="w-backcircle yellowcircle"></div>
        </div>
    )
}

export default Works
