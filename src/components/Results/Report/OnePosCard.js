import React from 'react'
import {Card} from "react-bootstrap";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    reportCard: {
        float: 'left',
        fontFamily: 'Roboto Mono',
        width: '12%',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
        borderRadius: '10px',
        marginTop: '5vh',
        margin: '0 auto',
        background: 'white'
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: '15px',
        textAlign: 'center'
    },
    cardText: {
        fontSize: '15px',
        textAlign: 'center',
        opacity: '90%',
        '& span': {
            display: 'block'
        }
    }
}))


const OnePosCard = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.reportCard}>
            <Card.Body>
                <Card.Title className={classes.cardTitle}>
                    <p>Position {props.id}</p>
                </Card.Title>
                <Card.Text className={classes.cardText}>
                    <span
                        style={{color: parseInt(props.suc) >= parseInt(props.min) ? 'green' : 'red'}}>{props.suc}/{props.total}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default OnePosCard