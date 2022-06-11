import React from 'react'
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";

const ProgressBarPerPosition = (props) => {
    const success = props.data.positions.success
    const total = props.data.positions.total === 0 ? 1 : props.data.positions.total
    const value = Math.round(success/total*100)
    const color = value > 50 ? '#00b300': '#f88'

    return(
        <div style={{ width: 200, height: 200, margin:'0 auto' }}>
            <CircularProgressbar value={value} text={`${value}%`} styles={buildStyles({
                // rotation: 1,
                // strokeLinecap: 'round',
                textSize: '15px',
                pathColor: `rgba(62, 152, 199, ${value / 100})`,
                textColor: color,
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
            })}/>
        </div>
    )
}

export default ProgressBarPerPosition