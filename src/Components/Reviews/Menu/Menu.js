import { useAnimation, motion } from 'framer-motion'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeReviewError, postReview, selectPostingReviewErrorStatus, selectPostingReviewLoadingState, selectReviewForm, setName, setRating, setReview, setReviewCode } from '../../../App/AppFeature'
import { Error } from '../Error/Error'
import { Loading } from '../Loading/Loading'

import "./Menu.css"

export const Menu = (props) => {

    const dispatch = useDispatch();

    const reviewForm = useSelector(selectReviewForm);

    const animate = useAnimation()

    const closeMenu = () => {
        animate.start({
            opacity: 0,
            scale: 0,
        }).then(() => {
            props.toggle();
        })
    }
    
    const ratingOnHover = (key) => {
        for (let i = 1; i <= key; i++) {
            document.getElementsByClassName(i)[0].style.fill = 'black'
        }
    }

    const ratingOnMouseOut = (key) => {
        for (let i = key; i > reviewForm.rating; i--) {
            document.getElementsByClassName(i)[0].style.fill = 'white'
        }
    }

    const handleRating = (key) => {
        dispatch(setRating(key))
    }

    const submit = () => {
        dispatch(postReview(reviewForm))
    }

    const handleCloseReviewError = () => {
        dispatch(closeReviewError());
    }

    const errorState = useSelector(selectPostingReviewErrorStatus);

    const loading = useSelector(selectPostingReviewLoadingState);

    return (
        <motion.div initial={{opacity: 0, scale: 0, top: 0, right: 0}} animate={[animate, {opacity: 1, scale: 1}]}  className="menu-outer-container">
            <div className="menu-inner-container">
                <div className="title-menu-wrapper">
                    <h2>Post a Review</h2>
                    <svg onClick={closeMenu} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3959 7.757C16.4889 7.84988 16.5627 7.96016 16.613 8.08156C16.6633 8.20296 16.6892 8.33309 16.6892 8.4645C16.6892 8.59592 16.6633 8.72605 16.613 8.84744C16.5627 8.96884 16.4889 9.07913 16.3959 9.172L13.4139 12.153L16.0899 14.828C16.2776 15.0156 16.383 15.2701 16.383 15.5355C16.383 15.8009 16.2776 16.0554 16.0899 16.243C15.9023 16.4306 15.6478 16.5361 15.3824 16.5361C15.1171 16.5361 14.8626 16.4306 14.6749 16.243L11.9999 13.567L9.32494 16.243C9.1373 16.4306 8.88281 16.5361 8.61745 16.5361C8.35208 16.5361 8.09759 16.4306 7.90994 16.243C7.7223 16.0554 7.61689 15.8009 7.61689 15.5355C7.61689 15.2701 7.7223 15.0156 7.90994 14.828L10.5859 12.153L7.60394 9.172C7.51103 9.07903 7.43735 8.96866 7.38709 8.84721C7.33683 8.72575 7.31099 8.59559 7.31104 8.46415C7.31108 8.33271 7.33702 8.20256 7.38736 8.08114C7.4377 7.95973 7.51147 7.84941 7.60444 7.7565C7.69742 7.66359 7.80779 7.5899 7.92924 7.53965C8.05069 7.48939 8.18086 7.46355 8.3123 7.46359C8.44374 7.46364 8.57388 7.48957 8.6953 7.53992C8.81672 7.59026 8.92704 7.66403 9.01995 7.757L11.9999 10.74L14.9809 7.758C15.0738 7.66503 15.1841 7.59127 15.3055 7.54094C15.4269 7.49062 15.557 7.46472 15.6884 7.46472C15.8199 7.46472 15.95 7.49062 16.0714 7.54094C16.1928 7.59127 16.3031 7.66503 16.3959 7.758V7.757Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1C3.20435 1 2.44129 1.31607 1.87868 1.87868C1.31607 2.44129 1 3.20435 1 4V20C1 20.7956 1.31607 21.5587 1.87868 22.1213C2.44129 22.6839 3.20435 23 4 23H20C20.7956 23 21.5587 22.6839 22.1213 22.1213C22.6839 21.5587 23 20.7956 23 20V4C23 3.20435 22.6839 2.44129 22.1213 1.87868C21.5587 1.31607 20.7956 1 20 1H4ZM20 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3V3Z" fill="black"/>
                    </svg>

                </div>
                <input value={reviewForm.name} onChange={(e) => {dispatch(setName(e.target.value))}} type="text"  name="Name" placeholder="Name" />
                <textarea value={reviewForm.review} onChange={(e) => {dispatch(setReview(e.target.value))}} type="text" name="Review" placeholder="Review" />
                <div className='rating-wrapper'>
                    {[1, 2, 3, 4, 5].map((rating, key) => {
                        return (
                            <svg onClick={(key) => {handleRating(rating)}} style={reviewForm.rating >= rating ? {fill: 'black'} : {fill: 'white'}} onMouseOut={(key) => {ratingOnMouseOut(rating)}} onMouseOver={(key) => {ratingOnHover(rating)}} className={rating} key={key} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.4568 4.38834C18.9901 2.98167 21.0085 2.98167 21.5435 4.38834L24.9935 13.945C25.2351 14.5783 25.8501 15 26.5368 15H35.0151C36.5818 15 37.2651 16.95 36.0335 17.905L30.0001 23.3333C29.7299 23.5411 29.5324 23.8291 29.4359 24.1561C29.3395 24.4831 29.3492 24.8322 29.4635 25.1533L31.6668 34.4917C32.2035 35.9917 30.4668 37.28 29.1535 36.3567L20.9585 31.1567C20.6778 30.9594 20.3431 30.8536 20.0001 30.8536C19.6571 30.8536 19.3224 30.9594 19.0418 31.1567L10.8468 36.3567C9.53513 37.28 7.79679 35.99 8.33346 34.4917L10.5368 25.1533C10.6511 24.8322 10.6607 24.4831 10.5643 24.1561C10.4679 23.8291 10.2704 23.5411 10.0001 23.3333L3.96679 17.905C2.73346 16.95 3.42013 15 4.98346 15H13.4618C13.7956 15.0011 14.1219 14.9008 14.3975 14.7125C14.6731 14.5241 14.885 14.2564 15.0051 13.945L18.4551 4.38834H18.4568Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        )
                    })}
                </div>
                <input value={reviewForm.reviewCode} onChange={(e) => {dispatch(setReviewCode(e.target.value))}} type="password" name="review-code" placeholder='Review Code' />
                <button onClick={submit} >Post</button>
                {errorState ? <Error close={handleCloseReviewError} /> : null}
                {loading ? <Loading status={"Loading"} /> : null}
            </div>
            
        </motion.div>
    )
}
