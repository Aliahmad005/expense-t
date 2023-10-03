import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const BarCompp = () => {
  const getLocalItems = () => {
    let list = localStorage.getItem('lists');
    if (list) {
      return JSON.parse(list);
    }
    return [];
  };

  const [items, setItems] = useState(getLocalItems());
  const [incom, setIncom] = useState([]);
  const [exp, setExp] = useState([]);

  useEffect(() => {
    const filteredItems = items.filter((item:any) => item.name === 'Incom');
    setIncom(filteredItems);
  }, [items]);

  useEffect(() => {
    const filteredItems = items.filter((item:any) => item.name === 'Expense');
    setExp(filteredItems);
  }, [items]);

  const result = incom.reduce((inc:any, item:any) => {
    const { time, mony } = item;
    const date = new Date(time).toISOString().split('T')[0];
    if (date in inc) {
      inc[date] += +mony;
    } else {
      inc[date] = +mony;
    }
    return inc;
  }, {});

  const summedDataArray = Object.entries(result).map(([date, mony]) => {
    const incom = items.find((item:any) => new Date(item.time).toISOString().split('T')[0] === date);
    return { ...incom, mony };
  });

  const resultE = exp.reduce((exp:any, item:any) => {
    const { time, mony } = item;
    const date = new Date(time).toISOString().split('T')[0];
    if (date in exp) {
      exp[date] += +mony;
    } else {
      exp[date] = +mony;
    }
    return exp;
  }, {});

  const summedDataArrayE = Object.entries(resultE).map(([date, mony]) => {
    const exp = items.find((item:any) => new Date(item.time).toISOString().split('T')[0] === date);
    return { ...exp, mony };
  });

  const calculateDailyDifference = (summedDataArrayE:any, summedDataArray:any) => {
    const expenseMap = summedDataArrayE.reduce((map:any, expense:any) => {
      const date = new Date(expense.time).toISOString().split('T')[0];
      const amount = parseInt(expense.mony);
      map[date] = (map[date] || 0) + amount;
      return map;
    }, {});

    const incomeMap = summedDataArray.reduce((map:any, income:any) => {
      const date = new Date(income.time).toISOString().split('T')[0];
      const amount = parseInt(income.mony);
      map[date] = (map[date] || 0) + amount;
      return map;
    }, {});

    const dates = Array.from(new Set([...Object.keys(expenseMap), ...Object.keys(incomeMap)]));

    const dailyDifference = dates.map((date) => {
      const expenseAmount = expenseMap[date] || 0;
      const incomeAmount = incomeMap[date] || 0;
      const difference = incomeAmount - expenseAmount;

      const dayName = new Date(date).toLocaleDateString('en-US', { weekday: 'long' });
      const monthName = new Date(date).toLocaleDateString('en-US', { month: 'long' });

      return { date: `${dayName}, ${monthName}`, difference };
    });

    return dailyDifference;
  };

  const dailyDifference = calculateDailyDifference(summedDataArrayE, summedDataArray);

  const chartData = dailyDifference.map((data) => ({ date: data.date, difference: data.difference }));

  return (
    <div className='mt-3'>
      <ResponsiveContainer width='100%' height={300}>
        <AreaChart data={chartData}
        
        >
          
          <CartesianGrid strokeDasharray='0 0' />
          <XAxis strokeWidth={0} stroke="#FFFFFF"  dataKey='date' />
          <YAxis strokeWidth={0} stroke="#FFFFFF"  />
          <Tooltip />
          <Legend />
          <Area
            type='monotone'
            dataKey='difference'
            stroke='#8884d8'
            fill='#8884d8'
            fillOpacity={0.3}
            name='Difference'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCompp;
