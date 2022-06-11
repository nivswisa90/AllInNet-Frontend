import React, {useEffect,useState} from 'react'
import {useLocation, useOutletContext} from 'react-router-dom'
import {useQuery} from "react-query";
import axios from '../../../axios'

import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {toast} from "react-toastify";
import ThrowGallery from "../../Utils/ThrowGallery";
import ReportCard from "./ReportCard";
import Back from "../../Utils/Back";
import Error from "../../Utils/Error";
import LoadingTriangle from "../../Utils/LoadingTriangle";
import PositionsChart from "../Analysis/Charts/PositionsChart";
import Header from "../../Utils/Header";



async function fetchFrameList({ queryKey }) {
    const [_, playerId, trainingProgramId] = queryKey

    const {data} = await axios.get(`/api/training/results/frameslist/${playerId}/${trainingProgramId}`, {
        headers: {
            "x-access-token": localStorage.getItem('token')
        }
    })
    return data
}


const useStyles = makeStyles(() => ({
    mainProgram: {
        background: 'white',
        borderRadius: '28px',
        opacity: '95%',
        width: '100%'
    },
    space:{
        height:'180px'
    },
    mainTitle: {
        fontFamily: 'Roboto Mono',
        fontSize: '25px',
        margin: '0 auto',
        width: '30%',
        alignItems:'center'
    },
    improveBox:{
        width: '50%',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
        border: '1px solid black',
        borderRadius: '10px',
        marginTop:'2vh',
        margin:'0 auto'
    },
    subTitle:{
        marginTop:'3vh',
        margin: '0 auto',
        width: '30%',
        fontFamily: 'Roboto Mono',
        fontSize: '25px',
    },
    improveText:{
        fontSize: '15px',
        textAlign:'center',
        opacity:'90%'
    }

}))
const images=[]
const fetchFrame = async (trainingProgramId,playerId,frame) => {
    axios.get(`/api/training/results/frames/${playerId}/${trainingProgramId}/${frame}`, {
            headers: {
                "x-access-token": localStorage.getItem('token'),
            }, responseType: 'blob'
        }
    ).then(r => {
        const url = window.URL.createObjectURL(new Blob([r.data]));
        const newImg = {'original': url, 'thumbnail': url}

        images.push(newImg)
    })
}

const ResultReport = () =>{
    const classes = useStyles();
    let location = useLocation();
    const [user] = useOutletContext()
    const [frames, setFrames] = useState([])
    const playerId = location.state.results.playerId
    const result = location.state.results
    const trainingProgramId = result.trainingProgramId

    const {data, error, isError, isLoading} = useQuery(['frames', playerId, trainingProgramId], fetchFrameList)

    useEffect(()=>{
        if(data?.length)
            setFrames(data)
    },[data])

    if(frames?.length){
        data.forEach(frame=>{
            fetchFrame(trainingProgramId, location.state.results.playerId,frame ).then().catch()
        })
        setFrames([])
    }

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
    let date = new Date(result.date).toLocaleDateString()

    return(
        <div >
            <Header user={user}/>
            <div className={classes.space}/>
            <div className={classes.mainProgram}>
                <Typography className={classes.mainTitle}> Results Report {date}</Typography>
                <section>
                    <ReportCard results={result}/>
                </section>
                <section style={{marginTop: 70}}>
                    <PositionsChart results={result}/>
                </section>
                <section>
                    <Typography className={classes.subTitle}> Throw Pictures </Typography>
                    {images ?<ThrowGallery images={images}/>:null }
                </section>
            </div>
        </div>
    )
}
export default ResultReport