import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    playerBox: {
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        border:'1px solid black'
    },
    boxWrapper: {
        width: '100%',
        height: '100%',
        overflowY: 'scroll',
        overflowX: 'hidden'
    },
    boxContainer: {
        height: '100%',
        display: 'inline-flex'
    },
    boxItem: {},

}))

const TeamPlayers = () => {
    const classes = useStyles();

    return (
        <div className={classes.playerBox}>
            <div className={classes.boxWrapper}>
                <div className={classes.boxContainer} role="list">
                    <div className={classes.boxItem} role="listitem">
                        <ul>
                            <li>Player1</li>
                            <li>Player1</li>
                            <li>Player1</li>
                            <li>Player1</li>
                            <li>Player1</li>
                            <li>Player1</li>
                            <li>Player1</li>
                            <li>Player1</li>
                            <li>Player1</li>
                            <li>Player1</li>
                            <li>Player1</li>
                            <li>Player1</li>
                            <li>Player1</li>
                            <li>Player1</li>
                            <li>Player1</li>
                            <li>Player1</li>
                            <li>Player1</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default TeamPlayers
