import React from 'react'
import ReactSearchBox from "react-search-box";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@mui/material";
const useStyles = makeStyles(() => ({
    searchBox:{
        margin:'0 auto',
        width:'80%',
        marginTop:'5vh',
        marginBottom:'5vh'
    },
    searchTitle:{
        fontFamily: 'Roboto Mono',
        fontSize: '20px',
        margin: '0 auto',
        width: '60%',
        marginTop:'5vh',
        marginBottom:'2vh',
    }
}))

const AddTeamPlayer = () =>{
    const classes = useStyles()

    const data = [
        {
            key: "john",
            value: "John Doe",
        },
        {
            key: "jane",
            value: "Jane Doe",
        },
        {
            key: "mary",
            value: "Mary Phillips",
        },
        {
            key: "robert",
            value: "Robert",
        },
        {
            key: "karius",
            value: "Karius",
        },
    ];
    return (
        <div className={classes.searchBox}>
            <Typography className={classes.searchTitle}>
                Search and Add new team player
            </Typography>
            <ReactSearchBox
                placeholder="Search for player by email"
                value="Doe"
                data={data}
                leftIcon={<>🔍</>}
                onSelect={(value)=>console.log(value)}
                callback={(record) => console.log(record)}
                />
        </div>

    )
}
export default AddTeamPlayer