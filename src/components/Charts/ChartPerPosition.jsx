import React from 'react'
import Paper from '@material-ui/core/Paper';
import {ArgumentAxis, BarSeries, Chart, ValueAxis, Legend, Title} from '@devexpress/dx-react-chart-material-ui';
import {Stack} from '@devexpress/dx-react-chart';

const ChartPerPosition = (props) => {
    const results = props.data
    const argument = Object.keys(props.position)[0]

    const data = [
        {
            argument: argument,
            success: parseInt(results.success),
            total: parseInt(results.total),
            min: parseInt(results.min),
            color: parseInt(results.success) >= parseInt(results.min) ? 'green' : 'red'
        }
    ]

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
                    color={'yellow'}
                />
                <BarSeries
                    name="Success"
                    valueField="success"
                    argumentField="argument"
                    color={data[0].color}
                />
                <Legend position="right"/>
                <Title text={argument}/>
                <Stack />
            </Chart>
        </Paper>
    )
}

export default ChartPerPosition