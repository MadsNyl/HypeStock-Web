import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

export default function DoughnutChart({ data, labels, colors }) {
    ChartJS.register(ArcElement, Tooltip, Legend);

    const renderData = {
        labels,
        datasets: [
          {
            label: 'data',
            data: data,
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1,
          }
        ]
      };

    return (
        <div className="w-full">
            <Doughnut data={renderData} />
        </div>
    );
}