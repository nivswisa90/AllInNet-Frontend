import React from 'react'
import {Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import LoginForm from "./loginForm";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
    container: {
        height: '800px'
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
        width: '373px',
        height: '300px',
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

const Login = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.space}></div>
            <Box className={classes.landingBox}>
                <div className={classes.titleBox}>
                    <Typography className={classes.mainTitle}>Sing In</Typography>
                    <LoginForm />
                    <Link className={classes.registerLink} to='/register'>
                        <Typography className={classes.register}>Dont have user? Register now!</Typography>
                    </Link>
                </div>
            </Box>
        </div>
    )
}
export default Login