import React from 'react'
import {useLocation, useParams} from 'react-router-dom'
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@mui/material";
import ReportCard from "./ReportCard";
import Box from "@mui/material/Box";
import ThrowGallery from "../Utils/ThrowGallery";
import Back from "../Utils/Back";
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
        width: '59%',
    },
    improveBox:{
        width: '70%',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
        border: '1px solid black',
        borderRadius: '10px',
        marginLeft:'7vh',
        marginTop:'2vh'
    },
    subTitle:{
        marginTop:'3vh',
        margin: '0 auto',
        width: '50%',
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

    let params= useParams()
    // const { state } = location.state;
    // console.log(state)
    console.log(params)
    return(
        <div>
            <Back/>
            <div className={classes.space}/>
            <div className={classes.mainProgram}>
                <Typography className={classes.mainTitle}> Results Report </Typography>
                <section>
                    <ReportCard/>
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