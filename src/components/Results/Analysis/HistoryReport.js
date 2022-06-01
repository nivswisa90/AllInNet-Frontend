import React, {useEffect, useState} from 'react'
import axios from "../../../axios";
import {useOutletContext} from "react-router-dom";


import AvatarMenu from "../../Utils/AvatarMenu";
import FilterByPositions from "./FilterByPositions";
import LoadingTriangle from "../../Utils/LoadingTriangle";
import PositionsChart from "./Charts/PositionsChart";
import ChartPerPosition from "./Charts/ChartPerPosition";
import PChart from "./Charts/PChart";
import PrecentBox from "./PrecentBox";

import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@mui/material";
import ProgressBarPerPosition from "./Charts/ProgressBarPerPosition";
import FilterByDate from "./FilterByDate";


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
        margin: '0 auto',
    },
    percentageTitle: {
        fontFamily: 'Roboto Mono',
        margin: '0 auto',
        width: '75%',
        fontSize: '25px',
        marginBottom: '2vh'
    }

}))

async function fetchResults(filter, playerId, date) {
    const {data} = await axios.get(`/api/training/results/getResults/${playerId}/${filter}/${date}`, {
        headers: {
            "x-access-token": localStorage.getItem('token')
        }
    })
    return data
}


const HistoryReport = (props) => {
    const [user] = useOutletContext()
    const classes = useStyles()
    const [filtered, setFiltered] = useState()
    const [pie, setPie] = useState()
    const playerId = user.role === 'coach' ? props.playerId : user.id
    const [positionsFilter, setPositionsFilter] = useState({
        "All": true
    })
    const [dateFilter, setDateFilter] = useState({
        "All": true
    })
    const [selectedPosition, setSelectedPosition] = useState('All');
    const [selectedDate, setSelectedDate] = useState('All')

    const handlePositionChange = (event) => {
        setSelectedPosition(event.target.value);
    };
    
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value)
    }

    useEffect(() => {
        handlePositionCheckBox(selectedPosition)
        fetchResults(positionsFilter, playerId, dateFilter).then(doc => {
            setFiltered(doc)
        })
    }, [selectedPosition])

    useEffect(() => {
        handleDateCheckBox(selectedDate)
    }, [selectedDate])

    useEffect(() => {
        const pos = Object.keys(positionsFilter)[0]
        const date = Object.keys(dateFilter)[0]
        fetchResults(pos, playerId, date).then(doc => {
            setFiltered(doc)
            setPie(doc)
        })
    }, [positionsFilter, dateFilter])

    useEffect(() => {
        setPositionsFilter({"All": true})
        setDateFilter({"All": true})
    }, [])

    const handlePositionCheckBox = (val) => {
        setFiltered()
        setPositionsFilter({
            [val]: true
        });
        // fetchResults(val, playerId, dateFilter).then(doc => {
        //     setFiltered(doc)
        // })
    };

    const handleDateCheckBox = (val) => {
        setFiltered()
        setDateFilter({
            [val]: true
        })
        // fetchResults(positionsFilter, playerId, val).then(doc => {
        //     setFiltered(doc)
        // })
    }

    return (
        <div>
            {user.role === 'coach' ? null : (<div>
                    <AvatarMenu user={user}/>
                    <div className={classes.space}/>
                </div>
            )}
            <div className={classes.mainProgram}>
                <div className={classes.graphsContainer}>
                    <section className={classes.filterBar}>
                        <FilterByPositions handlePositionChange={handlePositionChange} selectedPosition={selectedPosition}/>
                        <FilterByDate handleDateChange={handleDateChange} selectedDate={selectedDate}/>
                    </section>
                    <div className={classes.chartContainer}>
                        {filtered && positionsFilter["All"] ? <PositionsChart result={filtered}/> : filtered ?
                            <ChartPerPosition data={filtered} position={positionsFilter}/> : <LoadingTriangle/>}
                    </div>
                    <div className={classes.percentageContainer}>
                        <Typography className={classes.percentageTitle}>Effectiveness by position</Typography>
                        {filtered && positionsFilter["All"] ? <PrecentBox results={filtered}/> : filtered ?
                            <ProgressBarPerPosition data={filtered} position={positionsFilter}/> : <LoadingTriangle/>}
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