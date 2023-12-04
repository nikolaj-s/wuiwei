import React from 'react'

import "./ImageComponent.css";

export const ImageComponent = ({ image, width, height, objectFit}) => {
    return (
        <div style={{width: width, height: height, objectFit: objectFit}} className="image-container">
            <img style={{objectFit: objectFit}} src={image} alt="artwork" />
        </div>
    )
}
