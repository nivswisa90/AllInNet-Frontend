import React from 'react'
import FormControl from "@mui/material/FormControl";

import {makeStyles} from "@material-ui/core/styles";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const useStyles = makeStyles(() => ({
    filterBar: {
        border: '0.2px solid black',
        borderRadius: '5px',
        width: '80%',
        margin: '0 auto'
    },
    filterPosTitle: {
        fontFamily: 'Roboto Mono',
        fontSize: '30px',
        marginLeft: '20vh'
    },
    barContainer: {
        width: '100%'
    }
}))


const FilterByDate = (props) => {
    const classes = useStyles()

    return (
        <div style={{display:'inline-block'}}>
            <FormControl sx={{m: 1, minWidth: 80}}>
                <InputLabel>Date</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={props.selectedDate}
                    onChange={props.handleDateChange}
                    autoWidth
                    label="position"
                    defaultValue='All'
                >
                    <MenuItem value={'7 days'}>7 days</MenuItem>
                    <MenuItem value={'30 days'}>30 days</MenuItem>
                    <MenuItem value={'All'}>All</MenuItem>
                </Select>
            </FormControl>
        </div>

    )
}
export default FilterByDate