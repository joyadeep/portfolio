import React from 'react';
import "./navbar.css";
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
          <div className="n-container">

            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/skills">Skills</NavLink>
            <NavLink className="link" to="/project">Projects</NavLink>
            <NavLink className="link" to="/contact">Contact Me</NavLink>

              </div>  
        </>
    )
}
