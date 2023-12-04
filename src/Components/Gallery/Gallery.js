import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectGallery, setNavTop } from '../../App/AppFeature'

import "./Gallery.css"
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

export const Gallery = () => {

    const dispatch = useDispatch();

    const [selectedImage, setSelectedImage] = React.useState(null);

    React.useEffect(() => {
        dispatch(setNavTop(true))
        window.scrollTo(0, 0)
    }, [])

    const handleSelectedImage = (image) => {
        setSelectedImage(image);
    }

    const closeExpandedImage = () => {
        setSelectedImage(null);
    }

    const galleryPhotos = useSelector(selectGallery);

    return (
        <div className="gallery-outer-container">
            <div className="page-subtitle-container">
                <h2>Gallery</h2>
            </div>
            <div className="gallery-inner-container">
                <ResponsiveMasonry style={{width: '100%'}}>
                    <Masonry gutter='5px'>
                    {galleryPhotos.map((photo, i) => {
                        return (
                            <div onClick={() => {handleSelectedImage(photo)}} key={i} className="gallery-photo-container">
                                <img src={photo} alt="gallery" />
                            </div>
                        )
                    })}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
            {selectedImage ? 
            <div onClick={closeExpandedImage} className='expanded-image-container'>
                <img src={selectedImage} />
            </div>
            : null}            
        </div>
    )
}
