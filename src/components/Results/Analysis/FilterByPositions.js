import React from 'react'
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
    filterPosTilte: {
        fontFamily: 'Roboto Mono',
        fontSize: '15px',

    }
}))

const FilterByPositions = (props) =>{
    const classes = useStyles()

    return(

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
                    <FormControlLabel value="poos6" control={<Radio/>} label='#6'/>
                </RadioGroup>
            </FormControl>

    )
}
export default FilterByPositions