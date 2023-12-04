import React from 'react'
import { useSelector } from 'react-redux'
import { selectReviews } from '../../../App/AppFeature'
import { Review } from '../../Reviews/Review/Review';

import "./ReviewsPreview.css";

export const ReviewsPreview = () => {

    const reviews = useSelector(selectReviews);

    return (
        <div className='reviews-preview-container'>
            <h1>What People Are Saying</h1>
            <div className='reviews-preview-inner-wrapper'>
                {reviews.slice(0, 5).map(review => {
                    return <Review margin={'0px 5px'} maxWidth={400} review={review} />
                })}
            </div>
        </div>
    )
}
