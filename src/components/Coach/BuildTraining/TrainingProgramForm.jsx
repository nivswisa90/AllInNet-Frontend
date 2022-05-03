import React, {useState} from 'react'
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {Checkbox, FormControl, FormControlLabel, Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import {VscChevronDown, VscChevronUp} from "react-icons/vsc";
import {toast, ToastContainer} from "react-toastify";
import IconButton from "@mui/material/IconButton";
import PositionsFormSection from "./PositionsFormSection";
import MinimumRequestSection from "./MinimumRequestSection";
import Button from "@mui/material/Button";

const useStyles = makeStyles(() => ({
    trainingForm: {
        marginTop: '5vh',
        height: '100%'
    },
    subTitlePositions: {
        fontFamily: 'Roboto Mono',
        fontSize: '15px',
        margin: '0 auto',
        marginBottom:'2vh',
        marginTop:'2vh',
        width: '60%'
    }


}))
const TrainingProgramForm = () => {
    const classes = useStyles()
    const [role, setRole] = useState({
        coach: false,
        player: false,
    })

    const {coach, player} = role;
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: ''
    })



    const handleInputChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target

        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleCheckbox = (event) => {

        setRole({
            ...role,
            [event.target.name]: event.target.checked,
        });
    };

    const [nextPage, setNext] = useState(false)

    return (
        <div>
            <form className={classes.trainingForm}>
                <Grid container alignItems="center" justifyContent="center" direction="column">
                    {!nextPage ?
                        <div>
                            <Typography className={classes.subTitlePositions}>Select Positions For Throws</Typography>
                            <PositionsFormSection/>
                        </div>
                        : <div>
                            <Typography className={classes.subTitlePositions}>Select Minimum Request Per Positions</Typography>
                            <MinimumRequestSection/>
                        </div>}


                    <Button disabled={nextPage} onClick={() => {
                        setNext(true)
                    }}>Next</Button>
                    <Grid item>
                        <FormControl>
                        </FormControl>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}
export default TrainingProgramForm