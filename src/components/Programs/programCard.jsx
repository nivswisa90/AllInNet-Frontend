import React, {useState} from 'react'
import axios from "../../axios";
import {useMutation} from "react-query";
import redNotfication from '../../media/redCircle.png'
//Style
import {makeStyles} from "@material-ui/core/styles";
import {Card} from "react-bootstrap";

// Icons
import {MdDoubleArrow} from "react-icons/md"
import Button from "@mui/material/Button";
import LoadingTriangle from "../Utils/LoadingTriangle";
import {toast, ToastContainer} from "react-toastify";
import NewReleasesIcon from '@mui/icons-material/NewReleases';


const useStyles = makeStyles(() => ({
    programCard: {
        float: 'left',
        border: '1px solid black',
        borderRadius: '10px',
        margin: '5px',
        width: '30%',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
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
    },
    notification: {

        backgroundImage: `url(${redNotfication})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '30px',
    }

}))

const ProgramCard = (props) => {
    const classes = useStyles()
    const [message, setMessage] = useState('')
    const program = props.program

    async function startTraining(program) {
        const response = await axios.post('/api/training/programs/start', program,
            {
                headers: {
                    "x-access-token": localStorage.getItem("token")
                }
            })
        setMessage(response.data)
    }

    const {isLoading, isError, error, mutate} = useMutation('training', startTraining)

    const goToTraining = () => {
        mutate({program})
    }

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

    // if (props.program.isNew) {
    //     console.log('inside',props.program.isNew)
    //
    //     toast.success('You have new training program from your coach!', {
    //         position: "top-center",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: 0,
    //     });
    //     return <div>
    //         <ToastContainer
    //             position="top-center"
    //             autoClose={5000}
    //             hideProgressBar={false}
    //             newestOnTop={false}
    //             closeOnClick
    //             rtl={false}
    //             pauseOnFocusLoss
    //             draggable
    //             pauseOnHover
    //         /></div>
    // }

    return (
        <Card className={classes.programCard}>
            <Card.Body>
                <span>{props.isNew}</span>
                <Card.Title className={classes.cardTitle}>
                    {props.program.level}
                    {props.program.isNew ? <NewReleasesIcon style={{position: 'relative', right:0, top:0}} color={'error'}/> : null}
                </Card.Title>
                <Card.Text className={classes.cardText}>
                    <span>Position #1 {props.program.positions.pos1}</span>
                    <span>position #2 {props.program.positions.pos2}</span>
                    <span>Position #3 {props.program.positions.pos3}</span>
                    <span>Position #4 {props.program.positions.pos4}</span>
                    <span>Position #5 {props.program.positions.pos5}</span>
                    <span>Position #6 {props.program.positions.pos6}</span>
                </Card.Text>
            </Card.Body>
            <Card.Footer className={classes.startBtn}>
                <Button onClick={goToTraining}> Go <MdDoubleArrow/></Button>
            </Card.Footer>
        </Card>
    )
}
export default ProgramCard