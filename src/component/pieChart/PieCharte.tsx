import React, { PureComponent , useState , useEffect } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 100 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#db2777', '#14b8a6','#6b21a8',  '#0f766e'];


interface Item {
  subName: string;
  mony: number;
  
}

const PieCh = ()=>{

  const getLocalItems = () => {
    let list = localStorage.getItem('lists');
 
    if (list) {
      return JSON.parse(list);
    }
    return [];
  };

const [items, setItems] = useState(getLocalItems());


const [housing , setHousing  ] = useState([])
  const [life , setLife  ] = useState([])
  const [sho , setSho  ] = useState([])
  const [bil , setBil  ] = useState([])
  const [hS , setHS  ] = useState({
  
  })
  const [all , setAll  ] = useState<Item[]>([])
  
  useEffect(() => {
    const filteredItems = items.filter((item : any) => item.subName === 'Housing');
    setHousing(filteredItems);
  }, [items]);

  useEffect(() => {
    const filteredItems = items.filter((item : any) => item.subName === 'Food');
    setLife(filteredItems);
  }, [items]);

  useEffect(() => {
    const filteredItems = items.filter((item : any) => item.subName === 'Shoping');
    setSho(filteredItems);
  }, [items]);

  useEffect(() => {
    const filteredItems = items.filter((item : any) => item.subName === 'Bills');
    setBil(filteredItems);
  }, [items]);


//house summ

const result = housing.reduce((hou: any, item:any) => {
  const { time, mony, subName } = item;
  const date = new Date(time).toISOString().split('T')[0];
  if (subName in hou) {
    hou[subName] += +mony;
  } else {
    hou[subName] = +mony;
  }
  return hou;
}, {});

const summHouse = Object.entries(result).map(([subName, mony]) => {
  const housing = items.find((item:any) => item.subName === subName);

return { ...housing, mony };



});





//life summ


const lifeR = life.reduce((lif: any, item:any) => {
  const { time, mony, subName } = item;
 
  if (subName in lif) {
    lif[subName] += +mony;
  } else {
    lif[subName] = +mony;
  }
  return lif;
}, {});

const summLife = Object.entries(lifeR).map(([subName, mony]) => {
  const life = items.find((item:any) => item.subName === subName);
  return { ...life, mony };
});




// shoping summ



const shoR = sho.reduce((sho: any, item:any) => {
  const { time, mony, subName } = item;
  const date = new Date(time).toISOString().split('T')[0];
  if (subName in sho) {
    sho[subName] += +mony;
  } else {
    sho[subName] = +mony;
  }
  return sho;
}, {});

const summShop = Object.entries(shoR).map(([subName, mony]) => {
  const sho = items.find((item:any) => item.subName === subName);
  return { ...sho, mony };
});




// Bills Summ



const billR = bil.reduce((bil: any, item:any) => {
  const { time, mony, subName } = item;
  const date = new Date(time).toISOString().split('T')[0];
  if (subName in bil) {
    bil[subName] += +mony;
  } else {
    bil[subName] = +mony;
  }
  return bil;
}, {});

const summBill = Object.entries(billR).map(([subName, mony]) => {
  const bil = items.find((item:any) => item.subName === subName);
  return { ...bil, mony };
});



useEffect(() => {
  setAll([...summHouse, ...summShop,...summLife, ...summBill]);
}, [summHouse, summBill, summShop ,summLife]);


useEffect(() => {
  setHS ([...summHouse]);
}, [summHouse, summBill, summShop ,summLife]);







useEffect(()=>{
  
  // localStorage.setItem('exp', JSON.stringify(summHouse.mony));
  const summHouseMony = summHouse.map(item => item.mony.toString());
  localStorage.setItem('expH', JSON.stringify(summHouseMony));
  
  const summFoddMony = summLife.map(item => item.mony.toString());
  localStorage.setItem('expF', JSON.stringify(summFoddMony));
  
    
  const summShopMony = summShop.map(item => item.mony.toString());
  localStorage.setItem('expS', JSON.stringify(summShopMony));

  const summBillMony = summBill.map(item => item.mony.toString());
  localStorage.setItem('expB', JSON.stringify(summBillMony));
  



  localStorage.setItem('hS', JSON.stringify(hS));
 
  
  

},[...all])


    return (
     
      <PieChart width={100} height={100}>
        <Pie
          data={all}
          cx={50}
          cy={50}
          innerRadius={30}
          outerRadius={43}
          fill="#8884d8"
          paddingAngle={3}
          dataKey="mony"
        >
          {data.map((entry, index) => (
            <Cell strokeWidth={0} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
     
      </PieChart>
      
    );
  }

  export default PieCh;