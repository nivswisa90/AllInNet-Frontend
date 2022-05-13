import React from 'react'
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import LoginForm from "../Login/loginForm";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import RegisterForm from "./RegisterForm";
const useStyles = makeStyles(() => ({
    container: {
        // display: 'flex',
        height:'100%',
    },
    mainTitle: {
        fontSize: "49px",
        display: 'flex',
        color: 'white',
        justifyContent: 'center',
        fontStyle: 'normal',
        fontWeight: 200,
        fontFamily: 'Roboto Mono',
    },
    registerBox: {
        margin:'0 auto',
        width: '550px',
        height: '400px',
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
        height:'440px'
    },
}))

const Register =()=>{
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.space}/>
                <Box className={classes.registerBox}>
                    <div className={classes.titleBox}>
                        <Typography className={classes.mainTitle}>Register</Typography>
                        <RegisterForm/>
                    </div>
                </Box>
                <div className={classes.space}/>
            </div>



    )
}
export default Register