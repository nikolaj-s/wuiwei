import React from 'react'
import { useDispatch } from 'react-redux';
import {  setNavTop } from '../../App/AppFeature';

import { ContactInfo } from './ContactInfo/ContactInfo';

import "./ContactPage.css";
import { Form } from './Form/Form';

export const ContactPage = () => {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setNavTop(true));
        window.scrollTo(0, 0)
        // eslint-disable-next-line
    }, [])
    
    return (
        <div className="contact-page">
           
            <div className="contact-page-wrapper">
                <ContactInfo />
                <div className="contact-form-container">
                    <div className="inner-contact-form-container">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}
