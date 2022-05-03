import React, {useState} from 'react'
import {toast, ToastContainer} from "react-toastify";
import {Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {VscChevronDown, VscChevronUp} from "react-icons/vsc";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Error from "../../Utils/Error";


const useStyles = makeStyles(() => ({
    positionsSection: {
        margin: '0 auto',
        border: '0.5px solid black',
        borderRadius: '5px',
        width: '80%',
        display: 'flex',
        flexWrap: 'wrap',
        '& div': {
            margin: '0 auto',
            // width:'40%',
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
    // const posCounter = props.posCounter
    // const setPosCounter = props.setPosCounter

    const [posCounter, setPosCounter] = useState({
        position1: 0,
        position2: 0,
        position3: 0,
        position4: 0,
        position5: 0,
        position6: 0
    })

    const [minCounter, setMinCounter] = useState({
        position1: 0,
        position2: 0,
        position3: 0,
        position4: 0,
        position5: 0,
        position6: 0
    })

    const IncMinReq = (min, total) => {
        if (min < total) {
            min++
        } else
            toast.error('Unable to do more then the position!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
    }


    const changePos = (pos, method) => {
        let value
        if (!props.next) {
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
            {!props.next ?
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