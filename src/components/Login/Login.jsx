import React from 'react'
import {Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import LoginForm from "./loginForm";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
    container: {
        height: '100%'
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
    landingBox: {
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
    register:{
        marginLeft:'14vh',
        fontFamily: 'Roboto Mono',
        contrastText: "black",
    },
    registerLink:{
        textDecoration:'none'
    },
    space:{
        height:'500px'
    },
}))

const Login = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.space}/>
            <Box className={classes.landingBox}>
                <div className={classes.titleBox}>
                    <Typography className={classes.mainTitle}>Sign In</Typography>
                    <LoginForm />
                    <Link className={classes.registerLink} to='/register'>
                        <Typography className={classes.register}>Don't have user? Register now!</Typography>
                    </Link>
                </div>
            </Box>
            <div className={classes.space}/>
        </div>
    )
}
export default Login