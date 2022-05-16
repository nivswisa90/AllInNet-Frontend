import React, {useEffect, useState} from 'react'
import axios from "../../axios";

import ImageGallery from "react-image-gallery";


const ThrowGallery = (props) => {
    const [img, setImg] = useState()
    const [nextImg, setNextImg] = useState([])
    const frameList = props.frameList
    let imagesURLs = []

    const fetchFrame = async () => {

        axios.get(`/api/training/results/frames/${frameList[0]}`, {
                headers: {
                    "x-access-token": localStorage.getItem('token'),
                }, responseType: 'blob'
            }
        ).then(r => {
            const url = window.URL.createObjectURL(new Blob([r.data]));
            setImg(url)
            frameList.shift()
            console.log('this is frame list inside the first', frameList)
        })
    }

    useEffect(() => {
        fetchFrame().then()
    }, [])


    const nextFrame = () => {
        console.log('#@$@#$@#', frameList)
        axios.get(`/api/training/results/frames/${frameList[0]}`, {
                headers: {
                    "x-access-token": localStorage.getItem('token'),
                }, responseType: 'blob'
            }
        ).then(async r => {
            const url = window.URL.createObjectURL(new Blob([r.data]));

            frameList.shift()

            setNextImg([{
                ...nextImg,'original':url
                }]
            )
            console.log(nextImg[0])

        })
    }

    const images = [
        {
            original: img,
            thumbnail: img,
        },
        {
            original: nextImg[0],
            thumbnail: nextImg[0],
        },
        {
            original: nextImg[0],
            thumbnail: nextImg[0],
        },
    ];

    return (<div>
            <ImageGallery items={images} onSlide={nextFrame}/>
        </div>
    )
}
export default ThrowGallery