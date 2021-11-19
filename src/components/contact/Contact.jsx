import React, { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import './contact.css';
export const Contact = () => {
    // const [name,setName]=useState('');
    // const [email,setEmail]=useState('');
    // const[message,setMessage]=useState('');

    const submitForm=(e)=>
    {
        e.preventDefault();
        console.log(e);
    }



    return (
        <>
            <div className="contact-container">
                <div className="cc-title">Contact Me</div>
                <div className="cc-flex">
                <div className="cc-left">
                    <form onSubmit={submitForm} className='form'>
                        <div className="form-container">
                            <p className="form-title">Email Me</p>
                        <input type="text" name="name" placeholder='enter name'/><br />
                        <input type="email" name="email" placeholder="enter email" /><br />
                        <textarea name="message"  cols="33" rows="10" placeholder="message"></textarea><br />
                        <button className='form-button'>send</button>
                        </div>
 
                    </form>
                </div>
            <div className="cc-right">
                <div className="ccr-container">
                    <div className="ccrc-title">
                        Say Hello to me
                    </div>
                    <div className="ccrc-social">
                       <div className="social-links">
                           <div className="link">
                               <div className="link-icon">
                               <a className='fb' href="http://" target="_blank" rel="noopener noreferrer">
                                   < FacebookIcon style={{fontSize:40}}/>
                               </a>
                               </div>
                               <div className="link-name">/zoysince1997</div>
                           </div>

                           <div className="link">
                               <div className="link-icon">
                               <a className='insta' href="http://" target="_blank" rel="noopener noreferrer">
                                   <InstagramIcon style={{fontSize:40}}/>
                               </a>
                               </div>
                               <div className="link-name">/zoysince1997</div>
                           </div>

                           <div className="link">
                               <div className="link-icon">
                               <a className='github' href="http://" target="_blank" rel="noopener noreferrer">
                                   < GitHubIcon style={{fontSize:40}}/>
                               </a>
                               </div>
                               <div className="link-name">/zoysince1997</div>
                           </div>

                           <div className="link">
                               <div className="link-icon">
                               <a className='linkedin' href="http://" target="_blank" rel="noopener noreferrer">
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
