import React from 'react'
import {Card} from "react-bootstrap";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
    reportCard:{
        fontFamily: 'Roboto Mono',
        width: '40%',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
        border: '1px solid black',
        borderRadius: '10px',
        marginTop:'5vh',
        margin:'0 auto'
    },
    cardTitle:{
        fontSize: '15px',
        textAlign:'center'
    },
    cardText:{
        fontSize: '15px',
        textAlign:'center',
        opacity:'90%',
        '& span':{
            display:'block'
        }
    }
}))

const ReportCard = (props) =>{
    const classes = useStyles();
    return(
        <Card className={classes.reportCard}>
            <Card.Body>
                <Card.Title className={classes.cardTitle}>
                    <span>13/03/2022</span>
                    <p>3 Line Training</p>
                    <hr/>
                </Card.Title>
                <Card.Text className={classes.cardText}>
                    <span>position #1 {props.positions.successPos1}</span>
                    <span>position #2 {props.positions.successPos2}</span>
                    <span>position #3 {props.positions.successPos3}</span>
                    <span>position #3 {props.positions.successPos4}</span>
                    <span>position #3 {props.positions.successPos5}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default ReportCard