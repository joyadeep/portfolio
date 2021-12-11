import React, { useContext } from 'react'
import "./toggle.css";
import Sun from "../../assets/images/sun.png"
import Moon from "../../assets/images/moon.png"
import { ThemeContext } from '../../context';
export const Toggle = () => {
    const theme = useContext(ThemeContext);
    const dark=theme.state.darkMode;
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
    return (
        <>
          <div className="t-container">
              <img src={Sun} alt="sun"/>
              <img src={Moon} alt="moon"/>
              <div
        className="t-button"
        onClick={handleClick}
        style={{ left: dark ? 0 : 35 }}
      ></div>
              </div>  
        </>
    )
}
