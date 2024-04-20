import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const CustomLineChart = ({ data }) => {
  const [chartWidth, setChartWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setChartWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to determine the chart width based on the window size
  const getResponsiveWidth = () => {
    if (chartWidth < 768) {
      return chartWidth - 150; // Mobile devices
    } else if (chartWidth >= 768 && chartWidth < 992) {
      return chartWidth - 180; // Tablets
    } else if (chartWidth >= 992 && chartWidth < 1200) {
      return chartWidth - 300; // Small desktops
    } else {
      return chartWidth - 380; // Larger desktops
    }
  };

  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <LineChart
        width={getResponsiveWidth()}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        style={{ backgroundColor: "white" }}
      >
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis
          dataKey="time"
          label={{ value: 'Time', position: 'insideBottom', offset: -10 }}
        />
        <YAxis
          label={{ value: 'Messages', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="message"
          stroke="#8884d8"
          strokeWidth={2}
          dot={{ stroke: '#8884d8', strokeWidth: 2, fill: '#8884d8' }}
          activeDot={{ stroke: 'blue', strokeWidth: 2, fill: 'blue', r: 6 }}
        />
      </LineChart>
    </div>
  );
};

export default CustomLineChart;