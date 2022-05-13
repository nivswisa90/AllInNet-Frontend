import React, {useEffect} from 'react'
import ReactSearchBox from "react-search-box";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@mui/material";
import axios from "../../../axios";

const useStyles = makeStyles(() => ({
    searchBox: {
        margin: '0 auto',
        width: '80%',
        marginTop: '5vh',
        marginBottom: '5vh'
    },
    searchTitle: {
        fontFamily: 'Roboto Mono',
        fontSize: '20px',
        margin: '0 auto',
        width: '60%',
        marginTop: '5vh',
        marginBottom: '2vh',
    },
    space: {
        height: '150px'
    }
}))


const players = []

const AddTeamPlayer = () => {
    const classes = useStyles()

    useEffect(async () => {
        await axios.get(`/api/login/users`, {
            headers: {
                "x-access-token": localStorage.getItem('token')
            }
        })
            .then(data => {
                for(const player in data.data) {
                    const newPlayer = {
                        key: data.data[player].email,
                        value: data.data[player].name
                    }
                   players.push(newPlayer)
                }
            })
            .catch(err => console.log(err))
    }, [])



    const addTeamPlayer = (item) => {
        axios.post('/api/coach/addplayer/', {email: item.item.key}, {
            headers: {
                "Content-type": "application/json",
                "x-access-token": localStorage.getItem('token')
            }
        }).then(res => {
            console.log(res)
        })
            .catch(err => console.log(err))
    }

    return (
        <div className={classes.searchBox}>
            <Typography className={classes.searchTitle}>
                Search and Add new team player
            </Typography>
            <ReactSearchBox
                placeholder="Search for player by email"
                value="Due"
                data={players}
                leftIcon={<>🔍</>}
                clearOnSelect={true}
                onSelect={(item) => addTeamPlayer(item)}
                // onChange={(value) => findUsers(value)}
                callback={(record) => console.log(record)}
            />
            <div className={classes.space}/>
        </div>

    )
}
export default AddTeamPlayer