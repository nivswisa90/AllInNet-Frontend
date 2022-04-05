import React, {useEffect, useState} from 'react'
import {Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import court from '../media/courtPositions.jpeg'
import ProgramCard from "./programCard";
import {CardGroup} from "react-bootstrap";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "../axios";

const useStyles = makeStyles(() => ({
    mainProgram:{
        position: 'relative',
        width: '350px',
        height: '800px',
        top: '280px',
        background:'#FFF9F4',
        borderRadius:'28px',
        opacity:'95%'
    },
    mainTitle:{
        fontFamily: 'Roboto Mono',
        contrastText: "black",
        left:'5vh',
        fontSize:'30px',
        top:'5vh'
    },
    courtPositions:{
        backgroundImage: `url(${court})`,
        backgroundRepeat: 'no-repeat',
        marginLeft:'29vh',
        height: '189px',
    },
    programsContainer:{
        marginLeft:'3vh',
        marginTop:'2vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    programsTitle:{
        fontFamily: 'Roboto Mono',
        fontSize:'15px',
        margin:'0 auto',
        width:'50%'
    }

}))

const TrainingPrograms = () => {
    const classes = useStyles();
    const [results, setResults] = useState(null);
    const [lastResult, setLastResult] = useState(null);
    const [alertCounter, setAlertCounter] = useState(0);

    const getResult = () => {
        const id = "66bb8ab1-a2ce-470b-a269-f73160c04c97";
        axios({
            url: `/api/training/results/`,
            method: "get",
        })
            .then((res) => {
                setResults(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        axios({
            url: `/api/training/results/${id}`,
            method: "get",
        })
            .then((res) => {
                setLastResult(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const AlertResult = () => {
        if (lastResult[0].result === 'Pass' && alertCounter !== 1) {
            toast("You passed the training program!");
            setAlertCounter(1)
        } else if (lastResult[0].result === 'Fail' && alertCounter !== 1){
            setAlertCounter(1)
            toast("You failed!");
        }
    }
    useEffect(() => getResult(), [])
    return (
        <div className={classes.mainProgram}>
            <Typography className={classes.mainTitle}> Welcome Back ...</Typography>
            <section className={classes.courtPositions}>
            </section>
            <div >
                <Typography className={classes.programsTitle}> Training Programs </Typography>
                <CardGroup className={classes.programsContainer} >
                    <ProgramCard />
                    <ProgramCard />
                    <ProgramCard />
                    <ProgramCard />
                </CardGroup>
            </div>
        </div>
    )
}
export default  TrainingPrograms