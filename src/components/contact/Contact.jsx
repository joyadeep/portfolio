import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import {BsFacebook,BsInstagram,BsLinkedin,BsGithub} from 'react-icons/bs';

import './contact.css';
export const Contact = () => {
    const formRef= useRef();
    const[success,setSuccess]=useState(false);

    const submitForm=(e)=>
    {
        e.preventDefault();
        
        emailjs.sendForm('service_z0qg2ri', 'template_dafmq7k', formRef.current, 'user_kXpemVR473PnLPTp0EbfC')
        .then((result) => {
            setSuccess(true);
        }, (error) => {
            console.log(error.text);
        });
    }



    return (
        <>
        <a id="contact"></a>
            <div className="contact-container">
                <div className="cc-title">Get in touch</div>
               
                {/* <div className="cc-flex"> */}
                <div className="cc-form">
<div className="contact-form">

<form  ref={formRef} onSubmit={submitForm} className='form'>
                            <p className="form-title">Mail Me</p>
                        <input type="text" name="name" placeholder='Name'/><br />
                        <input type="text" name="subject" placeholder='Subject' /><br />
                        <input type="email" name="email" placeholder="Email" /><br />
                        <textarea name="message"  cols="33" rows="10" placeholder="message"></textarea><br />
                        <button className='form-button'>send</button>
                        {success && <div style={{color:"green"}}>!! Mail sent successfully !!</div>}
                    </form>
                   
</div>

<div className="social-links">
    <div className="links">
        <p className="link-title">Say hello @</p>
        <div className="link-list">
           <div className="link"><a href="https://facebook.com/zoysince1997" rel="noreferrer" target="_blank"><BsFacebook/></a></div>
           <div className="link"><a href="https://instagram.com/zoysince1997" rel="noreferrer" target="_blank"><BsInstagram/></a></div>
           <div className="link"><a href="https://linkedin.com/in/zoysince1997" rel="noreferrer" target="_blank"><BsLinkedin/></a></div>
           <div className="link"><a href="https://github.com/joyadeep" rel="noreferrer" target="_blank"><BsGithub/></a></div>

        </div>
    </div>
    
</div>

                  



                </div>
                
            </div>
        </>
    )
}
