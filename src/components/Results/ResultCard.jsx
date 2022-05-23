import React from 'react'

//Style
import {makeStyles} from "@material-ui/core/styles";
import {Card} from "react-bootstrap";
import {VscGraphLine} from "react-icons/vsc";
import {Link} from "react-router-dom";

const useStyles = makeStyles(() => ({
    resultCard: {
        float: 'left',
        border: '1px solid black',
        borderRadius: '10px',
        margin: '5px',
        width: '30%',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'

    },
    cardTitle: {
        fontFamily: 'Roboto Mono',
        contrastText: "black",
        marginTop: '2vh',
        margin: '0 auto',
        width: '60%',
        fontSize: '15px',
    },
    cardText: {
        fontFamily: 'Roboto Mono',
        margin: '5px',
        width: '90%',
        fontSize: '29px',
        fontWeight: '900',
        textAlign: 'center',
    },
    startBtn: {
        margin: '0 auto',
        width: '20%',
    }

}))

const ResultCard = (props) => {
    let resultsString
    const classes = useStyles()
    resultsString = props.results.result
    return (
        <Card className={classes.resultCard}>
            <Card.Body>
                <Card.Title className={classes.cardTitle}>
                    {props.results.date}
                </Card.Title>
                <Card.Text style={{color: (resultsString === 'Pass' ? 'green' : 'red')}} className={classes.cardText}>
                    {props.results.result}
                </Card.Text>
            </Card.Body>
            <Card.Footer className={classes.startBtn}>
                <Link to={'/report'} state={{result: props.results}}>
                    <VscGraphLine size={30}/>
                </Link>
            </Card.Footer>
        </Card>
    )
}
export default ResultCard