import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectArtworkOne, selectArtworkTwo, selectBackSplashImage, selectInitialText, selectInitImage1, selectInitImage2, selectInitImage3, selectInitImage4, selectSecondaryContentText, selectSecondaryContentTitle, selectSiteName, selectSubTitle, selectTextCardOne, selectTextCardTwo, setNavTop } from '../../App/AppFeature';
import { InitialContent } from './InitialContent/InitialContent';

import "./LandingPage.css";
import { ReviewsPreview } from './ReviewsPreview/ReviewsPreview';
import { SplashScreen } from './SplashScreen/SplashScreen';
import { TextWall } from './TextWall/TextWall';

export const LandingPage = () => {

    const dispatch = useDispatch();

    const title = useSelector(selectSiteName);

    const splashScreenImage = useSelector(selectBackSplashImage);

    const subTitle = useSelector(selectSubTitle);

    const artwork1 = useSelector(selectArtworkOne);

    const artwork2 = useSelector(selectArtworkTwo);

    const cardOne = useSelector(selectTextCardOne);

    const cardTwo = useSelector(selectTextCardTwo);

    const image1 = useSelector(selectInitImage1);

    const image2 = useSelector(selectInitImage2);

    const image3 = useSelector(selectInitImage3);

    const image4 = useSelector(selectInitImage4);

    const text1 = useSelector(selectInitialText);

    const title2 = useSelector(selectSecondaryContentTitle);

    const text2 = useSelector(selectSecondaryContentText);

    React.useEffect(() => {
        dispatch(setNavTop(false))
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="landing-page-container">
            <SplashScreen title={title} splashScreenBackDrop={splashScreenImage} subtitle={subTitle} />
            <InitialContent image1={image1} image2={image2} image3={image3} title={text1} />
            <TextWall title={cardOne.title} />
            <ReviewsPreview />
            <InitialContent title={title2} text={text2} flip={true} image1={image4} image2={artwork2} image3={artwork1} />
        </div>
    )
}


