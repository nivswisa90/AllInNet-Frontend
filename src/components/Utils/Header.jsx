import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import AvatarMenu from "./AvatarMenu";

const useStyles = makeStyles(() => ({
    headerContainer: {
        display:'flex',
        flexDirection:'row',
    }
}))

const Header = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.headerContainer}>
            <AvatarMenu user={props.user}/>
        </div>
    )
}

export default Header