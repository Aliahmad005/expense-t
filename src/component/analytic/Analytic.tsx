import React, { useState, useEffect } from 'react'
import Dlg from '../doubleLG/doubleLG'
import BarComp from "../lineChart/LineChrt";
import moment from 'moment';


const Ana = () => {


    const getLocalItems = () => {
        let list = localStorage.getItem('lists');

        if (list) {
            return JSON.parse(list);
        }
        return [];
    };

    let itemN = 0
    let itemNE = 0
    let totalS = 0
    let totalSE = 0
    let avgD = 0
    let avgDE = 0
    let today = '';

    let itemNM = 0
    let totalSM = 0 
    let avgM =0
    let itemNME = 0
    let totalSME = 0 
    let avgME =0

    let itemNW = 0
    let totalSW = 0 
    let avgW =0

    let itemNWE = 0
    let totalSWE = 0 
    let avgWE =0



    const [items, setItems] = useState(getLocalItems());
    const [avgDA, setAvgDA] = useState(0)
    const [avgDAE, setAvgDAE] = useState(0)
    const [avgMA, setAvgMA] = useState(0)
    const [avgMAE, setAvgMAE] = useState(0)
    const [avgWA, setAvgWA] = useState(0)
    const [avgWAE, setAvgWAE] = useState(0)

    useEffect(() => {
      today =   moment().format(); 
      const todayT = new Date(today).toISOString().split('-' )[1];
      const todayW = moment().format('dddd');

        {
            items.map((item: any, index: any) => {
   

                const date = new Date(item.time).toISOString().split('-')[1];


                if (item.name === "Incom") {
                    itemN += +1

                    totalS += +item.mony
                    avgD = totalS / itemN

                    setAvgDA(Math.round(avgD))
                }
                if (item.name === "Expense") {
                    itemNE += +1

                    totalSE += +item.mony
                    avgDE = totalSE / itemNE
                    setAvgDAE(Math.round(avgDE))

                }
                if (item.name === "Incom" && date === todayT) {
                    itemNM += +1

                    totalSM += +item.mony
                    avgM = totalSM / itemNM

                    setAvgMA(Math.round(avgM))
                }
                if (item.name === "Expense" && date === todayT) {
                    itemNME += +1

                    totalSME += +item.mony
                    avgME = totalSME / itemNME

                    setAvgMAE(Math.round(avgME))
                }

                if (item.name === "Incom" && date === todayT && item.week === todayW) {
                    itemNW += +1

                    totalSW += +item.mony
                    avgW = totalSW / itemNW

                    setAvgWA(Math.round(avgW))
                }
              
                if (item.name === "Expense" && date === todayT && item.week === todayW) {
                    itemNWE += +1

                    totalSWE += +item.mony
                    avgWE = totalSWE / itemNWE

                    setAvgWAE(Math.round(avgWE))
                }
              
              
    console.log("date", date)

            })
        }
        

    }, [items])


    let expenseT = +0;
    let incomT = +0

    {
        items.map((items: any) => {
            if (items.name === "Expense") {
                expenseT += (+items.mony)

            }
        })
    }
    {
        items.map((items: any) => {
            if (items.name === "Incom") {
                incomT += (+items.mony)

            }
        })
    }

    let sub = incomT - expenseT;

    return (
        <div className='min-h-[900px] '>
            <div className="w-full  flex justify-between p-5">
                <p className="text-white text-2xl">Analytic</p>
                <span >
                    <img src={require('../img/swt.png')} alt="" />

                </span>
            </div>
            <div className=' pr-5'>
                <Dlg />

            </div>

            <div className=" bg-gray-800 ml-5  mr-5 rounded-xl pt-3 pr-5 mt-5   ">
                <div>
                    <p className="text-white font-bold font-mono ml-5 font-sans">Cash Flow</p>

                    <div className=" ml-5 flex justify-between pr-5 mt-5 w-full">
                        <span className="flex items-end">
                            <img className="w-[18px] h-[18px] mb-1" src={require('../img/au3.png')} alt="" />
                            <span className=" text-white ml-2 text-lg antialiased">
                                Income
                            </span>
                        </span>
                        <span className="justify-self-end text-green color font-medium ">{incomT}.00 PKR</span>
                    </div>
                    <div className=" ml-5 flex justify-between pr-5 mt-1 w-full">
                        <span className="flex items-end">
                            <img className="w-[18px] h-[18px] mb-1" src={require('../img/red.png')} alt="" />
                            <span className=" text-white ml-2 text-lg antialiased">
                                Expenses
                            </span>
                        </span>
                        <span className="justify-self-end text-green rColor font-medium ">{expenseT}.00 PKR</span>

                    </div>

                </div>

                <div className="ml-5 mt-2 h-[1px] bg-gray-500 ">

                </div>

                <div className=" ml-5 pb-2 flex justify-between pr-5 mt-1 w-full">
                    <span className="flex items-end">

                        <span className=" text-white ml-2 text-lg antialiased">
                            Total:
                        </span>
                    </span>
                    <span className="justify-self-end text-green color font-medium ">{sub}.00 PKR</span>

                </div>
            </div>


            <div className=" bg-gray-800 ml-5 mr-5 rounded-xl pt-3 pr-5 mt-5 pb-4 ">
                <div>
                    <p className="text-white font-bold font-mono ml-5 text-xl ">Average</p>

                    <div className=" ml-5 flex justify-between pr-5 mt-5 w-full">
                        <span className="flex items-end">

                            <span className=" text-white ml-2 text-base antialiased">
                                Daily
                            </span>
                        </span>
                        <span>
                            <span className="justify-self-end text-green text-sm mr-5 color font-medium ">{avgDA}.00 PKR</span>
                            <span className="justify-self-end text-green text-sm  rColor font-medium ">{avgDAE}.00 PKR</span>
                        </span>
                    </div>
                    <div className=" ml-5 flex justify-between pr-5 mt-1 w-full">
                        <span className="flex items-end">

                            <span className=" text-white ml-2 text-base antialiased">
                                Today
                            </span>
                        </span>
                        <span>
                            <span className="justify-self-end text-green text-sm mr-5 color font-medium ">{avgWA}.00 PKR</span>
                            <span className="justify-self-end text-green text-sm  rColor font-medium ">{avgWAE}.00 PKR</span>
                        </span>
                    </div>

                    <div className=" ml-5 flex justify-between pr-5  mt-1 w-full">
                        <span className="flex items-end">

                            <span className=" text-white ml-2 text-base antialiased">
                                Month
                            </span>
                        </span>
                        <span>
                            <span className="justify-self-end text-green text-sm mr-5 color font-medium ">{avgMA}.00 PKR</span>
                            <span className="justify-self-end text-green text-sm  rColor font-medium ">{avgMAE}.00 PKR</span>
                        </span>
                    </div>

                </div>




            </div>
        </div>
    )
}

export default Ana