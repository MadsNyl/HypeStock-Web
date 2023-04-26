import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


export default function MultiLineChart({ labels, priceData, mentionsData }) {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
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
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                },
            },
        },
    };
      
      
    const renderData = {
        labels,
        datasets: [
            {
                data: priceData,
                lineTension: 0.3,
                borderColor: "rgba(75, 192, 192, 0.2)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                yAxisID: 'y',
            },
            {
                data: mentionsData,
                lineTension: 0.3,
                borderColor: "rgba(255, 159, 64, 0.2)",
                backgroundColor: "rgba(255, 159, 64, 0.2)",
                yAxisID: 'y1',
            },
        ],
    };
      
    return <Line options={options} data={renderData} />;
}
