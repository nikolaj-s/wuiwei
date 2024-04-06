import React from 'react'

import { motion } from 'framer-motion';

import "./ImageComponent.css";

export const ImageComponent = ({image}) => {

    const [loading, toggleLoading] = React.useState(true);

    return (
        <div className='image-component-container'>
            <img alt="" src={image} onLoad={() => {toggleLoading(false)}} />
            {loading ?
            <motion.div 
            style={{
                background: `linear-gradient(270deg, grey, #adadad, grey)`,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundSize: '600% 600%',
                minWidth: '200px',
                flexShrink: 0,
                overflow: 'hidden'
            }}
            initial={{backgroundPosition: '0% 50%'}}
            animate={{backgroundPosition: ['0% 50%', '300% 50%']}}
            transition={{ease: 'linear', duration: 4, repeat: Infinity}}
            ></motion.div>        
            : null}
        </div>
    )
}
