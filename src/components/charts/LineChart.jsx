import React from "react";
import { Line } from "react-chartjs-2";
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


export default function LineChart({ labels, data, dataLabel, text }) {

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
        plugins: {
            legend: {
                position: "top"
            },
            title: {
                display: true,
                text: text
            }
        }
    };

    const renderData = {
        labels,
        datasets: [
            {
                label: dataLabel,
                data: data,
                borderColor: "rgba(75, 192, 192, 0.2)",
                backgroundColor: "rgba(75, 192, 192, 0.2)"
            }
        ]
    };

    return (
        <div className="w-full">
            <Line options={options} data={renderData} />
        </div>
    );
}