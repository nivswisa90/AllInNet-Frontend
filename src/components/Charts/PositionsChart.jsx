import React from "react";
import Paper from '@material-ui/core/Paper';
import {ArgumentAxis, BarSeries, Chart, ValueAxis,} from '@devexpress/dx-react-chart-material-ui';

const PositionsChart = (props) => {
    const result = props.result.positions

    const data = [
        {
            argument: 'Position 1',
            success: parseInt(result.successPos1),
            total: parseInt(result.counterPos1),
            color: parseInt(result.successPos1) >= parseInt(result.min1) ? 'green' : 'red'
        },
        {
            argument: 'Position 2',
            success: parseInt(result.successPos2),
            total: parseInt(result.counterPos2),
            color: parseInt(result.successPos2) >= parseInt(result.min2) ? 'green' : 'red'
        },
        {
            argument: 'Position 3',
            success: parseInt(result.successPos3),
            total: parseInt(result.counterPos3),
            color: parseInt(result.successPos3) >= parseInt(result.min3) ? 'green' : 'red'
        },
        {
            argument: 'Position 4',
            success: parseInt(result.successPos4),
            total: parseInt(result.counterPos4),
            color: parseInt(result.successPos4) >= parseInt(result.min4) ? 'green' : 'red'
        },
        {
            argument: 'Position 5',
            success: parseInt(result.successPos5),
            total: parseInt(result.counterPos5),
            color: parseInt(result.successPos5) >= parseInt(result.min5) ? 'green' : 'red'
        },
        {
            argument: 'Position 6',
            success: parseInt(result.successPos6),
            total: parseInt(result.counterPos6),
            color: parseInt(result.successPos6) >= parseInt(result.min6) ? 'green' : 'red'
        }
    ];

    return (
        <Paper>
            <Chart
                data={data}
            >
                <ArgumentAxis/>
                <ValueAxis max={1000}/>
                <BarSeries
                    name="argument"
                    valueField="total"
                    argumentField='argument'
                    color={'blue'}
                />
                <BarSeries
                    name="argument"
                    valueField="success"
                    argumentField="argument"
                    color="green"
                />
            </Chart>
        </Paper>
    );
}

export default PositionsChart;