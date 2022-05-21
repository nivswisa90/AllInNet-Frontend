import React, {useState} from 'react'
import Grid from "@material-ui/core/Grid";
import {Checkbox, FormControl, FormControlLabel, Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import {toast, ToastContainer} from "react-toastify";
import PositionsFormSection from "./PositionsFormSection";
import Button from "@mui/material/Button";
import axios from "../../../axios";
import {useMutation} from "react-query";
import {useNavigate} from "react-router-dom";
import LoadingTriangle from "../../Utils/LoadingTriangle";

const useStyles = makeStyles(() => ({
    trainingForm: {
        marginTop: '5vh',
        // height: '80%'
    },
    subTitlePositions: {
        fontFamily: 'Roboto Mono',
        fontSize: '20px',
        margin: '0 auto',
        marginBottom: '2vh',
        marginTop: '2vh',
        width: '60%'
    },
    levelTitle: {
        fontFamily: 'Roboto Mono',
        fontSize: '15px',
        margin: '0 auto',
        width: '100%',
        marginTop:'5vh'
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
const TrainingProgramForm = (props) => {
    const classes = useStyles()
    const navigate = useNavigate()
    const playerId = props.id
    const [posCounter, setPosCounter] = useState({
        position1: 0,
        position2: 0,
        position3: 0,
        position4: 0,
        position5: 0,
        position6: 0
    })

    const [minCounter, setMinCounter] = useState({
        position1: 0,
        position2: 0,
        position3: 0,
        position4: 0,
        position5: 0,
        position6: 0
    })
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
    const [message, setMessage] = useState('')

    async function postProgram(program) {
        const response = await axios.post('/api/training/programs/addprogram', program, {
            headers: {
                "Content-type": "application/json",
                "x-access-token": localStorage.getItem('token')
            }
        })

        setMessage(response.data)
        navigate("/main")
    }

    const {isLoading, isError, error, mutate} = useMutation('program', postProgram)
    const addProgram = () => {
        const trainingProgram = {
            positions: {
                pos1: posCounter.position1,
                pos2: posCounter.position2,
                pos3: posCounter.position3,
                pos4: posCounter.position4,
                pos5: posCounter.position5,
                pos6: posCounter.position6,
                minReqPos1: minCounter.position1,
                minReqPos2: minCounter.position2,
                minReqPos3: minCounter.position3,
                minReqPos4: minCounter.position4,
                minReqPos5: minCounter.position5,
                minReqPos6: minCounter.position6,
            },
            level: level.easy ? 'Easy' : level.medium ? 'Medium' : 'Hard',
            userId: playerId
        }

        mutate({trainingProgram})
    }
    return (
        <div>
            <form className={classes.trainingForm}>
                <Grid container alignItems="center" justifyContent="center" direction="column">
                    <Grid style={{display: (!nextPage ? 'block' : 'none')}} item >
                        {/*<Typography className={classes.levelTitle}>Choose Level of the training program</Typography>*/}
                        {/*<div className={classes.checkboxes}>*/}
                        {/*    <FormControlLabel*/}
                        {/*        control={*/}
                        {/*            <Checkbox checked={easy} onChange={handleCheckbox} name="easy"/>*/}
                        {/*        }*/}
                        {/*        label="Easy"*/}
                        {/*    />*/}
                        {/*    <FormControlLabel*/}
                        {/*        control={*/}
                        {/*            <Checkbox checked={medium} onChange={handleCheckbox} name="medium"/>*/}
                        {/*        }*/}
                        {/*        label="Medium"*/}
                        {/*    />*/}
                        {/*    <FormControlLabel*/}
                        {/*        control={*/}
                        {/*            <Checkbox checked={hard} onChange={handleCheckbox} name="hard"/>*/}
                        {/*        }*/}
                        {/*        label="Hard"*/}
                        {/*    />*/}
                        {/*</div>*/}

                    </Grid>
                    <div>
                        <Typography
                            className={classes.subTitlePositions}>{!nextPage ? "Select Positions For Throws" : "Select Minimum Per Position"}</Typography>
                        <PositionsFormSection next={nextPage} posCounter={posCounter} setPosCounter={setPosCounter}
                                              minCounter={minCounter} setMinCounter={setMinCounter}/>
                        <ToastContainer/>

                    </div>

                    <Button style={{display: (!nextPage ? 'block' : 'none')}} onClick={() => {
                        setNext(true)
                    }}>Next</Button>

                    <Grid item style={{display: (nextPage ? 'block' : 'none')}}>
                        <FormControl>
                            <Button onClick={addProgram} className={classes.registerBtn} variant="outlined">
                                Add
                            </Button>
                        </FormControl>
                    </Grid>
                </Grid>
            </form>
            <div>
                {isLoading ? <LoadingTriangle/>
                    : " "}
                {isError ? toast.error(error.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 0,
                }) : ""}
            </div>
        </div>
    )
}
export default TrainingProgramForm