import React from 'react'
import {toast} from "react-toastify";
import {Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {VscChevronDown, VscChevronUp} from "react-icons/vsc";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    positionsSection: {
        marginBottom: '2vh',
        marginTop: '5vh',
        margin: '0 auto',
        borderRadius: '5px',
        width: '80%',
        display: 'flex',
        flexWrap: 'wrap',
        '& div': {
            margin: '0 auto',
            marginLeft: '3vh',
            marginTop:'3%',
            padding: '1vh',
            width: '25%'
        }
    },
    positionTitles: {
        fontFamily: 'Roboto Mono',
        fontSize: '15px',
        fontWeight:'600'
    },
    subTitlePositions: {
        fontFamily: 'Roboto Mono',
        fontSize: '15px',
        margin: '0 auto',
        width: '60%'
    },
    subPositionTitles:{
        fontFamily: 'Roboto Mono',
        fontSize: '13px',
    },
    minAndTotalContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 9px -2px, rgba(0, 0, 0, 0.3) 0px 3px 0px -3px',
        borderRadius:'10%',
    }
}))


const PositionsFormSection = (props) => {
    const classes = useStyles()
    const {posCounter, setPosCounter} = props

    const changePos = (pos, id, method, mode) => {
        let value
        if (mode === 'total') {
            value = posCounter[id].total
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
            setPosCounter({...posCounter, [id]: {...posCounter[id], total: value}})
        } else {
            value = posCounter[id].minimum
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
            setPosCounter({...posCounter, [id]: {...posCounter[id], minimum: value}})
        }
    }

    return (
        <Grid className={classes.positionsSection}>
            {posCounter ?
                Object.entries(posCounter).map((position, index) => {
                    return (
                        <div key={index} className={classes.minAndTotalContainer}>
                            <Typography className={classes.positionTitles}>{position[1].name}</Typography>
                            <section>
                                <Typography className={classes.subPositionTitles}>Total</Typography>
                                <IconButton
                                    onClick={() => (changePos(position[1], index, 'decrement', 'total'))}><VscChevronDown/></IconButton>
                                <span>{posCounter[index].total}</span>
                                <IconButton
                                    onClick={() => (changePos(position[1], index, 'increment', 'total'))}><VscChevronUp/></IconButton>
                            </section>
                            <section>
                                <Typography className={classes.subPositionTitles}>Minimum</Typography>
                                <IconButton
                                    onClick={() => (changePos(position[1], index, 'decrement', 'min'))}><VscChevronDown/></IconButton>
                                <span>{posCounter[index].minimum}</span>
                                <IconButton
                                    onClick={() => (changePos(position[1], index, 'increment', 'min'))}><VscChevronUp/></IconButton>
                            </section>
                        </div>
                    )
                }) :
                null
            }
        </Grid>)


}
export default PositionsFormSection