import React, { ChangeEvent, useEffect, useState } from 'react';
import BottomDrawer from '../ex/ex';
import { FaHome, FaUser, FaEnvelope, FaArrowDown, FaArrowUp, FaGift, FaMoneyBill, FaCreditCard, FaUtensils, FaShoppingBag } from 'react-icons/fa';
import { getValue, isDisabled } from '@testing-library/user-event/dist/utils';
import { json } from 'stream/consumers';
import moment from 'moment';


const Bot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<number>()
  const [min, setMin] = useState<number>()
  const [main, setMain] = useState({
    name: '',
    subName: '',
    mony: '',
    time:'',
    week:'',
   })
  const [notify , setNotify] = useState({
     notification: '',
     subName:'',
     time:'',
  })
  const [notifyL , setNotifyL] = useState({
    notification: '',
    subName:'',
    time:'',
 })
 const [notifyS , setNotifyS] = useState({
  notification: '',
  subName:'',
  time:'',
})
const [notifyB , setNotifyB] = useState({
  notification: '',
  subName:'',
  time:'',
})
  console.log("main" , main)

  useEffect(()=>{
    main.time = moment().format();
    main.week = moment().format('dddd');  
  },[main])

  const getLocalItems = () => {
    let list = localStorage.getItem('lists');
  
    if (list) {
      return JSON.parse(list);
    }
    return [];
  };

  const getLocalPer = () => {
    let list = localStorage.getItem('percent');
    console.log(list)
    if (list) {
      return JSON.parse(list);
    }
    return [];
  };

  const getLocalPerL = () => {
    let list = localStorage.getItem('percentL');
    console.log(list)
    if (list) {
      return JSON.parse(list);
    }
    return [];
  };

  const getLocalPerS = () => {
    let list = localStorage.getItem('percentF');
    console.log(list)
    if (list) {
      return JSON.parse(list);
    }
    return [];
  };

  const getLocalPerB = () => {
    let list = localStorage.getItem('percentB');
    console.log(list)
    if (list) {
      return JSON.parse(list);
    }
    return [];
  };


const getLocalNot = () => {
    let list = localStorage.getItem('notification');
   
    if (list) {
      return JSON.parse(list);
    }
    return [];
  };

  const [recent , setRecent] = useState(getLocalPer())
  const [recentL , setRecentL] = useState(getLocalPerL())
  const [recentS , setRecentS] = useState(getLocalPerS())
  const [recentB , setRecentB] = useState(getLocalPerB())
  
  
      

  const [dataa ,setDataa] = useState<any[]>(getLocalItems())
  const [notific ,setNotific] = useState<any[]>(getLocalNot())
 


  const but = [
    { name: "Incom", imgg: 'FaHome', icon: 'dash.png', dis: "translate-x-0" },
    { name: "Expense", imgg: 'FaHome', icon: 'tra.png', dis: "translate-x-16" },


  ]

  const iM = [
    { name: "Salary", icon: 'dash.png', dis: "translate-x-0" },
    { name: "Gifts", icon: 'tra.png', dis: "translate-x-16" },
    { name: "Refunds", icon: 'tra.png', dis: "translate-x-16" },


  ]

  const eM = [
    { name: "Housing", icon: 'dash.png', dis: "translate-x-0" },
    { name: "Food style", icon: 'tra.png', dis: "translate-x-16" },
    { name: "Shoping ", icon: 'tra.png', dis: "translate-x-16" },
    { name: "Bills ", icon: 'tra.png', dis: "translate-x-16" },


  ]

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const handleClickAdd = () => {
    // setDataa(prevData => [...prevData, main]);

    const updatedData = [...dataa, main];
    setDataa(updatedData);

    if(notify.notification != ''){
      setNotific(prevNot => [...prevNot, notify]);

    }
    if(notifyL.notification != ''){
      setNotific(prevNot => [...prevNot, notifyL]);

    }
    if(notifyS.notification != ''){
      setNotific(prevNot => [...prevNot, notifyS]);

    }
    if(notifyB.notification != ''){
      setNotific(prevNot => [...prevNot, notifyB]);

    }
    console.log("nooooo" , notific)
    localStorage.setItem('lists', JSON.stringify(dataa));
    localStorage.setItem('notification', JSON.stringify(notific));
    toggleDrawer()
  };

  const hMC = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name;

    setMain((prevalue) => ({
      ...prevalue,
      [name]: value,
    }));
  };



  //get percentage


  let today = ""
