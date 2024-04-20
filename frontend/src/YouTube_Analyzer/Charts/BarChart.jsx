import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = ({ data }) => {
    const dataForBarChart = Object.entries(data).map(([months, value]) => ({
        month: months,
        value: value
    }));
    
    const chartData = {
        labels: dataForBarChart.map(item => item.month),
        datasets: [
            {
                data: dataForBarChart.map(item => item.value),
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
                    stepSize: 10
                },
                grid: {
                    display: true,
                    color: 'rgba(0, 0, 0, 0.1)',
                },
            },
            x: {
                ticks: {
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                },
                grid: {
                    display: true,
                    color: 'rgba(0, 0, 0, 0.1)',
                },
            },
        },
        maintainAspectRatio: false, // This ensures that aspect ratio does not maintain when resizing
        responsive: true, // This makes the chart responsive
    };

    return <div className='bg-white' style={{ width: '100%', height: 'auto', minHeight: '300px' }}>
        <Bar data={chartData} options={options}/>
    </div> 
};

export default BarChart;