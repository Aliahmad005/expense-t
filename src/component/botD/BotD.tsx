import React, { ChangeEvent, useEffect, useState } from 'react';

import BottomDrawerT from '../bDT/BDT';
import { FaHome, FaUser,FaStar, FaEnvelope, FaArrowDown, FaArrowUp, FaGift, FaMoneyBill, FaCreditCard, FaUtensils, FaShoppingBag } from 'react-icons/fa';

import moment from 'moment';

const Bott: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<number>()


  const getLocalno = () => {
    let list = localStorage.getItem('notification');
    console.log("check",list)
    if (list) {
      return JSON.parse(list);
    }
    return [];
  };


  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
const [notification , setNotific] = useState(getLocalno())
  const [percent, setPercent] = useState({
    perH: 0,
    
  })
  const [percentL, setPercentL] = useState({
    perL: 0,
    
  })

  const [percentF, setPercentF] = useState({
    perF: 0,
    
  })

  const [percentB, setPercentB] = useState({
    perB: 0,
    
  })


  const hMC = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name;

    setPercent((prevalue) => ({
      ...prevalue,
      [name]: value,
    }));
  };


  const hMCL = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name;

    setPercentL((prevalue) => ({
      ...prevalue,
      [name]: value,
    }));
  };

  const hMCF = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name;

    setPercentF((prevalue) => ({
      ...prevalue,
      [name]: value,
    }));
  };

  const hMCB = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name;

    setPercentB((prevalue) => ({
      ...prevalue,
      [name]: value,
    }));
  };

  const save =()=>{
    if(percent.perH != 0){
      localStorage.setItem('percent', JSON.stringify(percent));

    }
    if(percentL.perL != 0){
      localStorage.setItem('percentL', JSON.stringify(percentL));

    }
    if(percentF.perF != 0){
      localStorage.setItem('percentF', JSON.stringify(percentF));

    }
    if(percentB.perB != 0){
      localStorage.setItem('percentB', JSON.stringify(percentB));

    }
  }


  return (
    <div >

      <img onClick={toggleDrawer} src={require('../img/swt.png')} alt="" />

      <BottomDrawerT isOpen={isOpen} onClose={toggleDrawer}>
        <div >
          <div className='flex justify-between mt-3'>
            <span className='flex'>
              <span className=' flex text-xl text-white w-[40px] h-[40px] backP rounded-xl justify-center items-center'> <FaHome style={{ position: 'relative', zIndex: 1 }} />


              </span>
              <span>

                <span className='text-white  ml-3'>
                  Houseing
                </span>
                <p className='ml-3 fon text-sm  subpixel-antialiased rColor'>Expense</p>
              </span>
            </span>

            <span className={`bg-transparent    text-white  text-2xl`}>
              <input
                onChange={hMC}
                name='perH'
                value={percent.perH}
                className={`bg-transparent  w-[50px]  border-2  text-white rounded-lg text-2xl`}
               
              /> %
            </span>

          </div>

          <div className='flex justify-between mt-3'>
            <span className='flex'>
              <span className=' flex text-xl text-white w-[40px] h-[40px] backI rounded-xl justify-center items-center'> <FaStar style={{ position: 'relative', zIndex: 1 }} />


              </span>
              <span>

                <span className='text-white  ml-3'>
                  Life style
                </span>
                <p className='ml-3 fon text-sm  subpixel-antialiased rColor'>Expense</p>
              </span>
            </span>

            <span className={`bg-transparent    text-white  text-2xl`}>
              <input
                onChange={hMCL}
                name='perL'
                value={percentL.perL}
                className={`bg-transparent  w-[50px]  border-2  text-white rounded-lg text-2xl`}
                type="number"
              /> %
            </span>

          </div>

          <div className='flex justify-between mt-3'>
            <span className='flex'>
              <span className=' flex text-xl text-white w-[40px] h-[40px] backC rounded-xl justify-center items-center'> <FaShoppingBag style={{ position: 'relative', zIndex: 1 }} />


              </span>
              <span>

                <span className='text-white  ml-3'>
                  Shoping
                </span>
                <p className='ml-3 fon text-sm  subpixel-antialiased rColor'>Expense</p>
              </span>
            </span>

            <span className={`bg-transparent    text-white  text-2xl`}>
              <input
                onChange={hMCF}
                name='perF'
                value={percentF.perF}
                className={`bg-transparent  w-[50px]  border-2  text-white rounded-lg text-2xl`}
                type="number"
              /> %
            </span>

          </div>

          <div className='flex justify-between mt-3'>
            <span className='flex'>
              <span className=' flex text-xl text-white w-[40px] h-[40px] backPu rounded-xl justify-center items-center'> <FaMoneyBill style={{ position: 'relative', zIndex: 1 }} />


              </span>
              <span>

                <span className='text-white  ml-3'>
                  Bills
                </span>
                <p className='ml-3 fon text-sm  subpixel-antialiased rColor'>Expense</p>
              </span>
            </span>

            <span className={`bg-transparent    text-white  text-2xl`}>
              <input
                onChange={hMCB}
                name='perB'
                value={percentB.perB}
                className={`bg-transparent  w-[50px]  border-2  text-white rounded-lg text-2xl`}
                type="number"
              /> %
            </span>

          </div>



        </div>

        
        <div onClick={save} className=' w-[90px] mt-5 flex justify-center items-center rounded-lg h-[50px] bg-gray-900 font-semibold text-2xl text-white'><span>ADD</span></div>


      </BottomDrawerT>
    </div>
  );
};

export default Bott;


