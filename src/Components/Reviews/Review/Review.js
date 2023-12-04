import React from 'react'

import "./Review.css"

export const Review = ({ review, maxWidth, margin }) => {
    return (
        <div style={{maxWidth: maxWidth, margin: margin}} className="review-tab-container">
            <h3>{review.name}</h3>
            <p>{review.review}</p>
            <div className="review-rating-container">
                <p>{review.date.split('T')[0]}</p>
                <div className='review-rating-wrapper'>
                    {[1, 2, 3, 4, 5].map((rating, key) => {
                        return (
                            <svg style={review.rating >= rating ? {fill: 'black'} : {}} key={key} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.4568 4.38834C18.9901 2.98167 21.0085 2.98167 21.5435 4.38834L24.9935 13.945C25.2351 14.5783 25.8501 15 26.5368 15H35.0151C36.5818 15 37.2651 16.95 36.0335 17.905L30.0001 23.3333C29.7299 23.5411 29.5324 23.8291 29.4359 24.1561C29.3395 24.4831 29.3492 24.8322 29.4635 25.1533L31.6668 34.4917C32.2035 35.9917 30.4668 37.28 29.1535 36.3567L20.9585 31.1567C20.6778 30.9594 20.3431 30.8536 20.0001 30.8536C19.6571 30.8536 19.3224 30.9594 19.0418 31.1567L10.8468 36.3567C9.53513 37.28 7.79679 35.99 8.33346 34.4917L10.5368 25.1533C10.6511 24.8322 10.6607 24.4831 10.5643 24.1561C10.4679 23.8291 10.2704 23.5411 10.0001 23.3333L3.96679 17.905C2.73346 16.95 3.42013 15 4.98346 15H13.4618C13.7956 15.0011 14.1219 14.9008 14.3975 14.7125C14.6731 14.5241 14.885 14.2564 15.0051 13.945L18.4551 4.38834H18.4568Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
