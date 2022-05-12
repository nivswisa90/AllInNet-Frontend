import React, {useEffect} from 'react'
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

const ThrowGallery = () => {
    useEffect(() => {
        axios.get('/api/training/results/frames', {
            headers: {
                'x-access-token': localStorage.getItem("token")
            }
        })
            .then(docs => console.log(docs))
            .catch(err => console.log(err))
    }, [])

    return (<ImageGallery items={images}/>)
}
export default ThrowGallery