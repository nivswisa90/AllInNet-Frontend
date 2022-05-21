import React, {useEffect, useState} from 'react'
import axios from "../../../axios";
import {useOutletContext} from "react-router-dom";


import AvatarMenu from "../../Utils/AvatarMenu";
import FilterByPositions from "./FilterByPositions";
import LoadingTriangle from "../../Utils/LoadingTriangle";
import PositionsChart from "../../Charts/PositionsChart";
import ChartPerPosition from "../../Charts/ChartPerPosition";
import PChart from "../../Charts/PChart";
import PrecentBox from "./PrecentBox";
import Back from "../../Utils/Back";

import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@mui/material";


const useStyles = makeStyles(() => ({
    mainProgram: {
        background: 'white',
        borderRadius: '28px',
        width: '100%'
    },
    graphsContainer: {
        width: '100%',
        margin: '0 auto'
    },
    filterPosTitle: {
        fontFamily: 'Roboto Mono',
        fontSize: '15px',

    },
    chartContainer: {
        margin: '0 auto',
        marginTop: '2vh',
        marginBottom: '2vh',
        borderRadius: '5px',
        width: '90%',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
    },
    percentageContainer: {
        marginTop: '4vh',
        marginBottom: '4vh'
    },
    pieContainer: {
        margin: '0 auto',
        marginTop: '2vh',
        marginBottom: '2vh',
        borderRadius: '5px',
        background: 'white',
        width: '50%',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
    },
    space: {
        height: '180px'
    },
    filterBar: {
        width: '90%',
        margin: '0 auto'
    },
    precentageTitle: {
        fontFamily: 'Roboto Mono',
        margin: '0 auto',
        width: '75%',
        fontSize: '25px',
        marginBottom:'2vh'
    }

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
    const [pie, setPie] = useState()
    const [positionsFilter, setPositionsFilter] = useState({
        "All": true
    })
    const [selected, setSelected] = useState('All');

    const handleChange = (event) => {
        setSelected(event.target.value);
    };

    useEffect(() => {
        handleCheckbox(selected)
    }, [selected])

    useEffect(() => {
        const pos = Object.keys(positionsFilter)[0]
        fetchResults(pos).then(doc => {
            setFiltered(doc)
            setPie(doc)
        })
    }, [positionsFilter])

    const handleCheckbox = (val) => {
        setFiltered()
        setPositionsFilter({
            [val]: true
        });
        fetchResults(val).then(doc => {
            setFiltered(doc)
        })
    };
    return (
        <div>

            <AvatarMenu user={user}/>
            <span><Back/></span>
            <div className={classes.space}/>
            <div className={classes.mainProgram}>
                <div className={classes.graphsContainer}>
                    <section className={classes.filterBar}>
                        <FilterByPositions handleCheckbox={handleCheckbox} handleChange={handleChange}
                                           selected={selected}/>
                    </section>
                    <div className={classes.chartContainer}>
                        {filtered && positionsFilter["All"] ? <PositionsChart result={filtered}/> : filtered ?
                            <ChartPerPosition data={filtered} position={positionsFilter}/> : <LoadingTriangle/>}
                    </div>
                    <div className={classes.percentageContainer}>
                        <Typography className={classes.precentageTitle}>Improvement ratio at the last
                            week</Typography>
                        <PrecentBox results={filtered}/>
                    </div>
                    <div className={classes.pieContainer}>
                        {pie ? <PChart result={pie}/> : <LoadingTriangle/>}
                    </div>
                </div>
            </div>
            <div className={classes.space}/>
        </div>
    )
}
export default HistoryReport