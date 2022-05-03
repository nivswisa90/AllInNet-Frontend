import React, {useState} from 'react'
import {toast, ToastContainer} from "react-toastify";
import {Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {VscChevronDown, VscChevronUp} from "react-icons/vsc";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    positionsSection: {
        border: '0.5px solid black',
        borderRadius: '5px',
        width: '80%',
        display: 'flex',
        flexWrap: 'wrap',
        '& div': {
            marginLeft: '3vh',
            padding: '1vh'
        }
    },
    positionTitles: {
        fontFamily: 'Roboto Mono',
        fontSize: '15px',
    }
}))
const PositionsFormSection = (props) => {
    const classes = useStyles()
    // const posCounter = props.posCounter
    // const setPosCounter = props.setPosCounter

    const [posCounterMin, setPosCounterMin] = useState({
        position1: 0,
        minReq1: 0,
        position2: 0,
        minReq2: 0,
        position3: 0,
        minReq3: 0,
        position4: 0,
        minReq4: 0,
        position5: 0,
        minReq5: 0,
        position6: 0,
        minReq6: 0
    })

    const changePos = (pos, method) => {
        let value = posCounter[pos]
        method === 'increment' ? value++ : (
            value > 0 ? value-- : toast.error('Unable to do less then 0!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        )
        setPosCounter({...posCounter, [pos]: value})
    }


    return (
        <Grid className={classes.positionsSection}>
            {Object.keys(posCounter).map((position, index) => {
                return (
                    <div key={index}>
                        <Typography className={classes.positionTitles}>{position}</Typography>
                        <IconButton
                            onClick={() => (changePos(position, 'decrement'))}><VscChevronDown/></IconButton>
                        <span>{posCounter[position]}</span>
                        <IconButton onClick={() => (changePos(position, 'increment'))}><VscChevronUp/></IconButton>
                    </div>
                )
            })}

            <ToastContainer/>
        </Grid>)


}
export default PositionsFormSection