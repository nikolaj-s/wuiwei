
import React from 'react';
import { useSelector } from 'react-redux';
import { selectPhoneNumber } from '../../../App/AppFeature';

import "./ContactInfo.css";

export const ContactInfo = () => {

    const phoneNumber = useSelector(selectPhoneNumber);

    return (
        <div className='contact-info-container'>
            <h2>Contact Me At The Following:</h2>
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
            <h2>or via the contact form</h2>
        </div>
    )
}
