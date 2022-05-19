import React, {useState} from 'react'
import AvatarMenu from "../../Utils/AvatarMenu";

import {makeStyles} from "@material-ui/core/styles";
import {useOutletContext} from "react-router-dom";
import FilterByPositions from "./FilterByPositions";
import {useQuery} from "react-query";
import LoadingTriangle from "../../Utils/LoadingTriangle";
import {toast} from "react-toastify";
import Error from "../../Utils/Error";
import axios from "../../../axios";
import ChartPerPosition from "../../Charts/ChartPerPosition";

const useStyles = makeStyles(() => ({
    mainProgram: {
        background: '#FFF9F4',
        borderRadius: '28px',
        opacity: '90%',
        width: '100%'
    },
    filterBar: {
        border: '0.2px solid black',
        borderRadius: '5px',
        width: '80%',
        margin: '0 auto'
    },
    filterPosTilte: {
        fontFamily: 'Roboto Mono',
        fontSize: '15px',

    },
    graphContainer: {
        border: '0.2px solid black',
    },
    precentageContainer: {
        border: '0.2px solid black',
    },
    pieContainer: {
        border: '0.2px solid black',
    },
    space: {
        height: '180px'
    },

}))

async function fetchResults(filter) {
    const {data} = await axios.get(`/api/training/results/getResults/${filter}`, {
        headers: {
            "x-access-token": localStorage.getItem('token')
        }
    })
    return data
}


const HistoryReport = () => {
    const [user] = useOutletContext()
    const classes = useStyles()
    const [filtered, setFiltered] = useState()
    const [positionsFilter, setPositionsFilter] = useState({})

    const handleCheckbox = (event) => {
        setPositionsFilter({
            [event.target.name]: event.target.checked
        });
        fetchResults(event.target.name).then(doc => setFiltered(doc))
    };

    const {data, error, isError, isLoading} = useQuery('results', fetchResults)

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


    return (
        <div>
            <AvatarMenu user={user}/>
            <div className={classes.space}/>
            <div className={classes.mainProgram}>
                <div className={classes.filterBar}>
                    <FilterByPositions handleCheckbox={handleCheckbox}/>
                    <div className={classes.graphContainer}>
                        {filtered ? <ChartPerPosition data={filtered} position={positionsFilter}/> : <LoadingTriangle/>}
                    </div>
                    <div className={classes.precentageContainer}>
                        SHOULD BE %%%
                    </div>
                    <div className={classes.pieContainer}>
                        SHOULD BE PIEEE
                    </div>
                </div>
            </div>
            <div className={classes.space}/>
        </div>
    )
}
export default HistoryReport