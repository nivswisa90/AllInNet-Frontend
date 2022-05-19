import React from "react";
import Paper from '@material-ui/core/Paper';
import {ArgumentAxis, BarSeries, Chart, Legend, Title, ValueAxis} from '@devexpress/dx-react-chart-material-ui';
import {Stack} from '@devexpress/dx-react-chart';

const PositionsChart = (props) => {
    const result = props.result.positions

    const data = [
        {
            argument: 'Position 1',
            success: parseInt(result.successPos1),
            total: parseInt(result.counterPos1),
            min: parseInt(result.min1),
            color: parseInt(result.successPos1) >= parseInt(result.min1) ? 'green' : 'red'
        },
        {
            argument: 'Position 2',
            success: parseInt(result.successPos2),
            total: parseInt(result.counterPos2),
            min: parseInt(result.min2),
            color: parseInt(result.successPos2) >= parseInt(result.min2) ? 'green' : 'red'
        },
        {
            argument: 'Position 3',
            success: parseInt(result.successPos3),
            total: parseInt(result.counterPos3),
            min: parseInt(result.min3),
            color: parseInt(result.successPos3) >= parseInt(result.min3) ? 'green' : 'red'
        },
        {
            argument: 'Position 4',
            success: parseInt(result.successPos4),
            total: parseInt(result.counterPos4),
            min: parseInt(result.min4),
            color: parseInt(result.successPos4) >= parseInt(result.min4) ? 'green' : 'red'
        },
        {
            argument: 'Position 5',
            success: parseInt(result.successPos5),
            total: parseInt(result.counterPos5),
            min: parseInt(result.min5),
            color: parseInt(result.successPos5) >= parseInt(result.min5) ? 'green' : 'red'
        },
        {
            argument: 'Position 6',
            success: parseInt(result.successPos6),
            total: parseInt(result.counterPos6),
            min: parseInt(result.min6),
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
                    name="Total"
                    valueField="total"
                    argumentField='argument'
                    color={'blue'}
                />
                <BarSeries
                    name="Minimum"
                    valueField="min"
                    argumentField="argument"
                    color="yellow"
                />
                <BarSeries
                    name="Success"
                    valueField="success"
                    argumentField="argument"
                    color="green"
                />
                <Legend position="right"/>
                <Title text="Results"/>
                <Stack/>
            </Chart>
        </Paper>
    );
}

export default PositionsChart;