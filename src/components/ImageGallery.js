import React from 'react'

function ImageGallery(props) {
    let imgLink = props.imgLink
    let alt = props.alt
    return (
        
        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 my-3'>
            <img src={imgLink} alt={alt} className='image-gallery-item' />
        </div>
      
    )
}

export default ImageGallery
