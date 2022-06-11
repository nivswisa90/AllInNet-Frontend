import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import OnePosCard from "./OnePosCard";
const useStyles = makeStyles(() => ({
    posContainer:{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    posCards:{
        margin:'vh'
    }
}))

const ReportCard = (props) =>{
    const classes = useStyles();
    return(
        <div className={classes.posContainer}>
                <OnePosCard id={1} suc={props.results.positions.successPos1} total={props.results.positions.counterPos1} min={props.results.positions.min1}/>
                <OnePosCard id={2} suc={props.results.positions.successPos2} total={props.results.positions.counterPos2} min={props.results.positions.min2}/>
                <OnePosCard id={3} suc={props.results.positions.successPos3} total={props.results.positions.counterPos3} min={props.results.positions.min3}/>
                <OnePosCard id={4} suc={props.results.positions.successPos4} total={props.results.positions.counterPos4} min={props.results.positions.min4}/>
                <OnePosCard id={5} suc={props.results.positions.successPos5} total={props.results.positions.counterPos5} min={props.results.positions.min5}/>
                <OnePosCard id={6} suc={props.results.positions.successPos6} total={props.results.positions.counterPos6} min={props.results.positions.min6}/>
        </div>

    )
}
export default ReportCard