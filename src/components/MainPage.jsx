import React, { useState} from 'react'
import {Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import court from '../media/courtPositions.jpeg'
import {CardGroup} from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import axios from "../axios";
import {useQuery} from "react-query";

import {BallTriangle} from "react-loader-spinner";
import {toast, ToastContainer} from "react-toastify";
import ProgramCard from "./programCard";
import LoadingTriangle from "./LoadingTriangle";
import TrainingPrograms from "./trainingPrograms";
import Button from "@material-ui/core/Button";
import TrainingResults from "./TrainingResults";

async function fetchPrograms() {
    const {data} = await axios.get('/api/training/programs/')
    return data
}


const useStyles = makeStyles(() => ({
    mainProgram: {
        position: 'relative',
        width: '396px',
        height: '800px',
        top: '280px',
        background: '#FFF9F4',
        borderRadius: '28px',
        opacity: '95%'
    },
    mainTitle: {
        fontFamily: 'Roboto Mono',
        contrastText: "black",
        left: '5vh',
        fontSize: '30px',
        top: '5vh'
    },
    courtPositions: {
        backgroundImage: `url(${court})`,
        backgroundRepeat: 'no-repeat',
        marginLeft: '30vh',
        height: '189px',
    },
    programsContainer: {
        marginLeft: '3vh',
        marginTop: '2vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    programsTitle: {
        fontFamily: 'Roboto Mono',
        fontSize: '15px',
        margin: '0 auto',
        width: '50%'
    },
    loading: {
        position: 'absolute',
        top: '60vh',
        left: '25vh'
    }

}))
const MainPage = () =>{
    const classes = useStyles();
    return(
        <div className={classes.mainProgram}>
            <Typography className={classes.mainTitle}> Welcome Back ...</Typography>
            <section className={classes.courtPositions}>
            </section>
            <TrainingPrograms/>
            <TrainingResults/>
        </div>
    )
}
export default MainPage