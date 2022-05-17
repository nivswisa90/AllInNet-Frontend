import React, {useState} from 'react'
import {useLocation, useParams} from 'react-router-dom'
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@mui/material";
import ReportCard from "./ReportCard";
import Box from "@mui/material/Box";
import ThrowGallery from "../Utils/ThrowGallery";
import Back from "../Utils/Back";
import axios from "../../axios";
import {useQuery} from "react-query";
import LoadingTriangle from "../Utils/LoadingTriangle";
import {toast} from "react-toastify";
import Error from "../Utils/Error";

async function fetchFrameList() {
    const {data} = await axios.get('/api/training/results/frameslist', {
        headers: {
            "x-access-token": localStorage.getItem('token')
        }
    })
    return data
}


const useStyles = makeStyles(() => ({
    mainProgram: {
        background: '#FFF9F4',
        borderRadius: '28px',
        opacity: '90%',
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
    },
    improveBox:{
        width: '50%',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
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


const ResultReport = () =>{
    const classes = useStyles();
    let location = useLocation();
    const result = location.state.result
    const {data, error, isError, isLoading} = useQuery('frames', fetchFrameList, {refetchInterval: 5000})
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
    return(
        <div>
            <Back/>
            <div className={classes.space}/>
            <div className={classes.mainProgram}>
                <Typography className={classes.mainTitle}> Results Report </Typography>
                <section>
                    <ReportCard positions={result.positions}/>
                </section>
                <section>
                    <Typography className={classes.subTitle}> Improvement </Typography>
                    <Box className={classes.improveBox}>
                        <p className={classes.improveText}>Congratulations! The training is over. Your strongest shot position is Number 1 with a 75% success rate.
                        The position you should improve is number 6, where you have a 25% success rate</p>
                    </Box>
                </section>
                <section>
                    <Typography className={classes.subTitle}> Throw Pictures </Typography>
                    <ThrowGallery frameList={data}/>
                </section>
            </div>
        </div>
    )
}
export default ResultReport