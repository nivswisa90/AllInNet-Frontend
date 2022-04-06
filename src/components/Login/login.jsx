import React from 'react'

import Box from '@mui/material/Box';
import {Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";

// Local imports
import LoginForm from './loginForm'

const useStyles = makeStyles(() => ({

    loginTitle: {
        fontSize: "49px",
        display: 'flex',
        color: 'white',
        justifyContent: 'center',
        fontStyle: 'normal',
        fontWeight: 200,
        fontFamily: 'Roboto Mono',
    },
    titleBox: {
        width: "373px",
        height: '77px',
        background: 'rgba(68, 182, 239, 0.69)',
        borderRadius: ' 17px 17px 0px 0px',
    },
    loginBox: {
        position: 'relative',
        width: '373px',
        height: '253px',
        top: '470px',
        background: '#FEFEFE',
        borderRadius: '23px',
    }
}));
const Login = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.loginBox}>
            <div className={classes.titleBox}>
                <Typography className={classes.loginTitle}>Sing In</Typography>
                <LoginForm setToken={props.setToken}/>
            </div>
        </Box>
    )
}
export default Login;

