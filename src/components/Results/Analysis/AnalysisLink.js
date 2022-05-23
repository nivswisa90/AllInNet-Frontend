import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import {useNavigate} from 'react-router-dom';

const useStyles = makeStyles(() => ({
    analysisContainer: {
        margin: '0 auto',
        width: '30%',
        marginBottom: '2vh',
        marginTop: '2vh',
        display: 'inline-block',
    }
}))
const AnalysisLink = () => {
    const classes = useStyles()
    const navigate = useNavigate()

    const goToAnalyzePage = () => {
        navigate('/analysis')
    }
    return (
        <div className={classes.analysisContainer}>
            <Button onClick={goToAnalyzePage} variant="outlined">Results Analysis</Button>
        </div>
    )
}
export default AnalysisLink