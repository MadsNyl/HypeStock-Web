import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';


export default function ScatterChart({ array1, array2 }) {

    ChartJS.register(
        LinearScale,
        PointElement,
        LineElement,
        Tooltip,
        Legend
    );
      
    const options = {
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
            },
        stacked: false,
        plugins: {
            legend: {
                display: false
            }
        }
    };
      
      
    const renderData = {
        // labels,
        datasets: [
            {
                data: array1,
                borderColor: "rgba(75, 192, 192, 0.2)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
            },
            {
                data: array2,
                borderColor: "rgba(255, 159, 64, 0.2)",
                backgroundColor: "rgba(255, 159, 64, 0.2)",
            },
        ],
    };
      
    return <Scatter options={options} data={renderData} />;
}