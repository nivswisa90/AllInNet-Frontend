import React, {useEffect, useState} from 'react'
import ReactSearchBox from "react-search-box";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@mui/material";
import {useQuery} from "react-query";
import axios from "../../axios";
import LoadingTriangle from "../Utils/LoadingTriangle";
import {toast} from "react-toastify";
import Error from "../Utils/Error";

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
    space:{
        height:'150px'
    }
}))
// const arrangeAllPlayers = (playersInfo) => {
//     const arr = []
//     playersInfo.data.map(player => {
//         return arr.push({key: player.email, value: player.firstName})
//     })
//
//     return arr
// }
async function fetchUsers(value) {
    const {data} = await axios.get(`/api/login/users/${value}`, {
        headers:{
            "x-access-token":localStorage.getItem('token')
        }
    })
    return data
}


// HERE we have problem, the search bar find the users, but returns and display in the UI
// just one option instead of the users that he found
// LINE 54 in the USEEFFECT!!!!!!!!
const AddTeamPlayer = () => {
    const classes = useStyles()
    const {data, error, isError, isLoading} = useQuery('users', fetchUsers)
    const [players, setPlayers] = useState()
    const [infos, setInfos] = useState()

    useEffect(()=>{
        if(players)
            players.map(player=>{
                const newPlayer = {
                    key: player.email,
                    value: player.email
                }
                 return setInfos([newPlayer])
            })
    },[players])

    console.log(infos)
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
        return <Error/>
    }

    const findUsers =(value) =>{
        if(value !== '')
            fetchUsers(value).then(users => {
                setPlayers(users)
            })
    }





    // const data = [
    //     {
    //         key: "john",
    //         value: "John Doe",
    //     },
    //     {
    //         key: "jane",
    //         value: "Jane Doe",
    //     },
    //     {
    //         key: "mary",
    //         value: "Mary Phillips",
    //     },
    //     {
    //         key: "robert",
    //         value: "Robert",
    //     },
    //     {
    //         key: "karius",
    //         value: "Karius",
    //     },
    // ];
    return (
        <div className={classes.searchBox}>
            <Typography className={classes.searchTitle}>
                Search and Add new team player
            </Typography>
            <ReactSearchBox
                placeholder="Search for player by email"
                value="Due"
                data={infos}
                leftIcon={<>🔍</>}
                clearOnSelect={true}
                onSelect={(value) => console.log(value)}
                onChange={(value)=> findUsers(value)}
                callback={(record) => console.log(record)}
            />
            <div className={classes.space}></div>
        </div>

    )
}
export default AddTeamPlayer