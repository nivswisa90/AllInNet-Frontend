import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import TrainingProgramForm from "./TrainingProgramForm";
import { useLocation} from "react-router-dom";
import Back from "../../Utils/Back";
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
        height: '550px',
        background: '#FEFEFE',
        borderRadius: '23px',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'

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
    const location = useLocation()
    const id = location.state.id

    return (
        <div className={classes.container}>
            <span><Back/></span>
            <div className={classes.space}/>
            <Box className={classes.landingBox}>
                <div className={classes.titleBox}>
                    <Typography className={classes.mainTitle}>New training program</Typography>
                    <TrainingProgramForm id={id}/>
                </div>
            </Box>
            <div className={classes.space}/>
        </div>
    )
}
export default BuildTrainingProgram