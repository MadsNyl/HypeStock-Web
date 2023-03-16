import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

export default function PieChart({ data, labels, colors }) {
    ChartJS.register(ArcElement, Tooltip, Legend);
    
    const renderData = {
        labels,
        datasets: [
            {
                label: "data",
                data: data,
                backgroundColor: colors,
                borderColor: colors, 
                borderWidth: 1
            }
        ]
    }

    return (
        <div className="w-full">
            <Pie data={renderData} />
        </div>
    )
}