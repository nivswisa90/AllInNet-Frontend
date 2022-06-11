import React, {useEffect, useState} from 'react'
import axios from "../../../axios";
import {useOutletContext} from "react-router-dom";
import moment from 'moment'

import AvatarMenu from "../../Utils/AvatarMenu";
import LoadingTriangle from "../../Utils/LoadingTriangle";
import PositionsChart from "./Charts/PositionsChart";
import PrecentBox from "./PrecentBox";
import {makeStyles} from "@material-ui/core/styles";
import DatePicker from "../../Utils/DatePicker"
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
        // width: '50%',
        // margin: '0 auto',
        display: 'inline-block',
        marginTop: '5%',
        marginLeft: '5%'
    },
    percentageTitle: {
        fontFamily: 'Roboto Mono',
        margin: '0 auto',
        width: '75%',
        fontSize: '25px',
        marginBottom: '2vh'
    }

}))

async function fetchResults(playerId, start, end) {
    const {data} = await axios.get(`/api/training/results/${playerId}/${start}/${end}`, {
        headers: {
            "x-access-token": localStorage.getItem('token')
        }
    })
    return data
}


const HistoryReport = (props) => {
    const [user] = useOutletContext()
    const classes = useStyles()
    const [filterDate, setFilteredDate] = useState()
    const [playerId, setPlayerId] = useState()
    const [pie, setPie] = useState()
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

    // useEffect(() => {
    //     handlePositionCheckBox(selectedPosition)
    //     fetchResults( playerId, startDate,endDate).then(doc => {
    //         setFilteredDate(doc)
    //     })
    // }, [selectedPosition])
    //
    // useEffect(() => {
    //     handleDateCheckBox(selectedDate)
    // }, [selectedDate])
    //
    // useEffect(() => {
    //     const pos = Object.keys(positionsFilter)[0]
    //     const date = Object.keys(dateFilter)[0]
    //     fetchResults(pos, playerId, date).then(doc => {
    //         setFilteredDate(doc)
    //         setPie(doc)
    //     })
    // }, [positionsFilter, dateFilter])
    //
    // useEffect(() => {
    //     setPositionsFilter({"All": true})
    //     setDateFilter({"All": true})
    // }, [])
    const [startDate, setStartDate] = useState('2022-01-01');
    const [endDate, setEndDate] = useState(moment().format('YYYY-MM-DD'));
    useEffect(() => {
        const id = user.role === 'coach' ? props.playerId : user.id
        setPlayerId(id)
    }, [])

    useEffect(() => {
        if (playerId !== undefined) {
            fetchResults(playerId, startDate, endDate).then(r => {
                setFilteredDate(r)
            })
        }
    }, [playerId])

    // const handlePositionCheckBox = (val) => {
    //     // setFilteredDate()
    //     setPositionsFilter({
    //         [val]: true
    //     });
    // };

    // const handleDateCheckBox = (val) => {
    //     setFilteredDate()
    //     setDateFilter({
    //         [val]: true
    //     })
    // }


    const handleStartDate = (newValue) => {
        let parsed = moment(newValue, 'YYYY-MM-DD')
        setStartDate(parsed);
    };
    const handleEndDate = (newValue) => {
        let parsed = moment(newValue, 'YYYY-MM-DD')
        setEndDate(parsed);
    };

    const fetchFilteredResults = () => {
        fetchResults(playerId, startDate, endDate).then(doc => {
            setFilteredDate(doc)
        })
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
                        <DatePicker handleEndDate={handleEndDate} handleStartDate={handleStartDate}
                                    startDate={startDate} endDate={endDate}
                                    fetchFilteredResults={fetchFilteredResults}/>
                    </section>
                    <div className={classes.chartContainer}>
                        {filterDate ? <PositionsChart results={filterDate}/> : <LoadingTriangle/>}
                    </div>
                    <div className={classes.percentageContainer}>
                        <Typography className={classes.percentageTitle}>Effectiveness by position</Typography>
                        {/*{filterDate && positionsFilter["All"] ? <PrecentBox results={filterDate}/> : filterDate ?*/}
                        {/*    <ProgressBarPerPosition data={filterDate} position={positionsFilter}/> : <LoadingTriangle/>}*/}
                        {filterDate ? <PrecentBox results={filterDate}/> : <LoadingTriangle/>}
                    </div>
                    <div className={classes.pieContainer}>
                        {/*{pie ? <PChart result={pie}/> : <LoadingTriangle/>}*/}
                    </div>
                </div>
            </div>
            <div className={classes.space}/>
        </div>
    )
}
export default HistoryReport