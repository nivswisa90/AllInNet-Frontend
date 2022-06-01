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
        margin: '5px',
        width: '40%',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
        background:'white'
    },
    cardTitle: {
        fontFamily: 'Roboto Mono',
        contrastText: "black",
        margin: '0 auto',
        width: '50%',
        fontSize: '20px',
        fontWeight:'600',
        marginTop:'5%'
    },
    cardText: {
        fontFamily: 'Roboto Mono',
        margin: '0 auto',
        width: '55%',
        fontSize: '15px',
        "& span": {
            display: 'block',
            marginTop: '5px',
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
    console.log(program.title)
    return (
        <Card className={classes.programCard}>
            <Card.Body>
                <span>{props.isNew}</span>
                <Card.Title className={classes.cardTitle}>
                    {program.title}
                    {program.isNew ? <NewReleasesIcon style={{position: 'relative', right:0, top:0}} color={'error'}/> : null}
                    <hr/>
                    <h4 style={{fontWeight:'200', fontSize:'15px',margin:'0 auto',width:'80%'}}>
                        Level:{program.level}
                    </h4>
                </Card.Title>
                <Card.Text className={classes.cardText}>
                    <span>Position 1: {program.positions.minReqPos1}/{program.positions.pos1}</span>
                    <span>position 2: {program.positions.minReqPos2}/{program.positions.pos2}</span>
                    <span>Position 3: {program.positions.minReqPos3}/{program.positions.pos3}</span>
                    <span>Position 4: {program.positions.minReqPos4}/{program.positions.pos4}</span>
                    <span>Position 5: {program.positions.minReqPos5}/{program.positions.pos5}</span>
                    <span>Position 6: {program.positions.minReqPos6}/{program.positions.pos6}</span>
                </Card.Text>
            </Card.Body>
            <Card.Footer className={classes.startBtn}>
                <Button onClick={goToTraining}> Go <MdDoubleArrow/></Button>
            </Card.Footer>
        </Card>
    )
}
export default ProgramCard