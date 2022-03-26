import {Typography} from "@material-ui/core";
import {Paper} from '@mui/material';
// Material UI imports
import Button from '@mui/material/Button';
import React from "react";
import {useHistory} from "react-router-dom";
import RedCircle from '../../media/images/redCircle.png'
import GreenCircle from '../../media/images/greenCircle.png'
import BlueCircle from '../../media/images/blueCircle.png'
import YellowCircle from '../../media/images/yellowCircle.png'
import BlackCircle from '../../media/images/blackCircle.png'
import axios from "../../axios";
// import { RouteChange } from "../Utils/RouteChange";
// import axios from 'axios'


const ProgramCard = (props) => {
    const startTrainingProgram = async (minReq) => {
        console.log('WHERE HERE')
        // axios({
        //     url:'/api/training/programs/start',
        //     method:'post',
        //     minRequest: { minReq }
        // })


            axios.post(`/api/training/programs/start`, {
              minReq ,
            })
            .then((docs) => console.log(docs))
            .catch((err) => console.log(err));

        let path = "/duringTraining";
        history.push(path);
    };
    // const startTrainingProgram = async (minReq, id) => {
    //     axios
    //       .post(`http://localhost:5001/api/training/programs/start`, {
    //         minRequest: { minReq },
    //         id: { id },
    //       })
    //       .then((docs) => console.log(docs))
    //       .catch((err) => console.log(err));

    //     let path = "/duringTraining";
    //     history.push(path);
    //   };

    const history = useHistory();
    const routeChange = () => {
        let path = '/duringTraining';
        history.push(path);
    }

    return (
        <>
            <Paper style={{
                background: `linear-gradient(
                    108deg,
                    #FAEBD7 -90%,
                    #DEB887 100%)`,
                textAlign: 'center', marginTop: '20px'
            }}
            >
                <Typography>{props.index + 1}/{props.length}</Typography>
                <h2>{props.program.level}</h2>
                <p>
                    <img alt="black-circle" src={BlackCircle} style={{marginRight: '10px'}}/>
                    Position One- At least {props.program.positions.minReqPos1} shots out
                    of {props.program.positions.pos1}
                </p>
                <p>
                    <img alt="yellow-circle" src={YellowCircle} style={{marginRight: '10px'}}/>
                    Position Two- At least {props.program.positions.minReqPos2} shots out
                    of {props.program.positions.pos2}
                </p>
                <p>
                    <img alt="blue-circle" src={BlueCircle} style={{marginRight: '10px'}}/>
                    Position Three- At least {props.program.positions.minReqPos3} shots out
                    of {props.program.positions.pos3}
                </p>
                <p>
                    <img alt="green-circle" src={GreenCircle} style={{marginRight: '10px'}}/>
                    Position Four- At least {props.program.positions.minReqPos4} shots out
                    of {props.program.positions.pos4}
                </p>
                <p>
                    <img alt="red-circle" src={RedCircle} style={{marginRight: '10px'}}/>
                    Position Five- At least {props.program.positions.minReqPos5} shots out
                    of {props.program.positions.pos5}
                </p>
                <p>Minimum Shots For Pass-{props.program.minimumRequest}</p>

                <Button onClick={()=>startTrainingProgram(props.program.minimumRequest)}
                        className="CheckButton">
                    Start Training!
                </Button>
            </Paper>
        </>
    )
}
export default ProgramCard