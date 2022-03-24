import React, {useEffect, useState} from "react";
import axios from "../../axios";
import {DivSection, FirstDiv, DivOpen, ImgChange} from "./TrainingProgElements";
import CourtImg from '../../media/images/Court.png';
import DisplayPrograms from "./displayPrograms";

const TrainingProg = () => {
    // const history = useHistory();
    const [programs, setPrograms] = useState([]);
    //useRef(() => { });

    useEffect(() => {
        axios({
            url: '/api/training/programs/',
            method: "get",
        })
            .then((res) => {
                setPrograms(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // const startTrainingProgram = async (minReq) => {
    //   axios
    //     .post(`http://localhost:5001/api/training/programs/start`, {
    //       minRequest: { minReq },
    //     })
    //     .then((docs) => console.log(docs))
    //     .catch((err) => console.log(err));

    //   let path = "/duringTraining";
    //   history.push(path);
    // };

    return (
        <FirstDiv>
            <h3
                style={{
                    fontWeight: 90,
                    fontSize: 50,
                    textAlign: "center",
                }}
            >
                Training programs
            </h3>
            <DivOpen>
                <ImgChange src={CourtImg} style={{padding:'10%'}} alt={'court'}/>
            </DivOpen>
            <DivSection>
                <DisplayPrograms programs={programs}/>
            </DivSection>
        </FirstDiv>
    );
};

export default TrainingProg;