let housS = 0
let incom = 0

  
    const [per, setPer] = useState(0);
    const [perL, setPerL] = useState(0);
    const [perS, setPerS] = useState(0);
    const [perB, setPerB] = useState(0);

useEffect(()=>{
    today =   moment().format(); 

    const todayT = new Date(today).toISOString().split('-' )[1];

    const incomGet = dataa.filter(data =>{
     return   data.name === "Incom"  &&  new Date(data.time).toISOString().split('-' )[1] === todayT
    })

  let insum =  incomGet.reduce((a,v) =>  a = a + +v.mony , 0 )

const houseGet = dataa.filter(data =>{
     return   data.subName === "Housing" &&  new Date(data.time).toISOString().split('-' )[1] === todayT;
    })

  let housum =  houseGet.reduce((a,v) =>  a = a + +v.mony , 0 )

  const lifeGet = dataa.filter(data =>{
    return   data.subName === "Food" &&  new Date(data.time).toISOString().split('-' )[1] === todayT;
   })

 let lifesum =  lifeGet.reduce((a,v) =>  a = a + +v.mony , 0 )

 const shopGet = dataa.filter(data =>{
  return   data.subName === "Shoping" &&  new Date(data.time).toISOString().split('-' )[1] === todayT;
 })

let shopsum =  shopGet.reduce((a,v) =>  a = a + +v.mony , 0 )


const billGet = dataa.filter(data =>{
  return   data.subName === "Bills" &&  new Date(data.time).toISOString().split('-' )[1] === todayT;
 })

let billsum =  billGet.reduce((a,v) =>  a = a + +v.mony , 0 )
    
  setPer((housum/insum)*100)
  setPerL((lifesum/insum)*100)
  setPerS((shopsum/insum)*100)
  setPerB((billsum/insum)*100)

  
  console.log("shop style" , perS)
  console.log("Foood" , perL)
  console.log("housestyle" , per)
  console.log("billstyle" , perB)
     


},[dataa])

useEffect(()=>{

     if(  per >= Number(recent.perH)){

       notify.notification = 'Housing budgut is increased then your budget'
       notify.subName = 'Housing'
       notify.time = moment().format();


    console.log("yesssss" , notify)

         console.log('increase ho gai hai')
          }else {
            console.log("nhi hoa hai")
          }
}, [per])


useEffect(()=>{

  if(  perL >= Number(recentL.perL)){

    notifyL.notification = 'Life Style budgut is increased then your budget'
    notifyL.subName = 'Food'
    notifyL.time = moment().format();
console.log("lifeconsole" , notifyL)
       }else {
         console.log("nhi hoa hai")
       }
}, [perL])

