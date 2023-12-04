import React from 'react'
import { Link } from 'react-router-dom'

import "./TextBoxComponent.css";

export const TextBoxComponent = ({width = false, title, paragraph, hours = false, link, hoursData, subImage = false, list = false}) => {
    
    return (
        <div style={width ? {width: width} : null} className="text-container">
            <div className="inner-text-container">
                {title ? <h2 className="title">{title}</h2> : null}
                {hours ?
                hoursData.map(hours => {
                    return (
                        <div className="hours-wrapper">
                            <p>{hours.day}</p>
                            <p>{hours.hours}</p>
                        </div>
                    )
                })
                : list ?

                paragraph.map(line => {
                    return (
                        <li>{line}</li>
                    )
                })
                :
                paragraph.map(line => {
                    return (
                        <p>{line}</p>
                    )
                })
                }
                {link === false ? null :
                <div className="button-container">
                    <Link className="link" to={`/${link.toLowerCase()}`} >
                        {link}
                    </Link>
                </div>}
                {subImage ? 
                <div className="sub-image-container">
                    <img src={subImage} alt="sub-prev" />
                </div>
                : null}

                
            </div>
        </div>
    )
}
