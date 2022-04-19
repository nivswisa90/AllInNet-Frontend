import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {Checkbox, FormControl, FormControlLabel} from "@mui/material";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    registerBtn: {
        color: '#44B6EF',
        fontFamily: 'Roboto Mono',
        contrastText: "black",
    },
    registerForm: {
        width:'373px',
        background: '#FEFEFE',

    },
    checkboxes:{
        opacity:'60%',
        margin:'2vh',
    }

}));

const RegisterForm = () => {
    const navigate = useNavigate()
    const classes = useStyles()
    const [role, setRole] = useState({
        coach: false,
        player: false,
    });
    const { coach, player } = role;
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: ''
    })


    const handleInputChange = (e) => {
        const {name, value} = e.target

        setValues({
            ...values,
            [name]: value,
        });
    };
    console.log(values)
    console.log(role)
    const handleSubmit = async (e) => {
        e.preventDefault()

    };
    const handleCheckbox = (event) => {
        setRole({
            ...role,
            [event.target.name]: event.target.checked,
        });
    };

    return (
        <form className={classes.registerForm}>
            <Grid container alignItems="center" justifyContent="center" direction="column">
                <Grid item>
                    <TextField
                        id="name-input"
                        name="firstName"
                        label="First Name"
                        type="text"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="lastname-input"
                        name="lastName"
                        label="Last Name"
                        type="text"
                        onChange={handleInputChange}
                    />
                </Grid>
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
                <Grid item className={classes.checkboxes}>
                    <FormControlLabel
                        control={
                            <Checkbox checked={coach} onChange={handleCheckbox} name="coach" />
                        }
                        label="Coach"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={player} onChange={handleCheckbox} name="player" />
                        }
                        label="Player"
                    />
                </Grid>

                <Grid item>
                    <FormControl>
                        <Button className={classes.registerBtn} variant="outlined">
                            Login
                        </Button>
                    </FormControl>
                </Grid>
            </Grid>
        </form>
    )
}
export default RegisterForm