useEffect(()=>{

  if(  perS >= Number(recentS.perF)){

    notifyS.notification = 'Shoping budgut is increased then your budget'
    notifyS.subName = 'Shoping'
    notifyS.time = moment().format();
    console.log("shopconsole" , notifyS)

       }else {
         console.log("nhi hoa hai")
       }
}, [perS])
useEffect(()=>{

  if(  perB >= Number(recentB.perB)){

    notifyB.notification = 'Bill budgut is increased then your budget'
    notifyB.subName = 'Bill'
    notifyB.time = moment().format();
    console.log("billconsole" , notifyB)
    
       }else {
         console.log("nhi hoa hai")
       }
}, [perB])

  return (
    <div >

      <img onClick={toggleDrawer} src={require('../img/add.png')} alt="" />

      <BottomDrawer isOpen={isOpen} onClose={toggleDrawer}>

        <div className='flex'>

          {
            but.map((menu, i: number) => (

              <div onClick={() => {
                 setActive(i) 
                 if(i === 0){
                  main.name = "Incom"
                 }
                 else if(i === 1){
                  main.name = "Expense"
                 }
                 console.log(main.name)
                 
                 }} className={`flex border-2 border-solid font-medium text-base p-1 items-center rounded-lg m-2 ${active == 0 && i == 0 ? "backG wColor" : ''} ${active == 1 && i == 1 ? "backR wColor" : ''}  ${i == 0 ? "border-green-600 color" : ''} ${i == 1 ? "border-red-500 rColor" : ''} `}><span className='ml-1'>  {i == 0 ? <FaArrowUp style={{ position: 'relative', zIndex: 1 }} /> : ''} {i == 1 ? <FaArrowDown style={{ position: 'relative', zIndex: 1 }} /> : ''} </span> <span className='ml-2 mr-2'>{menu.name}</span></div>

            ))
          }

        </div>
        <div className='w-full flex justify-center mt-5'>
          <span className={`${active == 0 ? "color" : ''} ${active == 1 ? "rColor" : ''}  mr-2 text-2xl`}>PKR</span>
          <input
            onChange={hMC}
            name='mony'
            value={main.mony}
            className={`bg-transparent ${active == 0 ? "border-green-600" : ''}  ${active == 1 ? "border-red-500 rColor" : ''} border-2 w-fit text-white rounded-lg text-2xl`}
            type="number"
          />
        </div>


        {active == 0 ?
          <div className='flex mt-5'>
            {
              iM.map((menu, i: number) => (

                <div onClick={() => { 
                  setMin(i)
                  
                  if(i === 0){
                    main.subName = "Salary"
                   }
                   else if(i === 1){
                    main.subName = "Gift"
                   }
                   else if(i === 2){
                    main.subName = "Refunds"
                   }
                
                }} className={`flex border-2 border-solid font-medium text-base p-1 items-center rounded-lg m-2 ${min == 0 && i == 0 ? "backP border-pink-500 wColor" : ''} ${min == 1 && i == 1 ? "backI border-indigo-600  wColor" : ''} ${min == 2 && i == 2 ? "backC border-cyan-500  wColor" : ''}  ${i == 0 && min != 0 ? "border-pink-500 colrP" : ''} ${i == 2 && min != 2 ? "border-cyan-500 colorC" : ''} ${i == 1 && min != 1 ? "border-indigo-600 iColor" : ''} `}><span className='ml-1'>  {i == 0 ? <FaMoneyBill style={{ position: 'relative', zIndex: 1 }} /> : ''} {i == 2 ? <FaCreditCard style={{ position: 'relative', zIndex: 1 }} /> : ''} {i == 1 ? <FaGift style={{ position: 'relative', zIndex: 1 }} /> : ''} </span> <span className='ml-2 mr-2'>{menu.name}</span></div>

              ))
            }
          </div>
          : ''
        }

        {active == 1 ?
          <div className='flex flex-wrap mt-5'>
            {
              eM.map((menu, i: number) => (

                <div onClick={() => {
                   setMin(i)
                   if(i === 0){
                    main.subName = "Housing"
                   }
                   else if(i === 1){
                    main.subName = "Food"
                   }
                   else if(i === 2){
                    main.subName = "Shoping"
                   }
                   else if(i === 3){
                    main.subName = "Bills"
                   }
                  
                  }} className={`flex border-2 border-solid font-medium text-base p-1 items-center rounded-lg m-2 ${min == 0 && i == 0 ? "backP border-pink-500 wColor" : ''} ${min == 1 && i == 1 ? "backI border-indigo-600  wColor" : ''} ${min == 2 && i == 2 ? "backC border-cyan-500  wColor" : ''} ${min == 3 && i == 3 ? "backPu border-purple-500  wColor" : ''}  ${i == 0 && min != 0 ? "border-pink-500 colrP" : ''} ${i == 3 && min != 3 ? "border-purple-500 colorPu" : ''} ${i == 2 && min != 2 ? "border-cyan-500 colorC" : ''} ${i == 1 && min != 1 ? "border-indigo-600 iColor" : ''} `}><span className='ml-1'>  {i == 0 ? <FaHome style={{ position: 'relative', zIndex: 1 }} /> : ''} {i == 2 ? <FaShoppingBag style={{ position: 'relative', zIndex: 1 }} /> : ''} {i == 3 ? <FaMoneyBill style={{ position: 'relative', zIndex: 1 }} /> : ''} {i == 1 ? <FaUtensils style={{ position: 'relative', zIndex: 1 }} /> : ''} </span> <span className='ml-2 mr-2'>{menu.name}</span></div>

              ))
            }
          </div>
          : ''
        }

        <div onClick={handleClickAdd} className=' w-[90px] mt-5 flex justify-center items-center rounded-lg h-[50px] bg-gray-900 font-semibold text-2xl text-white'><span>ADD</span></div>

      </BottomDrawer>
    </div>
  );
};

export default Bot;











