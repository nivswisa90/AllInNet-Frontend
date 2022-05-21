import React, {useEffect} from 'react'
import ReactSearchBox from "react-search-box";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@mui/material";
import axios from "../../../axios";
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles(() => ({
    searchBox: {
        margin: '0 auto',
        width: '85%',
        marginTop: '5vh',
        marginBottom: '5vh',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
        borderRadius:'10px',
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


let players = []

const AddTeamPlayer = () => {
    const classes = useStyles()
    const navigate = useNavigate()

    useEffect(async () => {
        await axios.get(`/api/login/users`, {
            headers: {
                "x-access-token": localStorage.getItem('token')
            }
        })
            .then(data => {
                for (const player in data.data) {
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
        }).then(() => {
            navigate('/')
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
                inputFontColor={'grey'}
                inputBorderColor={'#44B6EF'}
                dropDownHoverColor={'#FFF9F4'}
                data={players}
                leftIcon={<>🔍</>}
                clearOnSelect={true}
                onSelect={(item) => addTeamPlayer(item)}
                onChange={() => players = []}
                callback={(record) => console.log(record)}
            />
            <div className={classes.space}/>
        </div>

    )
}
export default AddTeamPlayer