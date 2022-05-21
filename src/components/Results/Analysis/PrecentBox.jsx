import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {VscArrowDown, VscArrowUp} from 'react-icons/vsc'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from "./Charts/ProgressBar";



const useStyles = makeStyles(() => ({
    percentContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        '& div': {
            margin: '0 auto',
            marginLeft: '3vh',
            padding: '1vh',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
            alignItems: 'center',
            borderRadius: '5px'
        }
    }
}))

const PercentBox = (props) => {
    const classes = useStyles()
    const positions = props.results.positions

    return (
        <div className={classes.percentContainer}>

            <ProgressBar success={parseInt(positions.successPos1)} counter={parseInt(positions.counterPos1)}/>
            <ProgressBar success={parseInt(positions.successPos2)} counter={parseInt(positions.counterPos2)}/>
            <ProgressBar success={parseInt(positions.successPos3)} counter={parseInt(positions.counterPos3)}/>
            <ProgressBar success={parseInt(positions.successPos4)} counter={parseInt(positions.counterPos4)}/>
            <ProgressBar success={parseInt(positions.successPos5)} counter={parseInt(positions.counterPos5)}/>
            <ProgressBar success={parseInt(positions.successPos6)} counter={parseInt(positions.counterPos6)}/>
            {/*<div><VscArrowUp/> %6</div>*/}
            {/*<div><VscArrowDown/> %6</div>*/}
            {/*<div><VscArrowDown/> %6</div>*/}
            {/*<div><VscArrowDown/> %6</div>*/}
            {/*<div><VscArrowUp/> %6</div>*/}
            {/*<div><VscArrowUp/> %6</div>*/}
        </div>
    )
}
export default PercentBox