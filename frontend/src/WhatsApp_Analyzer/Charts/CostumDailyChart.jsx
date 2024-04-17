import React from 'react';
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
  // Format the date for each data point
  const formattedData = data.map(item => ({ ...item, only_date: formatDate(item.only_date) }));

  return (
    <LineChart
      width={600}
      height={400}
      data={formattedData}
      margin={{ top: 5, right: 30, left: 10, bottom: 18 }}
      style={{ backgroundColor: "white" }}
    >
      <CartesianGrid stroke="#ccc" strokeDasharray="6 5" />
      <XAxis
        dataKey="only_date"
        angle={-90}
        textAnchor='end'
        height={120}
        label={{ value: 'Time', position: 'insideBottom', offset: -10, }}
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
  );
};

export default CustomDailyChart;
