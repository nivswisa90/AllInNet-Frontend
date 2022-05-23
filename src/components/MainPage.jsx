import React from 'react'
import {Typography} from "@mui/material"
import {makeStyles} from "@material-ui/core/styles"
import 'react-toastify/dist/ReactToastify.css'
import TrainingPrograms from "./Programs/trainingPrograms"
import TrainingResults from "./Results/TrainingResults"
import {useOutletContext} from "react-router-dom"
import CourtModal from "./Utils/CourtModal";
import CoachPlayers from "./Coach/TeamPlayers/CoachPlayers";
import AddTeamPlayer from "./Coach/TeamPlayers/AddTeamPlayer";
import LoadingTriangle from "./Utils/LoadingTriangle";
import AnalysisLink from "./Results/Analysis/AnalysisLink";
import Header from "./Utils/Header";

const useStyles = makeStyles(() => ({
    mainProgram: {
        // background: '#FFF9F4',
        background: 'white',
        borderRadius: '28px',
        opacity: '90%',
        width: '100%',
        margin: '0 auto'
    },
    mainTitle: {
        fontFamily: 'Roboto Mono',
        contrastText: "black",
        margin: "0 auto",
        width: '50%',
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
    description: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center'
    }

}))
const MainPage = () => {
    const [user] = useOutletContext()
    const classes = useStyles()

    return (
        !user ? (<LoadingTriangle/>) :
            (<div>
                <Header user={user}/>
                <div className={classes.space}/>
                <div className={classes.mainProgram}>
                    <Typography className={classes.mainTitle}> {`Welcome Back ${user.name}`} </Typography>
                    {user.role === 'player' ? <div>
                        <div className={classes.description}>
                            <AnalysisLink/>
                            <CourtModal/>
                        </div>
                        <TrainingPrograms/>
                        <TrainingResults/>
                    </div> : <div>
                        <CoachPlayers/>
                        <AddTeamPlayer/>
                    </div>
                    }
                </div>
            </div>)
    )

}
export default MainPage