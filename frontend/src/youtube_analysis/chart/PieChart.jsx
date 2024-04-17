import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
    const pieData = {
        labels: Object.keys(data),
        datasets: [
            {
                data: Object.values(data),
                backgroundColor: [
                    '#FF6384',  // red for negative
                    '#36A2EB',  // blue for neutral
                    '#FFCE56'   // yellow for positive
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }
        ]
    };

    return (<div style={{ width: '400px', height: '400px' }} className='bg-white'>
        <Pie data={pieData} />
    </div>)
};


export default PieChart;