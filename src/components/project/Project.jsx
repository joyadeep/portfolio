import React from 'react'
import './project.css';
// import Me from '../../assets/images/me.png';
import {project_data} from '../../api/project-data';
// import fakestore from '../../projimgs/fakestore.png';

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
                        <a  href={item.href} className="project" key={index} target="_blank" rel="noopener noreferrer">
                         
                            <div className="info">
                                <div className="info-title">
                                    {item.name}
                                </div>
                                {/* <div className="info-level">Level : Beginner</div> */}
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
