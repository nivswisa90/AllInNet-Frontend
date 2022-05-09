import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {FormControl} from "@mui/material";


const useStyles = makeStyles(() => ({
    loginBtn: {
        color: '#44B6EF',
        fontFamily: 'Roboto Mono',
        contrastText: "black",
    },
    loginFrom: {
        marginTop: '5vh',
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


const LoginForm = (props) => {
    const navigate = useNavigate()
    const classes = useStyles()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    async function loginUser(credentials) {
        fetch('/api/login/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(data => {
                data.json().then(d => {
                    if (d.msg === 'Successfully connected') {
                        localStorage.setItem('token', d.token)
                        navigate('/main')
                    } else {
                        console.log(d.msg)
                    }
                })
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target

        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        await loginUser({
            values
        })
    };

    return (
        <form className={classes.loginFrom}>
            <Grid container alignItems="center" justifyContent="center" direction="column">
                <Grid item>
                    <TextField
                        id="name-input"
                        name="email"
                        label="Email"
                        type="text"
                        onChange={handleInputChange}
                        size="medium"
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
                <Button onClick={handleSubmit} className={classes.loginBtn} variant="outlined">
                    Login
                </Button>
            </Grid>
        </form>
    )
}
export default LoginForm;