import React, {useState} from 'react'
import Grid from "@material-ui/core/Grid";
import {FormControl, TextField, Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import {toast, ToastContainer} from "react-toastify";
import PositionsFormSection from "./PositionsFormSection";
import Button from "@mui/material/Button";
import axios from "../../../axios";
import {useMutation} from "react-query";
import {useNavigate} from "react-router-dom";
import LoadingTriangle from "../../Utils/LoadingTriangle";
import CourtModal from "../../Utils/CourtModal";

const useStyles = makeStyles(() => ({
    trainingForm: {
        width:'100%',
        marginTop: '5vh',
        // height: '80%'
    },
    subTitlePositions: {
        fontFamily: 'Roboto Mono',
        fontSize: '20px',
        margin: '0 auto',
        marginBottom: '2vh',
        marginTop: '2vh',
        width: '50%',
        fontWeight: 600
    },
    levelTitle: {
        fontFamily: 'Roboto Mono',
        fontSize: '15px',
        margin: '0 auto',
        width: '100%',
        marginTop: '5vh'
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
    court: {
        marginLeft: '35%',
        marginTop: '3%',
        display: 'inline-block'
    },
    titleField: {
        marginBottom: '5%', marginLeft: '33%', display: 'inline-block'
    }

}))
const TrainingProgramForm = (props) => {
    const classes = useStyles()
    const navigate = useNavigate()
    const playerId = props.id
    const [posCounter, setPosCounter] = useState([
        {
            name: 'Position 1',
            total: 0,
            minimum: 0
        },
        {
            name: 'Position 2',
            total: 0,
            minimum: 0
        },
        {
            name: 'Position 3',
            total: 0,
            minimum: 0
        },
        {
            name: 'Position 4',
            total: 0,
            minimum: 0
        },
        {
            name: 'Position 5',
            total: 0,
            minimum: 0
        },
        {
            name: 'Position 6',
            total: 0,
            minimum: 0
        }])

    const [trainingTitle, setTriningTitle] = useState("")
    const [nextPage, setNext] = useState(false)
    const [message, setMessage] = useState('')
    const handleInput = (e) => {
        e.preventDefault()
        setTriningTitle(e.target.value)
    }

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
                pos1: posCounter[0].total,
                pos2: posCounter[1].total,
                pos3: posCounter[2].total,
                pos4: posCounter[3].total,
                pos5: posCounter[4].total,
                pos6: posCounter[5].total,
                minReqPos1: posCounter[0].minimum,
                minReqPos2: posCounter[1].minimum,
                minReqPos3: posCounter[2].minimum,
                minReqPos4: posCounter[3].minimum,
                minReqPos5: posCounter[4].minimum,
                minReqPos6: posCounter[5].minimum,
            },
            userId: playerId,
            title: trainingTitle
        }
        mutate({trainingProgram})
    }

    return (
        <div>
            <form className={classes.trainingForm}>
                <Grid container alignItems="center" justifyContent="center" direction="row">
                    <Grid style={{display: (!nextPage ? 'block' : 'none')}} item>
                    </Grid>
                    <div>
                        <section className={classes.court}>
                            <CourtModal/>
                        </section>
                        <TextField className={classes.titleField} InputProps={{style: {fontFamily: 'Roboto Mono'}}}
                                   InputLabelProps={{style: {fontFamily: 'Roboto Mono'}}} type="text"
                                   label="Program Name" variant="standard"
                                   onChange={handleInput}/>
                        <Typography
                            className={classes.subTitlePositions}>Select Throw Positions</Typography>
                        <PositionsFormSection posCounter={posCounter} setPosCounter={setPosCounter}/>
                        <ToastContainer/>
                    </div>
                    <Grid item>
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