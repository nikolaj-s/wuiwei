import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";


export const fetchReviews = createAsyncThunk(
    'Applice/fetchReviews',
    async (DATA, thunkAPI) => {
        console.log("what")
        const response = await Axios({
            method: "GET",
            url: "https://reviewsbackend.herokuapp.com/onemancrew/get"
        }).then(res => {
            return res.data;
        })

        console.log(response);

        return response;
    }
)

export const postReview = createAsyncThunk(
    'Appslice/postReview',
    async (reviewForm, thunkAPI) => {
        console.log(reviewForm)
        const response = await Axios({
            method: "POST",
            url: "https://reviewsbackend.herokuapp.com/onemancrew/post",
            data: {form: reviewForm}
        }).then(res => {
            console.log(res.data)
            return res.data;
        })

        return response;
    }
)

const AppSlice = createSlice({
    name: 'AppSlice',
    initialState: {
        // splash screen states
        siteName: "Wu Wei  無爲 Interiors",
        subTitle: "Bringing You  Professional Interior Makeovers",
        splashScreenImage: [
            "https://res.cloudinary.com/drlkgoter/image/upload/v1697920336/368121387_2471814819695237_1433894210293742810_n_joydsx.jpg",
            "https://res.cloudinary.com/drlkgoter/image/upload/v1697920336/393860309_865679778244743_5149254299755418594_n_pkgbal.jpg",
            "https://res.cloudinary.com/drlkgoter/image/upload/v1684433305/343891150_3511485149139044_2519391802029597665_n_yf8rwe.jpg"
        
        ],
        
        // navigation state
        mobileNavigationOpen: false,
        navTop: false,
        links: ["Home", "Gallery", "Reviews", "Contact"],
        icon: "https://res.cloudinary.com/drlkgoter/image/upload/v1669414870/Nor.%20X%20west/img_1791_tdq4fw.png",

        // artwork state
        artwork1: "https://res.cloudinary.com/drlkgoter/image/upload/v1669415311/Nor.%20X%20west/D2A1A2AD-9F27-4258-A9E2-5691AE5721B0_mbrbuz.jpg",
        artwork2: "https://res.cloudinary.com/drlkgoter/image/upload/v1638553845/Nor.%20X%20west/Rectangle_7_tn8ynh.png",
        artwork3: "https://res.cloudinary.com/drlkgoter/image/upload/v1639070240/Nor.%20X%20west/456896.53532b60-92a9-4628-ac5b-a954f8f26079_syqfs0.jpg",
        
        // text cards
        textCard1: {
            title: "What I Do",
            paragraph: [
                ""
            ]
        },

        // initial content
        initContentImage1: "https://res.cloudinary.com/drlkgoter/image/upload/v1670446054/Nor.%20X%20west/FFDE1391-ADE6-44F3-A4AC-CC86E78AEB53_1_ozlp77.png",
        initContentImage2: "https://res.cloudinary.com/drlkgoter/image/upload/v1670446054/Nor.%20X%20west/0C962EC8-8048-4CD3-937A-1D5296EF4467_1_sumuty.png",
        initContentImage3: "https://res.cloudinary.com/drlkgoter/image/upload/v1670446054/Nor.%20X%20west/IMG_3280_1_geyfbc.png",
        initContentImage4: "https://res.cloudinary.com/drlkgoter/image/upload/v1669414462/Nor.%20X%20west/7F27CAA7-0DAE-4145-9B53-ABD6E1518F26_y0zdv7.jpg",
        initialContentText: "THE FINEST WALL FINISHES ON EARTH",
        secondaryContentTitle: "INTERIORS, EXTERIORS",
        secondaryContentText: "Ideal for almost any surface. My finishes can be used in high water use areas, including showers.",
        textCard2: {
            title: "Highly Reviewed",
            paragraph: [
                "I offer a highly proffesional experience and get jobs done efficiently.",
                "See what others are saying and check out my reviews.",   
            ]
            
        },
        textCard3: {
            paragraph: [
                "If you have made it this far, we should get in contact and I will provide a free quote and timeframe for your project.",
                "Phone Number: (778) 584-8239"
            ]
        },

        // contact state

        phoneNumber: "+1 (778) 584-8239",

        // gallery
        galleryPhotos: [
            "https://res.cloudinary.com/drlkgoter/image/upload/v1712433588/434634662_783956686619599_3611582993589378922_n_auw3z2.jpg",
            "https://res.cloudinary.com/drlkgoter/image/upload/v1712433588/434702971_725842263079409_7268168614811368727_n_dfrsr9.jpg",
            "https://res.cloudinary.com/drlkgoter/image/upload/v1697920336/393860309_865679778244743_5149254299755418594_n_pkgbal.jpg",
            "https://res.cloudinary.com/drlkgoter/image/upload/v1697920336/368121387_2471814819695237_1433894210293742810_n_joydsx.jpg",
            "https://res.cloudinary.com/drlkgoter/image/upload/v1684433305/343245618_767728411573525_7840506480341930482_n_rawa9z.jpg",
            "https://res.cloudinary.com/drlkgoter/image/upload/v1684433305/343891150_3511485149139044_2519391802029597665_n_yf8rwe.jpg",
            "https://res.cloudinary.com/drlkgoter/image/upload/v1684354643/343733855_1228518967641036_3897750485888098433_n_z8odjh.jpg",
            "https://res.cloudinary.com/drlkgoter/image/upload/v1684354643/343722634_630168189006081_5034310947221729903_n_ugh2br.jpg",
            "https://res.cloudinary.com/drlkgoter/image/upload/v1639164736/Nor.%20X%20west/Yoga-Oasis-AmClayPlaster_sm_xpuiof.jpg",
            "https://res.cloudinary.com/drlkgoter/image/upload/v1639164889/Nor.%20X%20west/American_Clay_02_w99vwb.jpg",
            "https://res.cloudinary.com/drlkgoter/image/upload/v1643917364/Nor.%20X%20west/272153675_3041101582885490_7483024688770013933_n_x6ei5q.jpg", 
            "https://res.cloudinary.com/drlkgoter/image/upload/v1643917365/Nor.%20X%20west/272408935_230512125834683_5924610445216839254_n_htevkr.jpg",
            "https://res.cloudinary.com/drlkgoter/image/upload/v1669414462/Nor.%20X%20west/7F27CAA7-0DAE-4145-9B53-ABD6E1518F26_y0zdv7.jpg",
            "https://res.cloudinary.com/drlkgoter/image/upload/v1669414466/Nor.%20X%20west/0B3A5ACD-DB4A-4183-9E4A-12A883295801_poyvgv.jpg",
            "https://res.cloudinary.com/drlkgoter/image/upload/v1669414479/Nor.%20X%20west/IMG_8571_emnekj.jpg",
            "https://res.cloudinary.com/drlkgoter/image/upload/v1669414488/Nor.%20X%20west/CC457E08-676B-4BFD-AA9D-7B56865F121A_e0qxey.jpg",
            "https://res.cloudinary.com/drlkgoter/image/upload/v1669414510/Nor.%20X%20west/2FC06726-0863-42F6-A9F0-52962FBFAF04_wsd6ph.jpg",
            "https://res.cloudinary.com/drlkgoter/image/upload/v1669414527/Nor.%20X%20west/58A4875B-AA17-4BF5-A349-15ECC2EBCFA3_m0zksk.jpg"
        ],

        // reviews state
        reviewMenuState: false,
        reviews: [],
        loadingReviews: true,
        reviewForm: {
            name: "",
            review: "",
            reviewCode: "",
            rating: 0
        },
        reviewErrorState: false,
        reviewErrorMessage: "",
        postingReviewLoadingState: false,
        failedToPostReview: false,
        failedToPostReviewMessage: "",
    },
    reducers: {
        toggleMobileNavigation: (state, action) => {
            state.mobileNavigationOpen = action.payload;
        },
        setNavTop: (state, action) => {
            state.navTop = action.payload;
        },
        toggleReviewMenu: (state, action) => {
            state.reviewMenuState = action.payload;
            state.failedToPostReview = false;
            state.failedToPostReviewMessage = "";
        },
        setRating: (state, action) => {
            state.reviewForm.rating = action.payload;
        },
        setName: (state, action) => {
            state.reviewForm.name = action.payload;
        },
        setReview: (state, action) => {
            state.reviewForm.review = action.payload;
        },
        setReviewCode: (state, action) => {
            state.reviewForm.reviewCode = action.payload;
        },
        closeReviewError: (state, action) => {
            state.failedToPostReview = false;
            state.failedToPostReviewMessage = "";
        }

    },
    extraReducers: {
        [fetchReviews.pending]: (state, action) => {
            state.loadingReviews = true;
            state.reviews = [];
            state.reviewErrorState = false;
            state.reviewErrorMessage = "";
        },
        [fetchReviews.rejected]: (state, action) => {
            state.loadingReviews = false;
            state.reviewErrorState = true;
        },
        [fetchReviews.fulfilled]: (state, action) => {
            state.loadingReviews = false;
            state.reviewErrorMessage = "";
            state.reviewErrorState = false;
            state.reviews = action.payload.reviews.reverse();
        },

        [postReview.pending]: (state, action) => {
            state.postingReviewLoadingState = true;
            state.failedToPostReview = false;
            state.failedToPostReviewMessage = "";
        },
        [postReview.rejected]: (state, action) => {
            state.postingReviewLoadingState = false;
            state.failedToPostReview = true;
            //state.failedToPostReviewMessage = action.payload.error;
        },
        [postReview.fulfilled]: (state, action) => {
            
            if (action.payload.error) {
                state.failedToPostReview = true;
                state.failedToPostReviewMessage = action.payload.error;
            } else {
                state.failedToPostReview = true;
                state.failedToPostReviewMessage = "Thank You For Submitting A Review To The One Man Crew!";
                state.reviewForm = {name: "", review: "", reviewCode: "", rating: 0}
            
            }

            state.postingReviewLoadingState = false;
            
        }
    }
})

