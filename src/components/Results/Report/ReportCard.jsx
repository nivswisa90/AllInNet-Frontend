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
                <OnePosCard id={1} suc={props.result.positions.successPos1} min={props.result.positions.counterPos1}/>
                <OnePosCard id={2} suc={props.result.positions.successPos2} min={props.result.positions.counterPos2}/>
                <OnePosCard id={3} suc={props.result.positions.successPos3} min={props.result.positions.counterPos3}/>
                <OnePosCard id={4} suc={props.result.positions.successPos4} min={props.result.positions.counterPos4}/>
                <OnePosCard id={5} suc={props.result.positions.successPos5} min={props.result.positions.counterPos5}/>
                <OnePosCard id={6} suc={props.result.positions.successPos6} min={props.result.positions.counterPos6}/>
        </div>

    )
}
export default ReportCard