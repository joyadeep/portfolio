import React from 'react'
import './project.css';
// import Me from '../../assets/images/me.png';
import {project_data} from '../../api/project-data';

export const Project = () => {
    return (
        <>
        <div className="p-container">
            <div className="pc-title">My Projects</div>
            <div className="pc-list">
            {    
            project_data.map((item,index)=>{
                return(
                    <>

                        <a  href="#" className="project" key={index}>
                            <img src="https://drive.google.com/file/d/0B1Dp12kmQknEZXNkU3JNSlNMcFJ2NXlYYW9vREJWSVFZa3Bv/view?usp=sharing&resourcekey=0-1alru4jWmoHC0Opo-wwjHg">

                            </img>

                            <div className="info">
                                <div className="info-title">
                                    {item.name}
                                </div>
                                <div className="info-level">Level : Beginner</div>
                                <div className="info-desc">
                                   
                                   {item.desc}
                                </div>
                            </div>

                        </a>

                    </>
                )
            })

        }
                

            </div>
        </div>
       
        </>
    )
}
