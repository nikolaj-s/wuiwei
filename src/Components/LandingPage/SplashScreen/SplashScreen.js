

import React from 'react'

import { motion, AnimatePresence } from 'framer-motion';

import "./SplashScreen.css";

export const SplashScreen = ({splashScreenBackDrop, title, subtitle}) => {

    let [index, setIndex] = React.useState(0);

    // eslint-disable-next-line
    React.useEffect(() => {

        let interval = setInterval(() => {
            
            if (index === splashScreenBackDrop.length - 1) {
                // eslint-disable-next-line
                setIndex(0)
            } else {
                // eslint-disable-next-line
                setIndex(index+=1);
            }

        }, 5000)


        return () => {
            clearInterval(interval)
        }
    // eslint-disable-next-line
    }, [index])

    return (
        <div className="splash-screen-container">
            <AnimatePresence >
                <motion.img transition={{duration: 1}} initial={{translateX: '-100%'}} animate={{translateX: '0%'}} exit={{translateX: '100%'}} src={splashScreenBackDrop[index]} key={index} />
            </AnimatePresence>
            
            <div className="title-container">
                <div className='inner-title-container'>
                    <h1>{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
            </div>
        </div>
    )
}


