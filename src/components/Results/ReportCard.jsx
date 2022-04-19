import React from 'react'
import {Card} from "react-bootstrap";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
    reportCard:{
        fontFamily: 'Roboto Mono',
        width: '80%',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
        border: '1px solid black',
        borderRadius: '10px',
        marginLeft:'5vh',
        marginTop:'5vh'
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
const ReportCard = () =>{
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
                    <span>position #1 4</span>
                    <span>position #2 4</span>
                    <span>position #3 4</span>
                    <span>position #3 4</span>
                    <span>position #3 4</span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default ReportCard