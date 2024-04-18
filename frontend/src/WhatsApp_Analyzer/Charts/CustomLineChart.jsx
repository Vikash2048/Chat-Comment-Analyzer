import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const CustomLineChart = ({ data }) => (
  <LineChart
    width={600}
    height={300}
    data={data}
    margin={{ top: 5, right: 30, left: 10, bottom: 18 }}
    style={{backgroundColor:"white"}}
  >
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis
      dataKey="time"
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
);

export default CustomLineChart;