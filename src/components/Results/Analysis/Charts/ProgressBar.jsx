import React from 'react'
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

import {Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
    postTitle:{
        fontFamily: 'Roboto Mono',
        fontSize: '15px',
        width:'50%',
        margin:'0 auto',
    }
}))
const ProgressBar = (props) => {
    const success = props.success
    const counter = props.counter === 0 ? 1 : props.counter
    const progressValue = Math.round(success/counter*100)
    const color = progressValue > 50 ? '#00b300': '#f88'
    const classes = useStyles();

    return(
        <div style={{ width: 190, height: 215 }}>
            <Typography className={classes.postTitle}>{props.pos}</Typography>
            <CircularProgressbar progressValue={progressValue} text={`${progressValue}%`} styles={buildStyles({
                rotation: 1,
                strokeLinecap: 'round',
                textSize: '15px',
                pathColor: `rgba(62, 152, 199, ${progressValue / 100})`,
                textColor: color,
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
            })}/>
        </div>
    )
}

export default ProgressBar