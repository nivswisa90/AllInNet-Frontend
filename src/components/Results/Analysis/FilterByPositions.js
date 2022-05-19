import React, {useEffect} from 'react'
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    filterBar: {
        border: '0.2px solid black',
        borderRadius: '5px',
        width: '80%',
        margin: '0 auto'
    },
    filterPosTitle: {
        fontFamily: 'Roboto Mono',
        fontSize: '15px',

    }
}))


const FilterByPositions = (props) => {
    const classes = useStyles()

    return (
        <FormControl>
            <FormLabel className={classes.filterPosTitle} id="demo-row-radio-buttons-group-label">Filter by
                position:</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel onChange={props.handleCheckbox} value="Position1" name="Position1" control={<Radio/>} label='#1'/>
                <FormControlLabel onChange={props.handleCheckbox} value="Position2" name="Position2" control={<Radio/>} label='#2'/>
                <FormControlLabel onChange={props.handleCheckbox} value="Position3" name="Position3" control={<Radio/>} label='#3'/>
                <FormControlLabel onChange={props.handleCheckbox} value="Position4" name="Position4" control={<Radio/>} label='#4'/>
                <FormControlLabel onChange={props.handleCheckbox} value="Position5" name="Position5" control={<Radio/>} label='#5'/>
                <FormControlLabel onChange={props.handleCheckbox} value="Position6" name="Position6" control={<Radio/>} label='#6'/>
                <FormControlLabel onChange={props.handleCheckbox} value="All" name="All" control={<Radio/>} label='#All'/>
            </RadioGroup>
        </FormControl>

    )
}
export default FilterByPositions