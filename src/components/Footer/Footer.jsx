import React from 'react'
import wave from "../../img/wave.png"
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Mail from '@iconscout/react-unicons/icons/uil-fast-mail';
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <img src={wave} alt="" style={{width:'100%'}} />
      <div className="f-content">
        <span>ashutoshkhairnarofficial@gmail.com</span>
        <div className="f-icons">
            <Linkedin color='white' size='3rem'/>
            <Github color='white' size='3rem'/>
            <Mail color='white' size='3rem'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
