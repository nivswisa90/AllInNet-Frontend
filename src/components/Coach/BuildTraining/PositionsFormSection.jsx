import React from 'react'
import {toast} from "react-toastify";
import {Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {VscChevronDown, VscChevronUp} from "react-icons/vsc";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    positionsSection: {
        boxShadow: 'rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px',
        marginBottom:'2vh',
        marginTop:'5vh',
        margin: '0 auto',
        borderRadius: '5px',
        width: '80%',
        display: 'flex',
        flexWrap: 'wrap',
        '& div': {
            margin: '0 auto',
            marginLeft: '3vh',
            padding: '1vh'
        }
    },
    positionTitles: {
        fontFamily: 'Roboto Mono',
        fontSize: '15px',
    },
    subTitlePositions: {
        fontFamily: 'Roboto Mono',
        fontSize: '15px',
        margin: '0 auto',
        marginBottom: '2vh',
        marginTop: '2vh',
        width: '60%'
    }
}))


const PositionsFormSection = (props) => {
    const classes = useStyles()
    const {posCounter,setPosCounter,minCounter,setMinCounter, next } = props


    const changePos = (pos, method) => {
        let value
        if (!next) {
            value = posCounter[pos]
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
        } else {
            value = minCounter[pos]
            if (method === 'increment') {
                if (value < posCounter[pos]) {
                    value++
                    setMinCounter({...minCounter, [pos]: value})
                }
                else{
                    toast.error('Cannot set minimum more then the position counter!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: 0,
                    });
                }
            } else {
                if (value > 0) {
                    value--
                    setMinCounter({...minCounter, [pos]: value})
                } else {
                    toast.error('Cannot set minimum less then 0!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: 0,
                    });
                }
            }
        }
    }


    return (
        <Grid className={classes.positionsSection}>
            {!next ?
                Object.keys(posCounter).map((position, index) => {
                    return (
                        <div key={index}>
                            <Typography className={classes.positionTitles}>{position}</Typography>
                            <IconButton
                                onClick={() => (changePos(position, 'decrement'))}><VscChevronDown/></IconButton>
                            <span>{posCounter[position]}</span>
                            <IconButton
                                onClick={() => (changePos(position, 'increment'))}><VscChevronUp/></IconButton>
                        </div>
                    )
                }) :
                (Object.keys(minCounter).map((position, index) => {
                    return (
                        <div key={index}>
                            <Typography className={classes.positionTitles}>{position}</Typography>
                            <IconButton
                                onClick={() => (changePos(position, 'decrement'))}><VscChevronDown/></IconButton>
                            <span>{minCounter[position]}/{posCounter[position]}</span>
                            <IconButton
                                onClick={() => (changePos(position, 'increment'))}><VscChevronUp/></IconButton>
                        </div>

                    )
                }))
            }

        </Grid>)


}
export default PositionsFormSection