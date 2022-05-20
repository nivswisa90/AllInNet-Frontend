import React from 'react'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    title:{
        fontFamily: 'Roboto Mono',
        margin:'0 auto',
        width:'25%',
        fontSize:'25px'
    },
    percentContainer:{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        '& div': {
            margin: '0 auto',
            marginLeft: '3vh',
            padding: '1vh',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
        }
    }
}))

const PercentBox = () =>{
    const classes = useStyles()

    return(
        <div className={classes.percentContainer}>
            <div> + %6</div>
            <div> + %6</div>
            <div> + %6</div>
            <div> + %6</div>
            <div> + %6</div>
            <div> + %6</div>
        </div>
    )
}
export default PercentBox