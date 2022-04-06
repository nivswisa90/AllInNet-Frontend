import React from 'react'
import {BallTriangle} from "react-loader-spinner";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    loading: {
        position: 'absolute',
        top: '60vh',
        left: '25vh'
    }
}))
const LoadingTriangle = () => {
    const classes = useStyles();

    return (
        <div className={classes.loading}>
            <BallTriangle
                heigth="100"
                width="100"
                color="grey"
                ariaLabel="loading-indicator"
            /></div>
    )
}
export default LoadingTriangle