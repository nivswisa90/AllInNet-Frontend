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
        const res = await axios.get('/api/training/results/frames', {responseType: 'blob'}, {
            headers: {
                'x-access-token': localStorage.getItem("token"),
                'Content-Type': 'image/jpeg'
            }
        })
        console.log(res)
        const frameBlob = await res.data.arrayBuffer()
        let frame = new Blob([frameBlob],{type:"image/jpeg"})
        const frameUrl = URL.createObjectURL(frame)
        setImg(frameUrl)
        console.log(img)
    }
    useEffect(() => {
        fetchFrame().then(r => console.log(r))
    }, [])


    return (<div>
            <img src={img}/>
            <ImageGallery items={images}/>

        </div>
    )
}
export default ThrowGallery