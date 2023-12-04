import { motion } from 'framer-motion'
import React from 'react'

import "./Loading.css"

export const Loading = ({status}) => {

    

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="loading-container">
            <div className="loading-wrapper">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M34.7925 17.5C34.1983 14.0069 32.3871 10.8368 29.6797 8.55101C26.9722 6.26525 23.5433 5.01134 20 5.01134C16.4567 5.01134 13.0277 6.26525 10.3203 8.55101C7.61289 10.8368 5.8017 14.0069 5.20749 17.5H2.67749C3.28322 13.338 5.36716 9.53331 8.54807 6.78184C11.729 4.03036 15.7942 2.51612 20 2.51612C24.2058 2.51612 28.271 4.03036 31.4519 6.78184C34.6328 9.53331 36.7168 13.338 37.3225 17.5H34.7925Z" fill="black"/>
                </svg>
            </div>
            <h3>{status}...</h3>
        </motion.div>
    )
}
