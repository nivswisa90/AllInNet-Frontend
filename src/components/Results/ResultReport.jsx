import React from 'react'
import {useLocation, useParams} from 'react-router-dom'
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@mui/material";
import ReportCard from "./ReportCard";
import Box from "@mui/material/Box";
import ThrowGallery from "../Utils/ThrowGallery";
import Back from "../Utils/Back";
import axios from "../../axios";
const useStyles = makeStyles(() => ({
    mainProgram: {
        background: '#FFF9F4',
        borderRadius: '28px',
        opacity: '90%',
        width: '100%'
    },
    space:{
        height:'180px'
    },
    mainTitle: {
        fontFamily: 'Roboto Mono',
        fontSize: '25px',
        margin: '0 auto',
        width: '30%',
    },
    improveBox:{
        width: '50%',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
        border: '1px solid black',
        borderRadius: '10px',
        marginTop:'2vh',
        margin:'0 auto'
    },
    subTitle:{
        marginTop:'3vh',
        margin: '0 auto',
        width: '30%',
        fontFamily: 'Roboto Mono',
        fontSize: '25px',
    },
    improveText:{
        fontSize: '15px',
        textAlign:'center',
        opacity:'90%'
    }

}))


const ResultReport = () =>{
    const classes = useStyles();
    let location = useLocation();
    const result = location.state.result


    console.log('results in report',result)
    return(
        <div>
            <Back/>
            <div className={classes.space}/>
            <div className={classes.mainProgram}>
                <Typography className={classes.mainTitle}> Results Report </Typography>
                <section>
                    <ReportCard positions={result.positions}/>
                </section>
                <section>
                    <Typography className={classes.subTitle}> Improvement </Typography>
                    <Box className={classes.improveBox}>
                        <p className={classes.improveText}>You should bla bla bla bla bla </p>
                    </Box>
                </section>
                <section>
                    <Typography className={classes.subTitle}> Throw Pictures </Typography>
                    <ThrowGallery/>
                </section>
            </div>
        </div>
    )
}
export default ResultReport