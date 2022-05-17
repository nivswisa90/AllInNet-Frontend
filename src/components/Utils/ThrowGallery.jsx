import React, {useEffect, useState} from 'react'
import axios from "../../axios";

import ImageGallery from "react-image-gallery";


const ThrowGallery = (props) => {
    const [img, setImg] = useState()
    const [nextImg, setNextImg] = useState([])
    const frameList = props.frameList
    let imagesURLs = []
    const [newFrame, setNewFrame] = useState(false)

    const fetchFrame = async () => {
        axios.get(`/api/training/results/frames/${frameList[0]}`, {
                headers: {
                    "x-access-token": localStorage.getItem('token'),
                }, responseType: 'blob'
            }
        ).then(r => {
            const url = window.URL.createObjectURL(new Blob([r.data]));
            setNextImg(
                [
                    ...nextImg, {'original': url, 'thumbnail': url}
                ]
            )
            setNewFrame(true)
            frameList.shift()
        })
    }

    useEffect(() => {
        fetchFrame().then()
    }, [])

    useEffect(() => {
        nextFrame()
    }, [newFrame])


    const nextFrame = () => {
        axios.get(`/api/training/results/frames/${frameList[0]}`, {
                headers: {
                    "x-access-token": localStorage.getItem('token'),
                }, responseType: 'blob'
            }
        ).then(async r => {
            const url = window.URL.createObjectURL(new Blob([r.data]));
            setNextImg(
                [
                    ...nextImg, {'original': url, 'thumbnail': url}
                ]
            )
            frameList.shift()
        })
    }


    // const images = [
    //     {
    //         original: img,
    //         thumbnail: img,
    //     },
    //     {
    //         original: nextImg[0],
    //         thumbnail: nextImg[0],
    //     },
    //     {
    //         original: nextImg[0],
    //         thumbnail: nextImg[0],
    //     },
    // ];

    return (<div>
            <ImageGallery items={nextImg} onSlide={nextFrame}/>
        </div>
    )
}
export default ThrowGallery