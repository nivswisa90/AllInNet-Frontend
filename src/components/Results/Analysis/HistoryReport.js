import React, {useState} from 'react'
import AvatarMenu from "../../Utils/AvatarMenu";

import {makeStyles} from "@material-ui/core/styles";
import {useOutletContext} from "react-router-dom";
import FilterByPositions from "./FilterByPositions";

const useStyles = makeStyles(() => ({
    mainProgram: {
        background: '#FFF9F4',
        borderRadius: '28px',
        opacity: '90%',
        width: '100%'
    },
    filterBar: {
        border: '0.2px solid black',
        borderRadius: '5px',
        width: '80%',
        margin: '0 auto'
    },
    filterPosTilte: {
        fontFamily: 'Roboto Mono',
        fontSize: '15px',

    },
    graphContainer: {
        border: '0.2px solid black',
    },
    precentageContainer: {
        border: '0.2px solid black',
    },
    pieContainer: {
        border: '0.2px solid black',
    },
    space: {
        height: '180px'
    },

}))

const HistoryReport = () => {
    const [user] = useOutletContext()
    const classes = useStyles()
    const [positionsFilter, setPositionsFilter] = useState(
        {
            pos1: false,
            pos2: false,
            pos3: false,
            pos4: false,
            pos5: false,
            pos6: false,
        }
    )
    // NOT WORKIMNG YET
    const handleCheckbox = (event) => {
        console.log(event.target)
        setPositionsFilter({
            ...positionsFilter,
            [event.target.name]: event.target.checked,
        });
    };

    return (
        <div>
            <AvatarMenu user={user}/>
            <div className={classes.space}/>
            <div className={classes.mainProgram}>
                <div className={classes.filterBar}>
                    <FilterByPositions handleCheckbox={handleCheckbox}/>
                    <div className={classes.graphContainer}>
                        SHOULD BE GRAPH
                    </div>
                    <div className={classes.precentageContainer}>
                        SHOULD BE %%%
                    </div>
                    <div className={classes.pieContainer}>
                        SHOULD BE PIEEE
                    </div>
                </div>
            </div>
            <div className={classes.space}/>
        </div>
    )
}
export default HistoryReport