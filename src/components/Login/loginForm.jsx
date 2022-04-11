import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl } from "@mui/material";

// const defaultValues = {
//     name: '',
//     password: '',
//     remember: '',
//     forgot: '',
// };
const useStyles = makeStyles(() => ({
    loginBtn: {
        color: '#44B6EF',
        fontFamily: 'Roboto Mono',
        contrastText: "black",
    },
    loginFrom: {
        padding: '1vh'
    },
    forgotPass: {
        fontFamily: 'Roboto Mono',
        contrastText: "black",
    },
    rememberTitle: {
        fontFamily: 'Roboto Mono',
        contrastText: "black",
    },

}));

async function loginUser(credentials, setToken) {
   fetch('http://localhost:5001/api/login/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => {
            data.json().then(d => {
                if (d.msg === 'Successfully connected') {
                    setToken(d.token)
                }
                else {
                    console.log('No token')
                }
            })
        })
        .catch(err => console.log(err))
}


const LoginForm = (props) => {
    const navigate = useNavigate()

    const classes = useStyles()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [nav, setNav] = useState('')

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        loginUser({
            values
        }, props.setToken);
        navigate('/')
    };

    return (
        <form onSubmit={handleSubmit} className={classes.loginFrom}>
            <Grid container alignItems="center" justifyContent="center" direction="column">
                <Grid item>
                    <TextField
                        id="name-input"
                        name="email"
                        label="Email"
                        type="text"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="password-input"
                        name="password"
                        label="password"
                        type="password"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <FormControl>
                        <Button className={classes.forgotPass}>
                            Forgot my password
                        </Button>
                    </FormControl>
                </Grid>
                <Button className={classes.loginBtn} variant="outlined" type="submit">
                    Login
                </Button>
            </Grid>
        </form>
    )
}
export default LoginForm;