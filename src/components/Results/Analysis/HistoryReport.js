import React, {useEffect, useState} from 'react'
import AvatarMenu from "../../Utils/AvatarMenu";

import {makeStyles} from "@material-ui/core/styles";
import {useOutletContext} from "react-router-dom";
import FilterByPositions from "./FilterByPositions";
import {useQuery} from "react-query";
import LoadingTriangle from "../../Utils/LoadingTriangle";
import {toast} from "react-toastify";
import Error from "../../Utils/Error";
import axios from "../../../axios";
import PositionsChart from "../../Charts/PositionsChart";
import ChartPerPosition from "../../Charts/ChartPerPosition";
import PChart from "../../Charts/PChart";
import PrecentBox from "./PrecentBox";

const useStyles = makeStyles(() => ({
    mainProgram: {
        background: '#FFF9F4',
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
        margin:'0 auto',
        marginTop:'2vh',
        marginBottom:'2vh',
        borderRadius:'5px',
        width:'90%',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
    },
    percentageContainer: {
        border: '0.2px solid black',
    },
    pieContainer: {
        margin:'0 auto',
        marginTop:'2vh',
        marginBottom:'2vh',
        borderRadius:'5px',
        background:'white',
        width:'50%',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
    },
    space: {
        height: '180px'
    },
    filterBar:{
        width:'90%',
        margin:'0 auto'
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

    useEffect(()=>{
        handleCheckbox(selected)
    },[selected])

    useEffect(() => {
        const pos = Object.keys(positionsFilter)[0]
        fetchResults(pos).then(doc => {
            setFiltered(doc)
            setPie(doc)
        })
    }, [])

    const handleCheckbox = (val) => {
        setFiltered()
        setPositionsFilter({
            [val]: true
        });
        fetchResults(val).then(doc => {
            setFiltered(doc)
        })
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
                <div className={classes.graphsContainer}>
                    <section className={classes.filterBar} >
                        <FilterByPositions handleCheckbox={handleCheckbox} handleChange={handleChange} selected={selected}/>
                    </section>
                    <div className={classes.chartContainer}>
                        {filtered && positionsFilter["All"] ? <PositionsChart result={filtered}/> : filtered ?
                            <ChartPerPosition data={filtered} position={positionsFilter}/> : <LoadingTriangle/>}
                    </div>
                    <div className={classes.percentageContainer}>
                        <PrecentBox/>
                    </div>
                    <div className={classes.pieContainer}>
                        {pie?<PChart result={pie}/>:<LoadingTriangle/>}
                    </div>
                </div>
            </div>
            <div className={classes.space}/>
        </div>
    )
}
export default HistoryReport