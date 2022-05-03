import React from 'react'
import {Typography} from "@mui/material"
import {makeStyles} from "@material-ui/core/styles"
import 'react-toastify/dist/ReactToastify.css'
import TrainingPrograms from "./Programs/trainingPrograms"
import TrainingResults from "./Results/TrainingResults"
// import CoachView from "./CoachView"
import AvatarMenu from "./AvatarMenu"
import {Link, useOutletContext} from "react-router-dom"
import CourtModal from "./Utils/CourtModal";
import CoachPlayers from "./Coach/CoachPlayers";
import AddTeamPlayer from "./Coach/AddTeamPlayer";
import {VscAdd} from "react-icons/vsc";


const useStyles = makeStyles(() => ({
    mainProgram: {
        background: '#FFF9F4',
        borderRadius: '28px',
        opacity: '90%',
        width: '100%'
    },
    mainTitle: {
        fontFamily: 'Roboto Mono',
        contrastText: "black",
        margin: "0 auto",
        width: '60%',
        fontSize: '30px',
    },
    programsTitle: {
        fontFamily: 'Roboto Mono',
        fontSize: '15px',
        margin: '0 auto',
        width: '50%'
    },
    loading: {
        position: 'absolute',
        top: '60vh',
        left: '25vh'
    },
    space: {
        height: '180px'
    },

}))
const MainPage = () => {
    const [user] = useOutletContext()
    const classes = useStyles()
    return (
        <div>
            <AvatarMenu user={user}/>
            <div className={classes.space}/>
            <div className={classes.mainProgram}>
                <Typography className={classes.mainTitle}> {`Welcome Back ${user.name}`} </Typography>
                {/*<CoachView/>*/}
                {user.role === 'player' ? <div>
                    <CourtModal/>
                    <TrainingPrograms/>
                    <TrainingResults/>
                </div> : <div>

                    <CoachPlayers/>
                    <AddTeamPlayer/>
                </div>
                }

            </div>
        </div>

    )
}
export default MainPage