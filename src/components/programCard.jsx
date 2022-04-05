import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {Card} from "react-bootstrap";
import Button from "@material-ui/core/Button";
import {FaAngleRight} from "react-icons/fa";
const useStyles = makeStyles(() => ({
    programCard: {
        float: 'left',
        border:'1px solid black',
        borderRadius:'10px',
        margin:'5px',
        width:'40%',
        boxShadow:'0px 2px 2px rgba(0, 0, 0, 0.25)'
    },
    cardTitle:{
        fontFamily: 'Roboto Mono',
        contrastText: "black",
        margin: '0 auto',
        width:'50%',
        fontSize:'15px',
        // top:'5vh'
    },

    cardText:{
        fontFamily: 'Roboto Mono',
        margin:'5px',
        width:'90%',
        fontSize:'10px',
    },
    startBtn:{
        margin: '0 auto',
        width:'50%',
    }

}))

const ProgramCard = () => {
    const classes = useStyles();

    return (

        <Card className={classes.programCard}>
            <Card.Body>
                <Card.Title className={classes.cardTitle}>
                    Medium
                </Card.Title>
                <Card.Text className={classes.cardText}>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            <Card.Footer className={classes.startBtn}>
                <Button >Start <FaAngleRight/></Button>
            </Card.Footer>
        </Card>



    )
}
export default ProgramCard