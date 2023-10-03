import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 100 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#db2777', '#14b8a6','#6b21a8',  '#0f766e'];

const PieS = ()=>{
    return (
     
      <PieChart width={300}  height={250}>
        <Pie
          data={data}
          cx={140}
          cy={100}
          innerRadius={65}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={3}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell strokeWidth={0} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
     
      </PieChart>
      
    );
  }

  export default PieS;