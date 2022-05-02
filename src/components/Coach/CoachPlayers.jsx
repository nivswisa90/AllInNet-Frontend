import CoachPlayersTable from "./CoachPlayersTable";
import axios from "../../axios";
import {useEffect, useState} from "react";

const CoachPlayers = () => {
    const [players, setPlayers] = useState()

    useEffect(() => {
        axios.get('/api/coach/players', {
            headers: {
                "Content-type": "application/json",
                "x-access-token": localStorage.getItem('token')
            }
        })
            .then(docs => {
                setPlayers(docs.data)
            })
            .catch(err => console.log(err))
    },[])

    return (
        <div>
            <h1>My team</h1>
            {players ? <CoachPlayersTable rows={players}/> : null}
        </div>
    )
}

export default CoachPlayers