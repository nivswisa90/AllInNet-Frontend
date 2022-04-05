import React, {useState} from 'react'
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {FormControl} from "@mui/material";
import PropTypes from 'prop-types';

const defaultValues = {
    username: '',
    password: '',
    remember: '',
    forgot: '',
};
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

async function loginUser(credentials) {
    return fetch('http://localhost:5001/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

const LoginForm = ({setToken}) => {
    const classes = useStyles()
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    const [formValues, setFormValues] = useState(defaultValues)
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);

    };


    return (
        <form onSubmit={handleSubmit} className={classes.loginFrom}>
            <Grid container alignItems="center" justifyContent="center" direction="column">
                <Grid item>
                    <TextField
                        id="name-input"
                        name="username"
                        label="Username"
                        type="text"
                        value={formValues.username}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="password-input"
                        name="password"
                        label="password"
                        type="password"
                        value={formValues.password}
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

LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired
}