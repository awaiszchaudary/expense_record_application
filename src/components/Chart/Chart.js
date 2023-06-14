import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {

    const allValues = props.dataPoints.map((dataPoint) => dataPoint.value);

    const getMaxValue = Math.max(...allValues);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => {
                return <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={getMaxValue} label={dataPoint.label} />
            })}
        </div>
    );
};

export default Chart;