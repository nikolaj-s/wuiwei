import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectArtworkThree, selectPhoneNumber, selectTextCardThree, setNavTop } from '../../App/AppFeature';
import { ImageComponent } from '../ImageComponent/ImageComponent';
import { TextBoxComponent } from '../TextBoxComponent/TextBoxComponent';
import { ContactInfo } from './ContactInfo/ContactInfo';

import "./ContactPage.css";
import { Form } from './Form/Form';

export const ContactPage = () => {

    const dispatch = useDispatch();

    const phoneNumber = useSelector(selectPhoneNumber);

    const artwork = useSelector(selectArtworkThree);

    const card = useSelector(selectTextCardThree)

    React.useEffect(() => {
        dispatch(setNavTop(true));
        window.scrollTo(0, 0)
    }, [])

    const openSocialMedia = () => {
        window.open("https://youtube.com/channel/UCrprisLUlwxiJGlrVjUnGTg", '_blank');
    }
    return (
        <div className="contact-page">
            <div className="sub-page-title-wrapper">
                <h1>Contact</h1>
            </div>
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
