import React, {useEffect, useState} from 'react'
import axios from "../../axios";
import {useQuery} from "react-query";
import LoadingTriangle from "./LoadingTriangle";
import {toast} from "react-toastify";
import Error from "./Error";
import ImageGallery from "react-image-gallery";

async function fetchFrameList() {
    const {data} = await axios.get('/api/training/results/frameslist', {
        headers: {
            "x-access-token": localStorage.getItem('token')
        }
    })
    console.log(data)
    return data
}



const ThrowGallery = () => {
    const [img, setImg] = useState();
    const {data, error, isError, isLoading} = useQuery('frames', fetchFrameList, {refetchInterval: 5000})

    const fetchFrame = async () => {
        axios.get('/api/training/results/frames', {
                headers: {
                    "x-access-token": localStorage.getItem('token'),
                }, responseType: 'blob'
            }
        ).then(r => {
            const url = window.URL.createObjectURL(new Blob([r.data]));
            setImg(url)
        })
    }

    useEffect(() => {
        fetchFrame().then()
    }, [])

    if (isLoading)
        return <LoadingTriangle/>

    if (isError) {
        toast.error(error.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
        });
        return <Error/>
    }
    const nextFrame = () =>{
        // axios.get('/api/training/results/frames', {
        //         headers: {
        //             "x-access-token": localStorage.getItem('token'),
        //         }, responseType: 'blob'
        //     }
        // ).then(r => {
        //     const url = window.URL.createObjectURL(new Blob([r.data]));
        //     setImg(url)
        // })
    }

    const images = [
        {
            original: img,
            thumbnail: img,
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

    return (<div>
            <ImageGallery items={images} onSlide={nextFrame}/>
        </div>
    )
}
export default ThrowGallery