import React from 'react'
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import LoginForm from "../Login/loginForm";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import RegisterForm from "./RegisterForm";
const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
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
        width: '373px',
        // height: '300px',
        background: '#FEFEFE',
        borderRadius: '23px',
    },
    titleBox: {
        width: "373px",
        height: '77px',
        background: 'rgba(68, 182, 239, 0.69)',
        borderRadius: ' 17px 17px 0px 0px',
    },
    register:{
        fontFamily: 'Roboto Mono',
        contrastText: "black",
    },
    registerLink:{
        textDecoration:'none'
    },
    space:{
        height:'440px'
    },
}))

const Register =()=>{
    const classes = useStyles()

    return (
        <div>
            <div className={classes.space}/>
            <div className={classes.container}>
                <Box className={classes.registerBox}>
                    <div className={classes.titleBox}>
                        <Typography className={classes.mainTitle}>Register</Typography>
                        <RegisterForm/>
                    </div>
                </Box>
            </div>
        </div>


    )
}
export default Register