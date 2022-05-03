import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import TrainingProgramForm from "./TrainingProgramForm";
import LoginForm from "../../Login/loginForm";
import {Link} from "react-router-dom";
const useStyles = makeStyles(() => ({
    container: {
        // height: '100%'
    },
    mainTitle: {
        fontSize: "40px",
        display: 'flex',
        color: 'white',
        justifyContent: 'center',
        fontStyle: 'normal',
        fontWeight: 200,
        fontFamily: 'Roboto Mono',
    },
    landingBox: {
        margin:'0 auto',
        width: '550px',
        height: '600px',
        background: '#FEFEFE',
        borderRadius: '23px',
    },
    titleBox: {
        width: "550px",
        height: '90px',
        background: 'rgba(68, 182, 239, 0.69)',
        borderRadius: ' 17px 17px 0px 0px',
    },
    space:{
        height:'500px'
    },
}))

const BuildTrainingProgram = () =>{
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.space}/>
            <Box className={classes.landingBox}>
                <div className={classes.titleBox}>
                    <Typography className={classes.mainTitle}>New training program</Typography>
                    <TrainingProgramForm/>

                </div>
            </Box>
            <div className={classes.space}/>
        </div>
    )
}
export default BuildTrainingProgram