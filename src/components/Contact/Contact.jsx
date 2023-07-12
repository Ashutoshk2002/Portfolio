import React,{ useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
const Contact = () => {
    const form = useRef();
    const [Done,setDone]=useState(false);

    const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_ukuy888', 'template_k76bp1h', form.current, 'AuJPnqmsJlSRL-7uO')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
    };
    return (
        
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span>Contact me</span>
                    <div className='blur s-blur1' style={{ background: "#ABF1FF94" }}>
                    </div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail} action="">
                    <input type="text" name="user_name" className='user' placeholder='Name' id="" />
                    <input type="email" name="user_email" className='user' placeholder='Email' id="" />
                    <textarea name="message" className='user' placeholder='Message' ></textarea>
                    <input type="submit" value="Send" className='button' />
                    <span>{Done && "Thanks for contacting me!"}</span>
                    <div className="blur c-blur1" style={{ background: 'var(--purple)' }}></div>
                </form>
            </div>
        </div>

    )
}

export default Contact
