import React, {useState} from 'react'
import Grid from "@material-ui/core/Grid";
import {Checkbox, FormControl, FormControlLabel, Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import { ToastContainer} from "react-toastify";
import PositionsFormSection from "./PositionsFormSection";
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
        marginBottom: '2vh',
        marginTop: '2vh',
        width: '60%'
    },
    levelTitle:{
        fontFamily: 'Roboto Mono',
        fontSize: '15px',
        margin: '0 auto',
        width:'100%'
    },
    checkboxes: {
        opacity: '60%',
        margin: '2vh',
    },
    registerBtn: {
        color: '#44B6EF',
        fontFamily: 'Roboto Mono',
        contrastText: "black",
    },

}))
const TrainingProgramForm = () => {
    const classes = useStyles()
    const [level, setLevel] = useState({
        easy: false,
        medium: false,
        hard: false
    })
    const {easy, medium, hard} = level;

    const handleCheckbox = (event) => {
        setLevel({
            ...level,
            [event.target.name]: event.target.checked,
        });
    };

    const [nextPage, setNext] = useState(false)

    return (
        <div>
            <form className={classes.trainingForm}>
                <Grid container alignItems="center" justifyContent="center" direction="column">
                    <Grid style={{display: (!nextPage ? 'block' : 'none')}} item className={classes.checkboxes}>
                        <Typography  className={classes.levelTitle}>Choose Level of the training program</Typography>
                        <FormControlLabel
                            control={
                                <Checkbox checked={easy} onChange={handleCheckbox} name="easy"/>
                            }
                            label="Easy"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={medium} onChange={handleCheckbox} name="medium"/>
                            }
                            label="Medium"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={hard} onChange={handleCheckbox} name="hard"/>
                            }
                            label="Hard"
                        />
                    </Grid>
                    <div>
                        <Typography
                            className={classes.subTitlePositions}>{!nextPage ? "Select Positions For Throws" : "Select Minimum Per Position"}</Typography>
                        <PositionsFormSection next={nextPage}/>
                        <ToastContainer/>

                    </div>

                    <Button style={{display: (!nextPage ? 'block' : 'none')}} onClick={() => {
                        setNext(true)
                    }}>Next</Button>

                    <Grid item style={{display: (nextPage ? 'block' : 'none')}}>
                        <FormControl>
                            <Button className={classes.registerBtn} variant="outlined">
                                Register
                            </Button>
                        </FormControl>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}
export default TrainingProgramForm