import React, {useState} from 'react'
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {Checkbox, FormControl, FormControlLabel, Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import {VscChevronDown, VscChevronUp} from "react-icons/vsc";
import {toast, ToastContainer} from "react-toastify";
import IconButton from "@mui/material/IconButton";

const useStyles = makeStyles(() => ({
    trainingForm: {
        marginTop: '5vh',
        height:'100%'
    },
    positionsSection: {
        border:'0.5px solid black',
        borderRadius:'5px',
        width:'90%',
        display: 'flex',
        flexWrap: 'wrap',
        '& div':{
            marginLeft:'3vh',
            padding:'1vh'
        }

    },
    positionTitles:{
        fontFamily: 'Roboto Mono',
        fontSize: '15px',
    }
}))
const TrainingProgramForm = () => {
    const classes = useStyles()
    const [role, setRole] = useState({
        coach: false,
        player: false,
    });

    const {coach, player} = role;
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: ''
    })

    const [posCounter, setPosCounter] = useState({
        position1:0,
        position2:0,
        position3:0,
    })
    console.log(posCounter)


    // const [message, setMessage] = useState('')
    //
    // async function Register(user) {
    //     const response = await axios.post('/api/login/adduser', user)
    //
    //     setMessage(response.data)
    //     navigate("/main")
    // }
    //
    // useEffect(() => {
    //     if(message.msg === "User successfully registered"){
    //         localStorage.setItem('token', message.token)
    //     }
    // }, [message])

    // const {isLoading, isError, error, mutate} = useMutation('user', Register)


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

    // const addUser = () => {
    //     values.role = role.coach ? 'coach' : 'player'
    //
    //     mutate({values})
    // }
    const incVote = (value,pos) => {
        console.log('thisvalue',value, 'this',pos)
        let counter = value + 1
        setPosCounter(counter)
    }
    const decVotes = (value,pos) => {
        if (value > 0) {
            let counter = value - 1
            setPosCounter(counter)
        } else {
            toast.error('Unable to do less then 0!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    return (
        <div>
            <form className={classes.trainingForm}>
                <Grid container alignItems="center" justifyContent="center" direction="column">
                    <Grid item>
                        <TextField
                            id="name-input"
                            name="firstName"
                            label="Training Program Name"
                            type="text"
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="email-input"
                            name="email"
                            label="Email of the player"
                            type="text"
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid className={classes.positionsSection}>
                        <div>
                            <Typography className={classes.positionTitles}>Position 1</Typography>
                            <IconButton onClick={() => (incVote(posCounter.position1,1))}><VscChevronUp/></IconButton>
                            <span>{posCounter.position1}</span>
                            <IconButton onClick={() => (decVotes(posCounter.position1,1))}><VscChevronDown/></IconButton>
                        </div>
                        {/*<div>*/}
                        {/*    <Typography className={classes.positionTitles}>Position 2</Typography>*/}
                        {/*    <IconButton onClick={() => (incVote(posCounter[1]))}><VscChevronUp/></IconButton>*/}
                        {/*    <span>{posCounter}</span>*/}
                        {/*    <IconButton onClick={() => (decVotes(posCounter[1]))}><VscChevronDown/></IconButton>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <Typography className={classes.positionTitles}>Position 3</Typography>*/}
                        {/*    <IconButton onClick={() => (incVote(posCounter[2]))}><VscChevronUp/></IconButton>*/}
                        {/*    <span>{posCounter}</span>*/}
                        {/*    <IconButton onClick={() => (decVotes(posCounter[2]))}><VscChevronDown/></IconButton>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <Typography className={classes.positionTitles}>Position 4</Typography>*/}
                        {/*    <IconButton onClick={() => (incVote(posCounter))}><VscChevronUp/></IconButton>*/}
                        {/*    <span>{posCounter}</span>*/}
                        {/*    <IconButton onClick={() => (decVotes(posCounter))}><VscChevronDown/></IconButton>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <Typography className={classes.positionTitles}>Position 5</Typography>*/}
                        {/*    <IconButton onClick={() => (incVote(posCounter))}><VscChevronUp/></IconButton>*/}
                        {/*    <span>{posCounter}</span>*/}
                        {/*    <IconButton onClick={() => (decVotes(posCounter[4]))}><VscChevronDown/></IconButton>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <Typography className={classes.positionTitles}>Position 6</Typography>*/}
                        {/*    <IconButton onClick={() => (incVote(posCounter[5]))}><VscChevronUp/></IconButton>*/}
                        {/*    <span>{posCounter}</span>*/}
                        {/*    <IconButton onClick={() => (decVotes(posCounter[5]))}><VscChevronDown/></IconButton>*/}
                        {/*</div>*/}

                        <ToastContainer/>


                    </Grid>
                    <Grid item className={classes.checkboxes}>
                        <FormControlLabel
                            control={
                                <Checkbox checked={coach} onChange={handleCheckbox} name="coach"/>
                            }
                            label="Coach"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={player} onChange={handleCheckbox} name="player"/>
                            }
                            label="Player"
                        />
                    </Grid>

                    <Grid item>
                        <FormControl>
                            {/*<Button onClick={addUser} className={classes.registerBtn} variant="outlined">*/}
                            {/*    Register*/}
                            {/*</Button>*/}
                        </FormControl>
                    </Grid>
                </Grid>
            </form>
            {/*<div>*/}
            {/*    {isLoading ? "Saving..." : " "}*/}
            {/*    {isError ? error.message : ""}*/}
            {/*</div>*/}
        </div>
    )
}
export default TrainingProgramForm