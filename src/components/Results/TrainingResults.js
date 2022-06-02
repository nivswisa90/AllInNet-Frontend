import React, {useEffect, useState} from 'react'
import {Typography} from "@mui/material";
import {CardGroup} from "react-bootstrap";
import axios from "../../axios";
import {makeStyles} from "@material-ui/core/styles";
import {useQuery} from "react-query";
import LoadingTriangle from "../Utils/LoadingTriangle";
import {toast, ToastContainer} from "react-toastify";
import ResultCard from "./ResultCard";

async function fetchResults() {
    const {data} = await axios.get('/api/training/results/trainingResult', {
        headers: {
            "Content-type": "application/json",
            "x-access-token": localStorage.getItem('token')
        }
    })
    data.sort(function (x, y) {
        return (Date.parse(x.date) >= Date.parse(y.date)) ? 0 : x ? -1 : 1
    })
    return data
}


const useStyles = makeStyles(() => ({
    resultsContainer: {
        margin: '0 auto',
        width: '90%',
        marginTop: '2vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent:'space-around'
    },
    resultsTitle: {
        fontFamily: 'Roboto Mono',
        fontSize: '30px',
        margin: '0 auto',
        marginTop: '2vh',
        width: '50%'
    }
}))
const TrainingResults = () => {
    const classes = useStyles();
    const {data, error, isError, isLoading} = useQuery('results', fetchResults)
    const [results, setResults] = useState(null)

    useEffect(() => {
        setResults(data)
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
        return <div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            /></div>
    }
    return (
        <div>
            <Typography className={classes.resultsTitle}> Training Results </Typography>
            <CardGroup className={classes.resultsContainer}>
                {results ? results.map((result, index) => (
                    <ResultCard key={result.id} index={index} results={result}/>
                )) : null
                }
            </CardGroup>
        </div>
    )
}
export default TrainingResults