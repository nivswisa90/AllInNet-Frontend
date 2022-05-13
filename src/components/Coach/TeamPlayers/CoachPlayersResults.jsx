import React, {useEffect, useState} from 'react'
import {useLocation, useOutletContext} from "react-router-dom";
import AvatarMenu from "../../Utils/AvatarMenu";
import {makeStyles} from "@material-ui/core/styles";
import axios from "../../../axios";
import {useQuery} from "react-query";
import LoadingTriangle from "../../Utils/LoadingTriangle";
import {toast} from "react-toastify";
import Error from "../../Utils/Error";
import ResultCard from "../../Results/ResultCard";
import {Typography} from "@mui/material";
import {CardGroup} from "react-bootstrap";

const useStyles = makeStyles(() => ({
    mainProgram: {
        background: '#FFF9F4',
        borderRadius: '28px',
        opacity: '90%',
        width: '100%'
    },

    loading: {
        position: 'absolute',
        top: '60vh',
        left: '25vh'
    },
    space: {
        height: '180px'
    },
    resultsContainer: {
        margin: '0 auto',
        width: '80%',
        marginTop: '2vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    resultsTitle: {
        fontFamily: 'Roboto Mono',
        fontSize: '15px',
        marginTop: '2vh',
        margin: '0 auto',
        width: '25%'
    }

}))


const CoachPlayersResults = () => {
    const location = useLocation()
    const playerName = location.state
    const [user] = useOutletContext()
    const classes = useStyles()
    const {data, error, isError, isLoading} = useQuery('result', fetchSpecificResult)
    const [results, setResults] = useState(null)

    async function fetchSpecificResult() {
        const {data} = await axios.get(`/api/training/results/trainingResult/${playerName.id}`, {
            headers: {
                "Content-type": "application/json",
                "x-access-token": localStorage.getItem('token')
            }
        })
        return data
    }

    useEffect(() => {
        setResults(data)
    }, [data])

    if (isLoading)
        return <LoadingTriangle className={classes.loading}/>

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
    return (
        <div>
            <AvatarMenu user={user}/>
            <div className={classes.space}/>
            <div className={classes.mainProgram}>
            <Typography className={classes.resultsTitle}> Training Results </Typography>
            <CardGroup className={classes.resultsContainer}>
                {results ? results.map((result, index) => (
                    <ResultCard key={result.id} index={index} results={result}/>
                )) : null}
            </CardGroup>
                <div className={classes.space}/>
            </div>
            <div className={classes.space}/>
        </div>
    )
}
export default CoachPlayersResults