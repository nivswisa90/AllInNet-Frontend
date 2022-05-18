import React, {useEffect} from 'react'
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {makeStyles} from "@material-ui/core/styles";
import {useQuery} from "react-query";
import axios from "../../../axios";
import LoadingTriangle from "../../Utils/LoadingTriangle";
import {toast} from "react-toastify";
import Error from "../../Utils/Error";

const useStyles = makeStyles(() => ({
    filterBar: {
        border: '0.2px solid black',
        borderRadius: '5px',
        width: '80%',
        margin: '0 auto'
    },
    filterPosTilte: {
        fontFamily: 'Roboto Mono',
        fontSize: '15px',

    }
}))

async function fetchResults() {
    const {data} = await axios.get('/api/training/results/getResults', {
        headers:{
            "x-access-token":localStorage.getItem('token')
        }
    })
    return data
}

const FilterByPositions = (props) => {
    const classes = useStyles()
    const {data, error, isError, isLoading} = useQuery('results', fetchResults)

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

    return (
        <FormControl>
            <FormLabel className={classes.filterPosTilte} id="demo-row-radio-buttons-group-label">Filter by
                position:</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel onVolumeChange={props.handleCheckbox} value="pos1" control={<Radio/>} label='#1'/>
                <FormControlLabel value="pos2" control={<Radio/>} label='#2'/>
                <FormControlLabel value="pos3" control={<Radio/>} label='#3'/>
                <FormControlLabel value="pos4" control={<Radio/>} label='#4'/>
                <FormControlLabel value="pos5" control={<Radio/>} label='#5'/>
                <FormControlLabel value="pos6" control={<Radio/>} label='#6'/>
            </RadioGroup>
        </FormControl>

    )
}
export default FilterByPositions