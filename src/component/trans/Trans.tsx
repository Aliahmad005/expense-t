import React, { useState, useEffect } from 'react'
import Bot from '../bot/Bottom'
import { FaHome, FaUser, FaEnvelope, FaArrowDown,FaStar,FaUtensilSpoon, FaArrowUp, FaGift, FaMoneyBill, FaCreditCard, FaUtensils, FaShoppingBag } from 'react-icons/fa';
import moment from 'moment';
import { GiCrossedSwords, GiForkKnifeSpoon } from 'react-icons/gi';
import { MdRestaurantMenu } from 'react-icons/md';


const Trans = () => {


  const getLocalItems = () => {
    let list = localStorage.getItem('lists');
    console.log(list)
    if (list) {
      return JSON.parse(list);
    }
    return [];
  };
  const [items, setItems] = useState(getLocalItems())

let expenseT = +0;
let incomT = +0

{
  items.map((items: any)=>{
    if(items.name === "Expense"){
     expenseT += (+items.mony)
   
    }
  })
}
{
  items.map((items: any)=>{
    if(items.name === "Incom"){
     incomT += (+items.mony)
   
    }
  })
}

let sub = incomT - expenseT;

console.log("sub" , sub)
console.log("incomee" , incomT)

  return (
    <div className='min-h-[900px] pb-[100px] '>
      <div className="w-full flex justify-between p-5">
        <p className="text-white text-2xl">Transections</p>
        <span >
          <Bot />


        </span>
      </div>

<div className='flex justify-around mb-8'>
  <span className=' text-sm  subpixel-antialiased color'>{incomT}.00 PKR</span>
  <span className=' text-sm  subpixel-antialiased rColor'>{expenseT}.00 PKR</span>
  <span className={ `text-sm ${sub >= 0 ? "color" : ''} ${sub < 0 ? "rColor" : ''}   subpixel-antialiased `}>{sub}.00 PKR</span>
</div>

      <div className=''>
        {
          items.map((items: any) => {
            return <div className='mt-5 mb-5 ml-3 flex justify-between'>
              <span className='flex'>
                <span className={` flex rounded-xl justify-center items-center ${items.subName === 'Food' ? 'backI' : ''} ${items.subName === 'Bills' ? 'backPu' : ''} ${items.subName === 'Gift' ? 'backI' : ''} ${items.subName === 'Shoping' ? 'backC' : ''} ${items.subName === 'Housing' ? 'backP' : ''} ${items.subName === 'Life style' ? 'backI' : ''}  ${items.subName === 'Refunds' ? 'backC' : ''} ${items.subName === 'Salary' ? 'backP' : ''} text-xl text-white w-[40px] h-[40px]`}>
                  {
                    items.subName === "Salary" ?

                      <FaMoneyBill style={{ position: 'relative', zIndex: 1 }} />

                      : ''
                  }
                  {
                    items.subName === "Life style" ?

                      <FaStar style={{ position: 'relative', zIndex: 1 }} />

                      : ''
                  }
                  {
                    items.subName === "Shoping" ?

                      <FaShoppingBag style={{ position: 'relative', zIndex: 1 }} />

                      : ''
                  }

                  {
                    items.subName === "Bills" ?

                      <FaMoneyBill style={{ position: 'relative', zIndex: 1 }} />

                      : ''
                  }

{
                    items.subName === "Food" ?

                      <MdRestaurantMenu style={{ position: 'relative', zIndex: 1 }} />

                      : ''
                  }


                  {
                    items.subName === "Gift" ?

                      <FaGift style={{ position: 'relative', zIndex: 1 }} />

                      : ''
                  }

                  {
                    items.subName === "Refunds" ?

                      <FaCreditCard style={{ position: 'relative', zIndex: 1 }} />

                      : ''
                  }

                  {
                    items.subName === "Housing" ?

                      <FaHome style={{ position: 'relative', zIndex: 1 }} />

                      : ''
                  }
                </span>
                <span>
                <span className='text-white ml-3'>
                  {items.subName}
                </span>
                <p className='ml-3 fon text-sm  subpixel-antialiased color'>Cash</p>
                </span>
              </span>
              <span>
              <span className={`  text-base flex justify-end   ${items.name === 'Incom' ? "color" : ''} ${items.name === "Expense" ? "rColor" :"" } mr-3`}>{items.mony} PKR</span>
           
           <div className='mr-3'>
             <p className='p-0  text-sm  subpixel-antialiased text-slate-300 '>{moment(items.time , "YYYYMMDD , h:mm:ss a").fromNow()}</p>
             </div>
              </span>
          
           
            </div>
          })
        }
      </div>



    </div>
  )
}

export default Trans