// navigation selection
export const selectMobileNavigationState = state => state.AppSlice.mobileNavigationOpen;
export const selectLinks = state => state.AppSlice.links;
export const selectIcon = state => state.AppSlice.icon;
export const selectNavTop = state => state.AppSlice.navTop;


// splash screen selection
export const selectSiteName = state => state.AppSlice.siteName;

export const selectSubTitle = state => state.AppSlice.subTitle;

export const selectBackSplashImage = state => state.AppSlice.splashScreenImage;

// init content
export const selectInitialText = state => state.AppSlice.initialContentText;

export const selectInitImage1 = state => state.AppSlice.initContentImage1;

export const selectInitImage2 = state => state.AppSlice.initContentImage2;

export const selectInitImage3 = state => state.AppSlice.initContentImage3;

export const selectInitImage4 = state => state.AppSlice.initContentImage4;

export const selectSecondaryContentTitle = state => state.AppSlice.secondaryContentTitle;

export const selectSecondaryContentText = state => state.AppSlice.secondaryContentText;

// artwork selection

export const selectArtworkOne = state => state.AppSlice.artwork1;

export const selectArtworkTwo = state => state.AppSlice.artwork2;

export const selectArtworkThree = state => state.AppSlice.artwork3;

// text card selection

export const selectTextCardOne = state => state.AppSlice.textCard1;

export const selectTextCardTwo = state => state.AppSlice.textCard2;

export const selectTextCardThree = state => state.AppSlice.textCard3;


// contact selectors 

export const selectPhoneNumber = state => state.AppSlice.phoneNumber;

// about selectors

export const selectProfilePicture = state => state.AppSlice.profilePicture;

export const selectBio = state => state.AppSlice.bio;

// photogallery selection

export const selectGallery = state => state.AppSlice.galleryPhotos;

// reviews selection

export const selectReviews = state => state.AppSlice.reviews;

export const selectLoadingReviews = state => state.AppSlice.loadingReviews;

export const selectReviewMenuState = state => state.AppSlice.reviewMenuState;

export const selectReviewForm = state => state.AppSlice.reviewForm;

export const selectPostingReviewErrorStatus = state => state.AppSlice.failedToPostReview;

export const selectPostingReviewErrorMessage = state => state.AppSlice.failedToPostReviewMessage;

export const selectPostingReviewLoadingState = state => state.AppSlice.postingReviewLoadingState;

export const {closeReviewError, setReviewCode, setReview, setName, setNavTop, toggleMobileNavigation, toggleReviewMenu, setRating} = AppSlice.actions;

export default AppSlice.reducer;