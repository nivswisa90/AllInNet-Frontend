import React from 'react'
import {Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import court from '../media/courtPositions.jpeg'
import 'react-toastify/dist/ReactToastify.css';
import axios from "../axios";
import TrainingPrograms from "./Programs/trainingPrograms";
import TrainingResults from "./Results/TrainingResults";
import Container from "@mui/material/Container";

async function fetchPrograms() {
    const {data} = await axios.get('/api/training/programs/')
    return data
}


const useStyles = makeStyles(() => ({
    mainProgram: {
        // marginTop:'5vh',
        background: '#FFF9F4',
        borderRadius: '28px',
        opacity: '90%',
        width:'100%'
    },
    mainTitle: {
        fontFamily: 'Roboto Mono',
        contrastText: "black",
        left: '5vh',
        fontSize: '30px',
        top: '5vh'
    },
    courtPositions: {
        backgroundImage: `url(${court})`,
        backgroundRepeat: 'no-repeat',
        marginLeft: '30vh',
        height: '189px',
    },
    programsContainer: {
        marginLeft: '3vh',
        marginTop: '2vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    programsTitle: {
        fontFamily: 'Roboto Mono',
        fontSize: '15px',
        margin: '0 auto',
        width: '50%'
    },
    loading: {
        position: 'absolute',
        top: '60vh',
        left: '25vh'
    },
    space:{
        height:'180px'
    },

}))
const MainPage = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.space}></div>
            <div className={classes.mainProgram}>
                <Typography className={classes.mainTitle}> Welcome Back ...</Typography>
                <section className={classes.courtPositions}>
                </section>
                <TrainingPrograms/>
                <TrainingResults/>
            </div>
        </div>

    )
}
export default MainPage