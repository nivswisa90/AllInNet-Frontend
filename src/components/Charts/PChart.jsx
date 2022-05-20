import {PieChart} from 'react-minimal-pie-chart';
import {useEffect, useState} from "react";
import {Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";


const createPieData = (results) => {
    let i = 0
    const cData = []
    const colors = ['red', 'blue', 'brown', 'yellow', 'green', 'purple']
    const positions = ['Pos1', 'Pos2', 'Pos3', 'Pos4', 'Pos5', 'Pos6']
    Object.keys(results).map(result => {
        if (result.includes('successPos')) {
            cData.push({
                title: positions[i],
                value: results[result],
                color: colors[i]
            })
            i++
        }
    })
    return cData
}

const useStyles = makeStyles(() => ({
    pieContainer: {
        margin: '2vh'
    },
    pieTitle: {
        fontFamily: 'Roboto Mono', width: '72%', margin: '0 auto', fontSize: '25px'
    },
    pieSubTitle: {
        width: '40%', margin: '0 auto', fontFamily: 'Roboto Mono', fontSize: '25px'
    }
}))

const PChart = (props) => {
    const [chartData, setChartData] = useState([])
    const results = props.result.positions
    const classes = useStyles()

    useEffect(() => {
        setChartData(createPieData(results))
    }, [])


    return (
        <section className={classes.pieContainer}>
            <Typography className={classes.pieTitle}>Score Ratio Per</Typography>
            <Typography className={classes.pieSubTitle}> Position</Typography>
            <PieChart
                radius={40}
                data={chartData}
                lineWidth={23}
                paddingAngle={20}
                rounded
                labelStyle={{
                    fontSize: "5px",
                    fontColor: "FFFFFA",
                    fontWeight: "250",
                }}
                labelPosition={69}
                label={(data) => data.dataEntry.title}
            />
        </section>
    )
}

export default PChart
