import React from "react";
import Paper from '@material-ui/core/Paper';
import {ArgumentAxis, BarSeries, Chart, Legend, Title, ValueAxis} from '@devexpress/dx-react-chart-material-ui';
import {Stack} from '@devexpress/dx-react-chart';
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@mui/material";
const useStyles = makeStyles(() => ({
    title:{
        fontFamily: 'Roboto Mono',
        margin:'0 auto',
        width:'65%',
        fontSize:'25px'
    }
}))


const PositionsChart = ({results}) => {
    console.log(results)
    const res = results.positions
    const classes = useStyles()

    const data = [
        {
            argument: 'Position 1',
            success: parseInt(res.successPos1),
            total: parseInt(res.counterPos1),
            min: parseInt(res.min1),
            color: parseInt(res.successPos1) >= parseInt(res.min1) ? 'green' : 'red'
        },
        {
            argument: 'Position 2',
            success: parseInt(res.successPos2),
            total: parseInt(res.counterPos2),
            min: parseInt(res.min2),
            color: parseInt(res.successPos2) >= parseInt(res.min2) ? 'green' : 'red'
        },
        {
            argument: 'Position 3',
            success: parseInt(res.successPos3),
            total: parseInt(res.counterPos3),
            min: parseInt(res.min3),
            color: parseInt(res.successPos3) >= parseInt(res.min3) ? 'green' : 'red'
        },
        {
            argument: 'Position 4',
            success: parseInt(res.successPos4),
            total: parseInt(res.counterPos4),
            min: parseInt(res.min4),
            color: parseInt(res.successPos4) >= parseInt(res.min4) ? 'green' : 'red'
        },
        {
            argument: 'Position 5',
            success: parseInt(res.successPos5),
            total: parseInt(res.counterPos5),
            min: parseInt(res.min5),
            color: parseInt(res.successPos5) >= parseInt(res.min5) ? 'green' : 'red'
        },
        {
            argument: 'Position 6',
            success: parseInt(res.successPos6),
            total: parseInt(res.counterPos6),
            min: parseInt(res.min6),
            color: parseInt(res.successPos6) >= parseInt(res.min6) ? 'green' : 'red'
        }
    ];
    return (
        <Paper>
            <Typography className={classes.title}>Result Chart Per Positions</Typography>
            <Chart
                data={data}
            >
                <ArgumentAxis/>
                <ValueAxis max={1000}/>
                <BarSeries
                    name="Total Throws"
                    valueField="total"
                    argumentField='argument'
                    color={'blue'}
                />
                <BarSeries
                    name="Minimum To Pass Position"
                    valueField="min"
                    argumentField="argument"
                    color="yellow"
                />
                <BarSeries
                    name="Successful Throws"
                    valueField="success"
                    argumentField="argument"
                    color="green"
                />
                <Legend position="bottom"/>
                <Stack/>
            </Chart>
        </Paper>
    );
}

export default PositionsChart;