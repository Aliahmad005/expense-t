import React , { useState, useEffect} from 'react'
// import { Bar } from 'react-chartjs-2'
// import { Pie , PieChart ,Tooltip , Bar ,BarChart} from 'recharts'
// import { AreaChart , Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer , Line } from 'recharts';
import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement , LineElement } from 'chart.js';


const BarComp = () => {


  Chart.register(CategoryScale, LinearScale, PointElement , LineElement );

  
    const getLocalItems = () => {
      let list = localStorage.getItem('lists');
    
      if (list) {
        return JSON.parse(list);
      }
      return [];
    };

  const [items, setItems] = useState(getLocalItems());
 
  const [incom , setIncom  ] = useState([])
  const [exp , setExp  ] = useState([])

  useEffect(() => {
    const filteredIncom = items.filter((item : any) => item.name === 'Incom');
    setIncom(filteredIncom);
  }, [items]);
console.log("real income" ,  incom)
console.log("real exp" ,  exp)
  useEffect(() => {
    const filteredItems = items.filter((item : any) => item.name === 'Expense');
    setExp(filteredItems);
  }, [items]);
  


  const result = incom.reduce((inc: any, item:any) => {
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
    const incom = items.find((item:any) => new Date(item.time).toISOString().split('T')[0] === date && item.name === "Incom");
    return { ...incom, mony };
  });




const resultE = exp.reduce((acc: any, item:any) => {
  const { time, mony } = item;
  const date = new Date(time).toISOString().split('T')[0];
  if (date in acc) {
    acc[date] += +mony;
  } else {
    acc[date] = +mony;
  }
  return acc;
}, {});

const summedDataArrayE = Object.entries(resultE).map(([date, mony]) => {
  const exp = items.find((item:any) => new Date(item.time).toISOString().split('T')[0] === date    && item.name === "Expense");
  return { ...exp, mony };
});

console.log("summE" , summedDataArrayE);

// get differnce

const calculateDailyDifference = (summedDataArrayE : any, summedDataArray : any) => {
  const expenseMap = summedDataArrayE.reduce((map : any, expense: any) => {
    const date = new Date(expense.time).toISOString().split('T')[0];
    const amount = parseInt(expense.mony);

    map[date] = (map[date] || 0) + amount;
    return map;
  }, {});

  const incomeMap = summedDataArray.reduce((map: any, income : any) => {
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


    // return { date: dayName, difference };
    // return { date, difference };
  });

  return dailyDifference;
};

const dailyDifference = calculateDailyDifference(summedDataArrayE, summedDataArray);

useEffect(()=>{
localStorage.setItem('incom', JSON.stringify(summedDataArray));
localStorage.setItem('expense', JSON.stringify(summedDataArrayE));

},[summedDataArray , summedDataArrayE])


 
 const chartOptions = {
  scales: {
    y: {
     
      ticks: {
        color: 'white', // Set the y-axis tick color to white
      },
    },
    x: {
      
      ticks: {
        color: 'white', // Set the x-axis tick color to white
      },
    },
  },
  plugins: {
    tooltip: {
      intersect: false,
    },
    legend: {
      display: false,
    },
  },
};
 




const chartData = {
  labels: dailyDifference.map((data) => data.date),
  datasets: [
    {
      label: 'Difference',
      data: dailyDifference.map((data) => data.difference),
      fill: 'start', // Fill the area under the line
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      tension: 0.4, // Adjust the line tension for smoother curve
    },
  ],
};




 

  return (
    <div className='mt-3'>
   
      <Line data={chartData} options={chartOptions} />

    
      </div>
 
  
    
  )
}

export default BarComp











