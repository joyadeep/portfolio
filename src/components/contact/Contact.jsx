import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
               
                <div className="cc-flex">
                <div className="cc-left">
                    <form  ref={formRef} onSubmit={submitForm} className='form'>
                        <div className="form-container">
                            <p className="form-title">Mail Me</p>
                        <input type="text" name="name" placeholder='Name'/><br />
                        <input type="text" name="subject" placeholder='Subject' /><br />
                        <input type="email" name="email" placeholder="Email" /><br />
                        <textarea name="message"  cols="33" rows="10" placeholder="message"></textarea><br />
                        <button className='form-button'>send</button>
                        </div>
 
                    </form>
                </div>
                {success && "Thank you, I will reply soon"}
            <div className="cc-right">
                <div className="ccr-container">
                    <div className="ccrc-title">
                        Say Hello @
                    </div>
                    <div className="ccrc-social">
                       <div className="social-links">
                           <div className="link">





                               <div className="link-icon">
                               <a className='fb' href="http://facebook.com/zoysince1997" target="_blank" rel="noopener noreferrer">
                                   < FacebookIcon style={{fontSize:40}}/>
                               </a>
                               </div>
                               <div className="link-name">/zoysince1997</div>
                           </div>

                           <div className="link">
                               <div className="link-icon">
                               <a className='insta' href="http://instagram.com/zoysince1997" target="_blank" rel="noopener noreferrer">
                                   <InstagramIcon style={{fontSize:40}}/>
                               </a>
                               </div>
                               <div className="link-name">/zoysince1997</div>
                           </div>

                           <div className="link">
                               <div className="link-icon">
                               <a className='github' href="http://github.com/joyadeep" target="_blank" rel="noopener noreferrer">
                                   < GitHubIcon style={{fontSize:40}}/>
                               </a>
                               </div>
                               <div className="link-name">/joyadeep</div>
                           </div>

                           <div className="link">
                               <div className="link-icon">
                               <a className='linkedin' href="http://linkedin.com/in/zoysince1997" target="_blank" rel="noopener noreferrer">
                                   < LinkedInIcon style={{fontSize:40}}/>
                               </a>
                               </div>
                               <div className="link-name">/zoysince1997</div>
                           </div>
                           

                       </div>
                    </div>
                </div>
            </div>
                </div>
          
            </div>
        </>
    )
}
