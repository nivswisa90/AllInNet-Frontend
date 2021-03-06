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
            marginTop:'5%',
            padding: '1vh',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
            alignItems: 'center',
            borderRadius: '5px',
        }
    }
}))

const PercentBox = ({results}) => {
    const classes = useStyles()
    const positions = results.positions
    return (
        <div className={classes.percentContainer}>
            <ProgressBar pos={'Position 1'} success={parseInt(positions.successPos1)} counter={parseInt(positions.counterPos1)}/>
            <ProgressBar pos={'Position 2'} success={parseInt(positions.successPos2)} counter={parseInt(positions.counterPos2)}/>
            <ProgressBar pos={'Position 3'} success={parseInt(positions.successPos3)} counter={parseInt(positions.counterPos3)}/>
            <ProgressBar pos={'Position 4'} success={parseInt(positions.successPos4)} counter={parseInt(positions.counterPos4)}/>
            <ProgressBar pos={'Position 5'} success={parseInt(positions.successPos5)} counter={parseInt(positions.counterPos5)}/>
            <ProgressBar pos={'Position 6'} success={parseInt(positions.successPos6)} counter={parseInt(positions.counterPos6)}/>
        </div>
    )
}
export default PercentBox