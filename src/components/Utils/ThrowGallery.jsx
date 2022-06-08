import React from 'react'
import ImageGallery from "react-image-gallery";

const ThrowGallery = (props) => {
    return (<div>
            <ImageGallery items={props.images} />
        </div>
    )
}
export default ThrowGallery