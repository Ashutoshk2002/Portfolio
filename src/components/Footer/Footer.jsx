import React from 'react'
import wave from "../../img/wave.png"
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Mail from '@iconscout/react-unicons/icons/uil-fast-mail';
import "./footer.css"
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className='footer' id='Footer'>
      <img src={wave} alt="" style={{width:'100%'}} />
      <div className="f-content">
        <span>ashutoshkhairnarofficial@gmail.com</span>
        <div className="f-icons">
        <a href="https://www.linkedin.com/in/ashutosh-khairnar-70ab151ba/" target='_blank'>
            <Linkedin color='white' size='3rem'/>
        </a>
        <a href="https://github.com/Ashutoshk2002" target='_blank'>
            <Github color='white' size='3rem'/>
        </a>
        <a href="mailto:ashutoshkhairnarofficial@gmail.com" target='_blank'>
            <Mail color='white' size='3rem'/>
        </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
