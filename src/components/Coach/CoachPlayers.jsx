import CoachPlayersTable from "./CoachPlayersTable";
import axios from "../../axios";
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
        <div>
            <Typography className={classes.teamTitle}>My team players</Typography>
            {players ? <CoachPlayersTable rows={players}/> : null}
        </div>
    )
}

export default CoachPlayers