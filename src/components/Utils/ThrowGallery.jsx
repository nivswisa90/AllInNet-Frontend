import React, {useEffect, useState} from 'react'
import ImageGallery from 'react-image-gallery';
import axios from "../../axios";


const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
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

const ThrowGallery = (props) => {
    console.log(props.frameList)
    const [img, setImg] = useState('');
    const fetchFrame = async () => {
        const res = await axios.get('/api/training/results/frames', {responseType: 'arraybuffer'}, {
            headers: {
                'x-access-token': localStorage.getItem("token"),
                'Content-Type': 'image/jpeg'
            },
            mode:'cors'
        })
        // console.log('#####',res)
        // const frameBlob = await res.data.arrayBuffer()
        // const frameUrl = URL.createObjectURL(frameBlob)
        // // let frame = new Blob([frameBlob],{type:"image/jpeg"})
        // // const frameUrl = URL.createObjectURL(frame)
        // console.log('blobURlFram', frameUrl)
        // setImg(frameBlob)
        // console.log(img)
    }
    useEffect(() => {
        fetchFrame().then(res => console.log(res.data))
    }, [])


    return (<div>
            <img src={img}/>
            <ImageGallery items={images}/>

        </div>
    )
}
export default ThrowGallery