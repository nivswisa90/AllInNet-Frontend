import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import axios from "../../axios";
import {useMutation} from "react-query";

//Style
import {makeStyles} from "@material-ui/core/styles";
import {Card} from "react-bootstrap";

// Icons
import {RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5} from "react-icons/ri"
import {MdDoubleArrow} from "react-icons/md"
import Button from "@mui/material/Button";
import LoadingTriangle from "../Utils/LoadingTriangle";
import {toast, ToastContainer} from "react-toastify";


const useStyles = makeStyles(() => ({
    programCard: {
        float: 'left',
        border: '1px solid black',
        borderRadius: '10px',
        margin: '5px',
        width: '30%',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)'
    },
    cardTitle: {
        fontFamily: 'Roboto Mono',
        contrastText: "black",
        margin: '0 auto',
        width: '20%',
        fontSize: '15px',
    },
    cardText: {
        fontFamily: 'Roboto Mono',
        margin: '0 auto',
        width: '50%',
        fontSize: '10px',
        "& span": {
            display: 'block'
        }
    },
    startBtn: {
        margin: '0 auto',
        width: '35%',
    }

}))

const ProgramCard = (props) => {
    const classes = useStyles()
    const navigate = useNavigate()
    const [message, setMessage] = useState('')
    const {isLoading, isError, error, mutate} = useMutation('training', startTraining)
    const currentTrainingID = props.program.id
    async function startTraining(minReq) {
        const response = await axios.post('/api/training/programs/startt', minReq)
        setMessage(response.data)
        // navigate('/start')
    }
    // const goToTraining = () =>{
    //     mutate({currentTrainingID})
    // }
    if (isLoading) {
        return <LoadingTriangle/>
    }

    if (isError) {
        toast.error(error.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
        });
        return <div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            /></div>
    }
    return (
        <Card className={classes.programCard}>
            <Card.Body>
                <Card.Title className={classes.cardTitle}>
                    {props.program.level}
                </Card.Title>
                <Card.Text className={classes.cardText}>
                    <span>Position #1 {props.program.positions.pos1}</span>
                    <span>position #2 {props.program.positions.pos2}</span>
                    <span>Position #3 {props.program.positions.pos3}</span>
                    <span>Position #4 {props.program.positions.pos4}</span>
                    <span>Position #5 {props.program.positions.pos5}</span>
                </Card.Text>
            </Card.Body>
            <Card.Footer className={classes.startBtn}>
                <Button> Go <MdDoubleArrow/></Button>
            </Card.Footer>
        </Card>
    )
}
export default ProgramCard