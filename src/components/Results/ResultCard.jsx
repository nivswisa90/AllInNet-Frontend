import React, {useState} from 'react'

//Style
import {makeStyles} from "@material-ui/core/styles";
import {Card} from "react-bootstrap";
import {MdOutlineAutoGraph} from "react-icons/md";

const useStyles = makeStyles(() => ({
    resultCard: {
        float: 'left',
        border: '1px solid black',
        borderRadius: '10px',
        margin: '5px',
        width: '40%',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)'
    },
    cardTitle: {
        fontFamily: 'Roboto Mono',
        contrastText: "black",
        margin: '0 auto',
        width: '50%',
        fontSize: '15px',
    },
    cardText: {
        fontFamily: 'Roboto Mono',
        margin: '5px',
        width: '100%',
        fontSize: '29px',
        fontWeight: '900',
        textAlign: 'center',
    },
    startBtn: {
        margin: '0 auto',
        width: '50%',
    }

}))

const ResultCard = (props) => {
    let resultsString
    const classes = useStyles()
    const [message, setMessage] = useState('')
    resultsString = props.results.result
    console.log(resultsString)
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
                <MdOutlineAutoGraph/>
                {/*<Button onClick={mutate({minReq:props.program.minimumRequest})}>Start <FaAngleRight/></Button>*/}
            </Card.Footer>
        </Card>
    )
}
export default ResultCard