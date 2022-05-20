import React, {useEffect} from 'react'
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
        marginLeft:'20vh'
    },
    barContainer:{
        width:'100%'
    }
}))


const FilterByPositions = (props) => {
    const classes = useStyles()

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel >Positions</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={props.selected}
                    onChange={props.handleChange}
                    autoWidth
                    label="position"
                    defaultValue='All'
                >
                    <MenuItem value={'Position1'}>Position 1</MenuItem>
                    <MenuItem value={'Position2'}>Position 2</MenuItem>
                    <MenuItem value={'Position3'}>Position 3</MenuItem>
                    <MenuItem value={'Position4'}>Position 4</MenuItem>
                    <MenuItem value={'Position5'}>Position 5</MenuItem>
                    <MenuItem value={'Position6'}>Position 6</MenuItem>
                    <MenuItem value={'All'}>All</MenuItem>
                </Select>
            </FormControl>
        </div>

    )
}
export default FilterByPositions