import React from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


export default function BarChart({ labels, reddit, article }) {

    const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
        },
    };

    const data = {
        labels,
        datasets: [
          {
            data: reddit,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            data: article,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };

    return <Bar options={options} data={data} />;
}