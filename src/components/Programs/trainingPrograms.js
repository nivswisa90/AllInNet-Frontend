import React, {useEffect, useState} from 'react'
import axios from "../../axios";
import {useQuery} from "react-query";

// Style imports
import {Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import {CardGroup} from "react-bootstrap";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Local imports
import ProgramCard from "./programCard";
import LoadingTriangle from "../Utils/LoadingTriangle";
import Error from "../Utils/Error";

async function fetchPrograms() {
    const {data} = await axios.get('/api/training/programs/', {
        headers:{
            "x-access-token":localStorage.getItem('token')
        }
    })
    return data
}


const useStyles = makeStyles(() => ({
    programsContainer: {
        marginTop: '2vh',
        margin:'0 auto',
        width:'80%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    programsTitle: {
        fontFamily: 'Roboto Mono',
        fontSize: '15px',
        margin: '0 auto',
        marginTop: '2vh',
        width: '25%'
    }
}))


const TrainingPrograms = () => {
    const classes = useStyles();
    const {data, error, isError, isLoading} = useQuery('programs', fetchPrograms)
    const [programs, setPrograms] = useState(null);

    useEffect(() => {
        setPrograms(data)
    }, [data])

    if (isLoading) {
        return <LoadingTriangle/>
    }

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

    // const [lastResult, setLastResult] = useState(null);
    // const [alertCounter, setAlertCounter] = useState(0);

    // const AlertResult = () => {
    //     if (lastResult[0].result === 'Pass' && alertCounter !== 1) {
    //         toast("You passed the training program!");
    //         setAlertCounter(1)
    //     } else if (lastResult[0].result === 'Fail' && alertCounter !== 1) {
    //         setAlertCounter(1)
    //         toast("You failed!");
    //     }
    // }

    return (
        <div id="trainingProgramWrapper">
            <Typography className={classes.programsTitle}> Training Programs </Typography>
            <CardGroup className={classes.programsContainer}>
                {programs ? programs.map((program, index) => (
                    <ProgramCard key={program.id} index={index} program={program} isNew={program.isNew}/>
                )) : null}
            </CardGroup>
        </div>
    )
}
export default TrainingPrograms