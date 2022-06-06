import CoachPlayersTable from "./CoachPlayersTable";
import axios from "../../../axios";
import {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@mui/material";
const useStyles = makeStyles(() => ({

    teamTitle: {
        fontFamily: 'Roboto Mono',
        fontSize: '20px',
        margin: '0 auto',
        width: '30%',
        marginTop:'5vh',
        marginBottom:'2vh',
    },
    teamPlayersContainer:{
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
        borderRadius:'10px',
        width:'85%',
        margin:'0 auto'
    }

}))
const CoachPlayers = () => {
    const [players, setPlayers] = useState()
    const classes = useStyles()

    useEffect(() => {
        axios.get('/api/coach/players', {
            headers: {
                "Content-type": "application/json",
                "x-access-token": localStorage.getItem('token')
            }
        })
            .then(playersInfo => {
                setPlayers(playersInfo.data)
            })
            .catch(err => console.log(err))
    },[])

    return (
        <div className={classes.teamPlayersContainer}>
            <Typography className={classes.teamTitle}>My team players</Typography>
            {players ? <CoachPlayersTable rows={players}/> : null}
        </div>
    )
}

export default CoachPlayers