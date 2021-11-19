import React from 'react'
import './project.css';
import Me from '../../assets/images/me.png';
import {project_data} from '../../api/project-data';

export const Project = () => {
    return (
        <>
        {console.log(project_data)}
           <div className="p-container">
               <div className="pc-title">
                   My recent Projects
               </div>
               <div className="pc-projects">
                {

                    project_data.map((item,index)=>
                    (
                        <a key={index} className='project' href={item.href} target="_blank" rel="noopener noreferrer">
                   
                        <div className="p-image">
                        <img src={Me} alt="project image 1" />
                        </div>
                        
                        <div className="p-desc">
                            <div className="pd-title">{item.name}</div>
                            <div className="pd-desc">{item.desc}
                            </div>
                        </div>
                   
                </a>
    ))
                }
             

               
               </div>
           </div>
        </>
    )
}
