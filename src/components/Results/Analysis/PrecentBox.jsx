import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {VscArrowDown, VscArrowUp} from 'react-icons/vsc'


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
    return (
        <div className={classes.percentContainer}>
            <div><VscArrowUp/> %6</div>
            <div><VscArrowDown/> %6</div>
            <div><VscArrowDown/> %6</div>
            <div><VscArrowDown/> %6</div>
            <div><VscArrowUp/> %6</div>
            <div><VscArrowUp/> %6</div>
        </div>
    )
}
export default PercentBox