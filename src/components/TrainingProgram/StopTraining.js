import React, {useEffect, useRef, useState} from 'react'
import Button from '@material-ui/core/Button';
// import axios from 'axios';
import Grid from "@material-ui/core/Grid";
import {useHistory} from "react-router-dom";

const StopTraining = () => {

    const [timer, setTimer] = useState(0);
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1); // important else timer value will always be 0, since its a closure
        }, 1000);
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);
    const history = useHistory();

    const routeChange = () => {
        let path = '/trainingResult';
        history.push(path);
    }

    return (
        <div>
            <h1 style={{
                fontWeight: 90,
                fontSize: 50,
                textAlign: "center",
                fontFamily: "'Encode sans Expanded', sans-serif"
            }}>
                Current Training Time
            </h1>
            <Grid container justifyContent="center">
                <Button
                    variant="outlined"
                    color="secondary"

                >
                    Timer - {timer}
                </Button>
            </Grid>
            <h3 style={{
                fontWeight: 90,
                fontSize: 50,
                textAlign: "center",
                fontFamily: "'Encode sans Expanded', sans-serif"
            }}>
                Do you finish your training?
                If yes click
            </h3>
            <Grid container justifyContent="center">
                <Button
                    onClick={routeChange}
                    variant="outlined"
                    color="primary"
                >
                    Stop Training
                </Button>
            </Grid>
        </div>
    )
}

export default StopTraining