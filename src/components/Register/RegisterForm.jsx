import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Checkbox, FormControl, FormControlLabel } from "@mui/material";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useMutation } from "react-query";

import axios from "../../axios";

const useStyles = makeStyles(() => ({
  registerBtn: {
    color: "#44B6EF",
    fontFamily: "Roboto Mono",
    contrastText: "black",
  },
  registerForm: {
    width: "373px",
    background: "#FEFEFE",
  },
  checkboxes: {
    opacity: "60%",
    margin: "2vh",
  },
}));

const RegisterForm = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [{ coach, player }, setRole] = useState({
    coach: false,
    player: false,
  });
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });
  const [inputValidations, setInputValidations] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });
  const [checkboxValidations, setCheckboxValidation] = useState({
    role: false,
  });
  const [message, setMessage] = useState("");

  async function Register(user) {
    const response = await axios.post("/api/login/adduser", user);

    setMessage(response.data);
    navigate("/main");
  }

  useEffect(() => {
    if (message.msg === "User successfully registered") {
      localStorage.setItem("token", message.token);
    }
  }, [message]);

  const { isLoading, isError, error, mutate } = useMutation("user", Register);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleCheckbox = (event) => {
    setRole((roles) => ({
      ...roles,
      [event.target.name]: event.target.checked,
    }));
  };

  const addUser = () => {
    mutate({
      values: {
        ...values,
        role: coach ? "coach" : "player",
      },
    });
  };

  return (
    <div>
      <form className={classes.registerForm}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Grid item>
            <TextField
              required
              id="name-input"
              name="firstName"
              label="First Name"
              type="text"
              onChange={(e) => {
                handleInputChange(e);
                setInputValidations((inputValidations) => ({
                  ...inputValidations,
                  firstName: !isEmpty(e.target.value),
                }));
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="lastname-input"
              name="lastName"
              label="Last Name"
              type="text"
              onChange={(e) => {
                handleInputChange(e);
                setInputValidations((inputValidations) => ({
                  ...inputValidations,
                  lastName: !isEmpty(e.target.value),
                }));
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="email-input"
              name="email"
              label="Email"
              type="email"
              onChange={(e) => {
                handleInputChange(e);
                setInputValidations((inputValidations) => ({
                  ...inputValidations,
                  email: isEmail(e.target.value),
                }));
              }}
              error={!inputValidations?.email && !isEmpty(values.email)}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="password-input"
              name="password"
              label="password"
              type="password"
              onChange={(e) => {
                handleInputChange(e);
                setInputValidations((inputValidations) => ({
                  ...inputValidations,
                  password: !isEmpty(e.target.value),
                }));
              }}
            />
          </Grid>
          <Grid item className={classes.checkboxes}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={coach}
                  onChange={(e) => {
                    handleCheckbox(e);
                    setCheckboxValidation((checkboxValidations) => ({
                      ...checkboxValidations,
                      coach: e.target.checked,
                    }));
                  }}
                  name="coach"
                />
              }
              label="Coach"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={player}
                  onChange={(e) => {
                    handleCheckbox(e);
                    setCheckboxValidation((checkboxValidations) => ({
                      ...checkboxValidations,
                      player: e.target.checked,
                    }));
                  }}
                  name="player"
                />
              }
              label="Player"
            />
          </Grid>

          <Grid item>
            <FormControl>
              <Button
                onClick={addUser}
                className={classes.registerBtn}
                variant="outlined"
                disabled={
                  !inputValidations?.email ||
                  !inputValidations?.password ||
                  !inputValidations?.lastName ||
                  !inputValidations?.firstName ||
                  (!checkboxValidations?.player && !checkboxValidations?.coach)
                }
              >
                Register
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </form>
      <div>
        {isLoading ? "Saving..." : " "}
        {isError ? error.message : ""}
      </div>
    </div>
  );
};
export default RegisterForm;
