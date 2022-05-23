import React from 'react'
import {CircularProgressbar} from "react-circular-progressbar";

const ProgressBarPerPosition = (props) => {
    const success = props.data.positions.success
    const total = props.data.positions.total === 0 ? 1 : props.data.positions.total
    const value = Math.round(success/total*100)

    return(
        <div style={{ width: 200, height: 200, margin:'0 auto' }}>
            <CircularProgressbar value={value} text={`${value}%`}/>
        </div>
    )
}

export default ProgressBarPerPosition