import React from 'react'
import { FaCss3, FaReact } from 'react-icons/fa';
import './footer.css';
export const Footer = () => {
    return (
        <>
            <div className="f-container">
                <div className="contents">
                    <p className="author">
                        Made with <span style={{fontSize:"40px",color:"red"}}>❤</span> by joyadeep limbu 
                    </p>
                    <div className="tech-list">
                        <div className="tech"><FaReact/></div>
                        <div className="tech"> <FaCss3/> </div>
                    </div>
                    </div> 

            </div>
        </>
    )
}
