import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BusyUserChart = ({ data }) => {


    const dataForBarChart = Object.entries(data).map(([day, value]) => ({
        candidate: value.Candidate,
        count: value.count
    }));
    
    const chartData = {


        labels: dataForBarChart.map(item => item.candidate),
        datasets: [
            {
                data: dataForBarChart.map(item => item.count),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: 'top',
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,

                ticks: {
                    font: {
                        size: 8,
                        weight: 'bold',
                    },
                    stepSize: 5
                },
                grid: {
                    display: true,
                    color: 'rgba(255, 255, 255, 0.1)',
                },
            },
            x: {
                ticks: {
                    font: {
                        size: 7,
                        weight: 'bold',
                    },
                },
                grid: {
                    display: true,
                    color: 'rgba(255, 255, 255, 0.1)',
                },
            },
        },

    };

    return <Bar data={chartData} options={options} />;
};

export default BusyUserChart;