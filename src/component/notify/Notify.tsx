import moment from 'moment';
import React, { useState, useEffect } from 'react'
import { FaHome, FaUser, FaEnvelope, FaArrowDown, FaStar, FaArrowUp, FaGift, FaMoneyBill, FaCreditCard, FaUtensils, FaShoppingBag } from 'react-icons/fa';


const Notify = () => {

    const getLocalnot = () => {
        let list = localStorage.getItem('notification');

        if (list) {
            return JSON.parse(list);
        }
        return [];
    };


    const [notify, setNotify] = useState(getLocalnot())

    return (
        <div className='min-h-[900px] '>

            <div className="w-full flex justify-between p-5">
                <p className="text-white text-2xl">Notification</p>
                <span >
                    <img src={require('../img/swt.png')} alt="" />

                </span>
            </div>


            {
                notify.map((data: any) => {
                    return <div >
                        <div className='flex ml-3 mr-3 mt-5 justify-between'>
                            <span className='flex '>
                                <span className={` flex text-xl text-white w-[40px] h-[40px] ${data.subName == "Shoping" ? 'backC' : ''}  ${data.subName == "Bill" ? 'backPu' : ''} ${data.subName == "Housing" ? 'backP' : ''} ${data.subName == "Life" ? 'backI' : ''} rounded-xl justify-center items-center`}>
                                    {data.subName == "Housing" ?

                                        <FaHome style={{ position: 'relative' }} /> : ''
                                    }

                                    {data.subName == "Life" ?

                                        <FaStar style={{ position: 'relative' }} /> : ''
                                    }

                                    {data.subName == "Bill" ?

                                        <FaMoneyBill style={{ position: 'relative' }} /> : ''
                                    }


                                    {data.subName == "Shoping" ?

                                        <FaShoppingBag style={{ position: 'relative' }} /> : ''
                                    }
                                </span>
                                <span>

                                    <span className='text-white   ml-3'>
                                        {data.subName}
                                    </span>
                                    <p className='ml-3 fon text-sm  subpixel-antialiased rColor'>Expense</p>
                                </span>
                            </span>



                            <p className='text-white text-sm  ml-7'>{data.notification} <span className='text-slate-400 text-sm  ml-7 font-bold  text-end' >  {moment(data.time, "YYYYMMDD , h:mm:ss a").fromNow()}</span> </p>

                        </div>

                    </div>
                })


            }



        </div>
    )
}

export default Notify