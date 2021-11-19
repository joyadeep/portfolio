import React from 'react';
import './skills.css';
import {data} from '../../api/skill-data';
import Website from '../../assets/images/website.png'
import Responsive from '../../assets/images/responsive.png';
import Ecommerce from '../../assets/images/ecommerce.png';
export const Skills = () => {
    return (
       
        <>
            <div className="s-container">
            
                <div className="sc-left">
                    
                    <div className="scl-progress">
                    <div className="scl-title">Tech I am familiar with</div>

                    {
                        data.map((item,index)=>
                        (
                            <div className="scl-container" key={index}>
                            <div className="sclp-name">{item.name}</div>
                            <div className="sclp-bar">
                                <span className='bar'> <span className='progress' style={{width: item.width, backgroundColor: item.color}}></span></span>
                            </div>
                            <div className="sclp-percent"> {item.percent} </div>
                            </div>
     
                        ))
                    }

                    <p className="sclp-more">still more to come</p>



                    </div>
                  
                </div>

                <div className="sc-right">
                    <div className="scr-container">
                        <div className="scrc-title">Things I can do</div>

                        <div className="scrc-content">
                            <div className="scrcc-left">
                                <img src={Website} alt="image1" className="image" />
                            </div>
                            <div className="scrcc-right">
                                Create a fully flex Website and Web Apps.
                            </div>
                        </div>

                        <div className="scrc-content">
                        <div className="scrcc-right">
                                Create a fully responsive design and sites.
                            </div>
                            <div className="scrcc-left">
                                <img src={Responsive} alt="image1" className="image" />
                            </div>
                           
                        </div>

                        <div className="scrc-content">
                            <div className="scrcc-left">
                                <img src={Ecommerce} alt="image1" className="image" />
                            </div>
                            <div className="scrcc-right">
                                Create Full Stack web app like ecommerce.
                            </div>
                        </div>
                        

                    </div>
                </div>
                {/* </div> */}
            </div>
        </>
    )
}
