import { motion } from 'framer-motion';
import React from 'react'
import { useSelector } from 'react-redux'
import { selectPostingReviewErrorMessage } from '../../../App/AppFeature'


import "./Error.css";

export const Error = ({close}) => {

    const errorMessage = useSelector(selectPostingReviewErrorMessage);

    return (
        <motion.div initial={{scale: 0, opacity: 0}} animate={{opacity: 1, scale: 1}} className='error-alert-container'>
            <p>{errorMessage}</p>
            <button onClick={close}>Close</button>
        </motion.div>
    )
}
