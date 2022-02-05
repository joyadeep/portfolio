import React from 'react';
import './skills.css';
import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaGitAlt, FaAngular, FaSass } from "react-icons/fa";
import {SiJavascript, SiMongodb,SiTailwindcss, SiExpress, SiRedux} from 'react-icons/si';
import { CgFigma } from 'react-icons/cg';
export const Skills = () => {
    return (
       
        <>
            <div className="s-container">
            <div className="sc-title">Technical Skills</div>
            <div className="underline"></div>
            <div className="skill-list">
               <div className="skill">
                   <div className="icon"> <FaReact color="#61dbfb" /> </div>
                   <div className="icon-name"> React </div>
               </div>
               <div className="skill">
               <div className="icon"> <FaAngular color="#dd1b16" /> </div>
                   <div className="icon-name"> Angular </div>
               </div>
               {/* <div className="skill">
               <div className="icon"> <FaBootstrap color="#563d7c" /> </div>
                   <div className="icon-name"> Bootstrap </div>
               </div> */}
                <div className="skill">
               <div className="icon"> <FaSass color="#c69" /> </div>
                   <div className="icon-name"> SASS </div>
               </div>
               <div className="skill">
               <div className="icon"> <FaHtml5 color="#f06529" /> </div>
                   <div className="icon-name"> HTML 5 </div>
               </div>
               <div className="skill">
               <div className="icon"> <FaCss3 color="#2965f1"/> </div>
                   <div className="icon-name"> CSS 3 </div>
               </div>
               <div className="skill">
               <div className="icon"> <SiJavascript color="#f7df1e"/> </div>
                   <div className="icon-name"> Javascript </div>
               </div>
               <div className="skill">
               <div className="icon"> <SiTailwindcss color="#79c2fa"/> </div>
                   <div className="icon-name"> tailwindcss </div>
               </div>
               <div className="skill">
               <div className="icon"> <CgFigma color="rgb(30, 184, 63)"/> </div>
                   <div className="icon-name"> Figma </div>
               </div>
               <div className="skill">
               <div className="icon"> <FaNodeJs color="#3c873a" /> </div>
                   <div className="icon-name"> NodeJS </div>
               </div>
               <div className="skill">
               <div className="icon"> <SiMongodb color="589636"/> </div>
                   <div className="icon-name"> MongoDB </div>
               </div>

               <div className="skill">
               <div className="icon"> <FaGitAlt color="#f34f29" /> </div>
                   <div className="icon-name"> Git / GitHub </div>
               </div>
               <div className="skill">
               <div className="icon"> <SiExpress/> </div>
                   <div className="icon-name"> ExpressJS </div>
               </div>
               <div className="skill">
               <div className="icon"> <SiRedux color="#764abc" /> </div>
                   <div className="icon-name"> Redux </div>
               </div>
            </div>
            
           
               
            </div>
        </>
    )
}
