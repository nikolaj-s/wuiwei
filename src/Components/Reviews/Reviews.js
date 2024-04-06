import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoadingReviews, selectReviewMenuState, selectReviews, setNavTop, toggleReviewMenu } from '../../App/AppFeature'
import { Loading } from './Loading/Loading'
import { Menu } from './Menu/Menu'
import { Review } from './Review/Review'

import "./Reviews.css"
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

export const Reviews = () => {

    const dispatch = useDispatch()

    const reviews = useSelector(selectReviews);

    const loading = useSelector(selectLoadingReviews);

    const reviewMenuState = useSelector(selectReviewMenuState);
    
    React.useEffect(() => {
        dispatch(setNavTop(true))
        window.scrollTo(0, 0)
    // eslint-disable-next-line
    }, [])
    
    const handleReviewMenu = () => {
        if (reviewMenuState) {
            dispatch(toggleReviewMenu(false))
            document.getElementsByTagName('body')[0].style.overflowY = 'auto'
        } else {
            dispatch(toggleReviewMenu(true))
            document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
        }
    }

    return (
        <div className="reviews-outer-container">
           
            <div className="reviews-inner-wrapper">

                {loading ? 
                <Loading status={"Loading Reviews"} />
                :
                <ResponsiveMasonry columnsCountBreakPoints={{500: 1, 900: 2, 1100: 3}} style={{width: '100%'}} >

                    <Masonry gutter='5px'>
                    {reviews.map((review, i) => {
                        return <Review review={review} key={i} />
                    })}
                    </Masonry>
                </ResponsiveMasonry>
                
                }
            </div>
            <div onClick={handleReviewMenu}  className='post-a-review-button'>
                <h3>Post A Review</h3>
            </div>
            {reviewMenuState ? <Menu toggle={handleReviewMenu} /> : null}
        </div>
    )
}
