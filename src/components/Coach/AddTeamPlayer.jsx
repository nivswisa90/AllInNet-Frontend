import React, {useEffect, useState} from 'react'
import ReactSearchBox from "react-search-box";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@mui/material";
import axios from "../../axios";

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


// HERE we have problem, the search bar find the users, but returns and display in the UI
// just one option instead of the users that he found
// LINE 54 in the USEEFFECT!!!!!!!!
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

    // const findUsers = (value) => {
    //     console.log(value)
    // }


    const addTeamPlayer = (item) => {
        axios.post('/api/coach/addplayer/', {email: item.item.key}, {
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
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
            <div className={classes.space}></div>
        </div>

    )
}
export default AddTeamPlayer