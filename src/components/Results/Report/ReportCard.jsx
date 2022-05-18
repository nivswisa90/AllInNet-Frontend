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
                <OnePosCard id={1} suc={props.result.positions.successPos1} total={props.result.positions.counterPos1} min={props.result.positions.min1}/>
                <OnePosCard id={2} suc={props.result.positions.successPos2} total={props.result.positions.counterPos2} min={props.result.positions.min2}/>
                <OnePosCard id={3} suc={props.result.positions.successPos3} total={props.result.positions.counterPos3} min={props.result.positions.min3}/>
                <OnePosCard id={4} suc={props.result.positions.successPos4} total={props.result.positions.counterPos4} min={props.result.positions.min4}/>
                <OnePosCard id={5} suc={props.result.positions.successPos5} total={props.result.positions.counterPos5} min={props.result.positions.min5}/>
                <OnePosCard id={6} suc={props.result.positions.successPos6} total={props.result.positions.counterPos6} min={props.result.positions.min6}/>
        </div>

    )
}
export default ReportCard