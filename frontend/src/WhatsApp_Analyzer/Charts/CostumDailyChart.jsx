import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const formatDate = (dateString) => {
  const dateObject = new Date(dateString);
  const day = dateObject.getDate();
  const month = dateObject.toLocaleString('default', { month: 'short' });
  const year = dateObject.getFullYear();
  return `${day} ${month} ${year}`;
};

const CustomDailyChart = ({ data }) => {
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

  // Dynamic size based on breakpoints
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

  const formattedData = data.map(item => ({
    ...item,
    only_date: formatDate(item.only_date)
  }));

  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <LineChart
        width={getResponsiveWidth()}
        height={300}
        data={formattedData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        style={{ backgroundColor: "white" }}
      >
        <CartesianGrid stroke="#ccc" strokeDasharray="6 5" />
        <XAxis
          dataKey="only_date"
          angle={-90}
          textAnchor='end'
          height={120}
          label={{ value: 'Time', position: 'insideBottom', offset: -10 }}
        />
        <YAxis label={{ value: 'Messages', angle: -90, position: 'insideLeft' }} />
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

export default CustomDailyChart;