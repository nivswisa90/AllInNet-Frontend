import React, {useEffect, useState} from "react";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {Table, TableBody, TableData, TableH, TableRow, TrainingResultPageH1} from './trainingResultElements';
import {TableHead} from "@material-ui/core";

const TrainingResult = () => {
    const [results, setResults] = useState(null);

    const getResult =  () => {
        const id = "66bb8ab1-a2ce-470b-a269-f73160c04c97";
        axios({
            url: `http://localhost:5001/api/training/results/${id}`,
            method: "get",
        })
            .then((res) => {
                setResults(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    

    useEffect(() => getResult(), [])

    const history = useHistory();
    const routeChange = () => {
        let path = '/duringTraining';
        history.push(path);
    }


    const renderData = () => {
        return results.map((res, index) => {
            const {
                id,
                positions: {
                    counterPos1,
                    counterPos2,
                    counterPos3,
                    counterPos4,
                    counterPos5,
                    successPos1,
                    successPos2,
                    successPos3,
                    successPos4,
                    successPos5
                },
                totalThrows,
                date,
                result,
            } = res;

            return (
                <>
                  <TableRow key={id}>
                    <TableData>{date}</TableData>
                    <TableData>{successPos1}/{counterPos1}</TableData>
                    <TableData>{successPos2}/{counterPos2}</TableData>
                    <TableData>{successPos3}/{counterPos3}</TableData>
                    <TableData>{successPos4}/{counterPos4}</TableData>
                    <TableData>{successPos5}/{counterPos5}</TableData>
                    <TableData>{totalThrows}</TableData>
                    <TableData>{result}</TableData>
                </TableRow>
                
               
                
                </>
            );
        });
    };

    return (
        <div>
            <TrainingResultPageH1>Training Program Results </TrainingResultPageH1>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableH>Date</TableH>
                        <TableH>Position 1</TableH>
                        <TableH>Position 2</TableH>
                        <TableH>Position 3</TableH>
                        <TableH>Position 4</TableH>
                        <TableH>Position 5</TableH>
                        <TableH>Total Throws</TableH>
                        <TableH>Result</TableH>
                    </TableRow>
                </TableHead>

                {results ? <TableBody>{renderData()}</TableBody> : null}
            </Table>
            {(results?.[0]?.result) === 'Fail' ? 
                <Button
                    className="get_results_btn"
                    variant="contained"
                    onClick={() => routeChange()}
                    >
                Again
                </Button>
                 : console.log('dana')}    
            <Grid container justifyContent="center">
                {/* <Button
                className="get_results_btn"
                variant="contained"
                onClick={IfResultFail(results.result)}
                style={{display:  results ? 'none' : 'block'}}
            >
                Get all training results
            </Button> */}
            </Grid>
        </div>
    );
};

export default TrainingResult;
