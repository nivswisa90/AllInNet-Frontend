import React from 'react'
import {CircularProgressbar} from "react-circular-progressbar";

const ProgressBar = (props) => {
    const success = props.success
    const counter = props.counter === 0 ? 1 : props.counter
    const value = Math.round(success/counter*100)
    return(
        <div style={{ width: 200, height: 200 }}>
            <CircularProgressbar value={value} text={`${value}%`}/>
        </div>
    )
}

export default ProgressBar