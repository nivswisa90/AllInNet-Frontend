import React, {useEffect, useState} from 'react'
import axios from "../../axios";

import ImageGallery from "react-image-gallery";
import {useLocation} from "react-router-dom";

const images = []
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

const ThrowGallery = (props) => {
    const [img, setImg] = useState({})
    const frameList = props.frameList
    const frameListLength = frameList.length
    let location = useLocation();

    const playerId = location.state.result.playerId
    const trainingProgramId = location.state.result.trainingProgramId

    const fetchFrame = async () => {
        axios.get(`/api/training/results/frames/${playerId}/${trainingProgramId}/${frameList[0]}`, {
                headers: {
                    "x-access-token": localStorage.getItem('token'),
                }, responseType: 'blob'
            }
        ).then(r => {
            const url = window.URL.createObjectURL(new Blob([r.data]));
            const newImg = {'original': url, 'thumbnail': url}

            setImg(newImg)
            frameList.shift()
        })
    }

    useEffect(() => {
        fetchFrame().then()
    }, [])


    useEffect(() => {
        if (images.length < frameListLength) {
            images.push(img)
        }

        if (Object.keys(images[0]).length === 0) {
            images.shift()
        }
        if (images.length === 1 && frameList[0]) {
            fetchFrame().then()
        }
    }, [img])

    return (<div>
            <ImageGallery items={images} />
        </div>
    )
}
export default ThrowGallery