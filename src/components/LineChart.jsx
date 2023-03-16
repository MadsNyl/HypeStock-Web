import React from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

export function LineChart({ chartData, color }) {
    Chart.defaults.color = color;

    return (
        <div className="max-w-2xl w-full">
            <Line 
                data={chartData}
                options={{
                    legend: {
                        display: false
                    },
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: true,
                                text: "day / month",
                                color: color
                            },
                            grid: {
                                display: false,
                                color: color
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: "$ / share",
                                color: color
                            },
                            grid: {
                                display: false,
                                color: color
                            }
                        }
                    }
                }}
            />
        </div>
    );
}