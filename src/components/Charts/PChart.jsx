import {PieChart} from 'react-minimal-pie-chart';
import {useEffect, useState} from "react";

const sumOfConversions = (result) => {
    let total = 0
    for (const [key, value] of Object.entries(result)) {
        if (key.includes('successPos')) {
            total += value
        }
    }
    return total
}

let cData

const createPieData = (results) => {
    let i = 0
    const totalConversion = sumOfConversions(results) * 100
    cData = []
    Object.keys(results).map(result => {
        if (result.includes('successPos')) {
            cData.push({
                title: positions[i],
                value: (results[result] / totalConversion),
                color: colors[i]
            })
            i++
        }
    })
    return cData
}

const colors = ['red', 'blue', 'brown', 'yellow', 'green', 'purple']
const positions = ['Pos1', 'Pos2', 'Pos3', 'Pos4', 'Pos5', 'Pos6']

const PChart = (props) => {
    const [chartData, setChartData] = useState([])
    const results = props.result.positions

    useEffect(() => {
        setChartData(createPieData(results))
    }, [])


    return (
        <PieChart
            radius={30}
            data={chartData}
            // label={({ dataEntry }) => dataEntry.value}
        />
    )
}

export default PChart
