import React from 'react'
import moment from 'moment'
//Style
import {makeStyles} from "@material-ui/core/styles";
import {Card} from "react-bootstrap";
import {SiGoogleanalytics} from "react-icons/si";
import {FaRegSadCry} from "react-icons/fa"
import {FaRegLaughBeam} from "react-icons/fa"

import {Link} from "react-router-dom";
const useStyles = makeStyles(() => ({
    resultCard: {
        float: 'left',
        margin: '5px',
        width: '30%',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
        background: 'white',
        borderRadius: '10px'
    },
    cardTitle: {
        fontFamily: 'Roboto Mono',
        contrastText: "black",
        marginTop: '2vh',
        margin: '0 auto',
        width: '57%',
        fontSize: '15px',
        '& div':{
            marginTop:'5%',
            fontWeight:'800',
            marginLeft:'4%'
        }
    },
    cardText: {
        fontFamily: 'Roboto Mono',
        margin: '5px',
        width: '90%',
        fontSize: '15px',
        fontWeight: '500',
        textAlign: 'center',
        '& span':{
            display:'block',
            color:'#44B6EF',
            fontSize: '35px',
            fontWeight: '800',
        },
        marginBottom:'7%'
    },
    startBtn: {
        margin: '0 auto',
        width: '20%',
        marginBottom:'5%'
    }

}))
const calcDateDiff = (date) => {
    let today = moment().format('l')
    today = new Date(today)
    const trainingDate = new Date(date);
    let diff = today.getTime() - trainingDate.getTime()
    console.log(moment(diff, "YYYYMMDD").fromNow())
}

const ResultCard = (props) => {
    const classes = useStyles()
    // get only the percent number
    let resultsNumber = props.results.result.match(/(\d+)/)
    console.log(parseInt(resultsNumber[0]))
    return (
        <Card className={classes.resultCard}>
            <Card.Body>
                <Card.Title className={classes.cardTitle}>
                    {props.results.date}
                    <div>
                        {props.results.title}
                    </div>
                    <hr/>
                </Card.Title>
                <Card.Text  className={classes.cardText}>
                    You have done
                    <span>
                        {props.results.result}
                    </span>
                   of the training!
                    {parseInt(resultsNumber[0]) <  60 ? <FaRegSadCry/> : <FaRegLaughBeam/>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className={classes.startBtn}>
                <Link to={'/report'} state={{result: props.results}}>
                    <SiGoogleanalytics size={30}/>
                </Link>
            </Card.Footer>
        </Card>
    )
}
export default ResultCard