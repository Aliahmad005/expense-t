import React, { PureComponent , useState , useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


const Dlg = ()=> {


  interface DataItem {
    date: string;
    monyI?: number;
    mony?: number;
  }
 
  const getLocalInc = () => {
    let inc = localStorage.getItem('incom');
    
    if (inc) {
      return JSON.parse(inc);
    }
    return [];
  };

  const getLocalExp = () => {
    let exp = localStorage.getItem('expense');
    
    if (exp) {
      return JSON.parse(exp);
    }
    return [];
  };


const[inc , setInc] = useState(getLocalInc())
const[exp , setExp] = useState(getLocalExp())
const [total, setTotal] = useState<DataItem[]>([]);
const[incC , setIncC] = useState<DataItem[]>([])
const[expC , setExpC] = useState<DataItem[]>([])



// useEffect(() => {
//   const newInc = inc.map((item:any) => {
//     const { mony, ...rest } = item;
//     return { monyI: mony , ...rest };
//   });
//   setIncC(newInc);
// }, [inc]);

// console.log("incc",incC)


useEffect(() => {
  const newInc = inc.map((item:any) => {
    const { time, mony, ...rest } = item;
    const date = new Date(time).toISOString().split('T')[0];
    return { date, monyI: mony  };
  });
  setIncC(newInc);
}, [inc]);




useEffect(() => {
  const newExp = exp.map((item:any) => {
    const { time , mony, ...rest } = item;
   
    const date = new Date(time).toISOString().split('T')[0];
    return { date, mony    };
  });
  setExpC(newExp);
}, [exp]);



useEffect(() => {
  setTotal([...incC, ...expC]);
}, [incC, expC]);




interface DataItem {
  date: string;
  monyI?: number;
  mony?: number;
}

// const reducedArray = [...new Map(total.map((item) => [item.date, item])).values()];
// const con = Array.from(new Map(total.map((item) => [item.date, item])).values());
const con = Object.values(
  total.reduce((acc: { [key: string]: DataItem }, item: DataItem) => {
    const { date, ...rest } = item;
    if (!acc[date]) {
      acc[date] = { date, ...rest };
    } else {
      acc[date] = { ...acc[date], ...rest };
    }
    return acc;
  }, {})
);






    return (
        <div className='text-xs mt-3' style={{ width: '100%' }}>
    
        <ResponsiveContainer width="100%" height={250}>
        <LineChart
          width={500}
          height={300}
          data={con}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
        
          <XAxis strokeWidth={0} stroke="#FFFFFF" dataKey="date" />
          <YAxis strokeWidth={0} stroke="#FFFFFF" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="monyI" stroke="#22c55e" strokeWidth={2} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="mony" stroke="#ef4444" strokeWidth={2} />
        </LineChart>
        </ResponsiveContainer>
 
 </div>
    );
  }


  export default Dlg;
