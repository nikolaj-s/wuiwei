
import React from 'react';

import { ImageComponent } from '../../ImageComponent/ImageComponent';

import "./InitialContent.css";

export const InitialContent = ({image1, image2, image3, text, flip = false, title}) => {

    return (
        <div style={{flexDirection: flip ? 'row-reverse' : 'row'}} className='initial-content-wrapper'>
            <div style={{width: '55%'}} className='intial-content-image-wrapper'>
                <ImageComponent width={"100%"} height={"49%"} image={image1} />
                <ImageComponent width={"100%"} height={"49%"} image={image2} />
            </div>
            <div style={{width: '40%', objectFit: 'cover'}} className='intial-content-image-wrapper'>
                <ImageComponent objectFit={'cover'} height={"100%"} width={"100%"} image={image3} />
            </div>
            <div className='initial-content-text-box'>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}
