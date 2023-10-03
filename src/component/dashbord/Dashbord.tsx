import React, { useEffect, useState } from "react";
import BarComp from "../lineChart/LineChrt";
import Dash from "../chaart/Chaart";
import PieCh from "../pieChart/PieCharte";
import BarCompp from "../chartjs/Cahrtjs";
import Bott from "../botD/BotD";
import Ocr from "../ocr/Ocr";
import Audio from "../audio/Audio";
import { updateExpressionWithTypeArguments } from "typescript";

const Dashbordd = () => {


    const getLocalItems = () => {
        let list = localStorage.getItem('lists');

        if (list) {
            return JSON.parse(list);
        }
        return [];
    };



    const [items, setItems] = useState(getLocalItems());

    const [itm, setItm] = useState(getLocalItems())



    const result = itm.reduce((acc: any, item: any) => {
        const { time, mony, name } = item;
        const date = new Date(time).toISOString().split('T')[0];
        const key = `${date}-${name}`;
        if (key in acc) {
            acc[key] += +mony;
        } else {
            acc[key] = +mony;
        }
        return acc;
    }, {});

    const summedDataArray = Object.entries(result).map(([key, mony]) => {
        const [date, name] = key.split('-');
        const item = items.find((item: any) => new Date(item.time).toISOString().split('T')[0] === date && item.name === name);
        return { ...item, mony, name };
    });


    const getLocalExpA = () => {
        let expA = localStorage.getItem('exp');
        console.log("expppp", expA)
        if (expA) {
            return JSON.parse(expA);
        }
        return [];
    };

    const getLocalExpH = () => {
        let expH = localStorage.getItem('expH');
        
        if (expH) {
            return JSON.parse(expH);
        }
        return [];
    };

    const getLocalExpF = () => {
        let expF = localStorage.getItem('expF');
       
        if (expF) {
            return JSON.parse(expF);
        }
        return [];
    };

    
    const getLocalExpS = () => {
        let expS = localStorage.getItem('expS');
       
        if (expS) {
            return JSON.parse(expS);
        }
        return [];
    };



    const getLocalExpB = () => {
        let expB = localStorage.getItem('expB');
       
        if (expB) {
            return JSON.parse(expB);
        }
        return [];
    };



    const [expA, setExpA] = useState(getLocalExpA())
    const [expH, setExpH] = useState(getLocalExpH())
    const [expF, setExpF] = useState(getLocalExpF())
    const [expS, setExpS] = useState(getLocalExpS())
    const [expB, setExpB] = useState(getLocalExpB())

    let hM = '0'



    console.log("summ", summedDataArray)

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
        <div className="min-h-[900px] pb-[100px] " >
            <div className="w-full flex justify-between  p-5">
                <p className="text-white text-2xl tracking-wide">Dashbord</p>
                <span className='flex'>
               <span className="mr-5">
                <Audio/>
               </span>
                    <span className="mr-5">
                        <Ocr />
                    </span>
                    <span >
                        <Bott />
                    </span>
                </span>
            </div>
            <div className=" bg-gray-900 mt-5 ml-5 mr-5 rounded-xl pl-2 pt-3 pr-5  ">
                <div>
                    <p className="text-white font-bold  ml-5 subpixel-antialiased tracking-widest ">Total Balance</p>
                    <p className="text-slate-100 slashed-zero font-light font-mono ml-5 tracking-wider ">{sub}.00 PKR</p>
                    <BarComp />




                </div>

            </div>
            <div className=" bg-gray-900 ml-5 mr-5 rounded-xl pt-3 pr-5 mt-5  ">
                <div>
                    <p className="text-white font-bold font-mono ml-5 antialiased  ">Cash Flow</p>

                    <div className=" ml-5 flex justify-between pr-5 mt-5 w-full">
                        <span className="flex items-end">
                            <img className="w-[18px] h-[18px] mb-1" src={require('../img/au3.png')} alt="" />
                            <span className=" text-white ml-2 text-lg antialiased">
                                Income
                            </span>
                        </span>
                        <span className="justify-self-end text-green color font-medium tracking-wide ">{incomT}.00 PKR</span>
                    </div>
                    <div className=" ml-5 flex justify-between pr-5 mt-1 w-full">
                        <span className="flex items-end">
                            <img className="w-[18px] h-[18px] mb-1" src={require('../img/red.png')} alt="" />
                            <span className=" text-white ml-2 text-lg antialiased">
                                Expenses
                            </span>
                        </span>
                        <span className="justify-self-end text-green rColor font-medium tracking-wide ">{expenseT}.00 PKR</span>

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
                    <span className="justify-self-end text-green color font-medium tracking-wide ">{sub}.00 PKR</span>

                </div>
            </div>

            <div className=" bg-gray-900 ml-5 mr-5  rounded-xl pt-3 pr-5 mt-5  ">
                <div>
                    <p className="text-white font-bold  ml-5 font-sans">Catagories</p>
                    <div className=" flex  ">

                        <div className="w-200 h-200">
                            <PieCh />
                        </div>

                        <div className=" w-full ml-3 ">

                            <div className="flex items-center justify-between mt-2 mb-2 ">
                                <span className="flex">

                                    <span className=" w-[20px] h-[20px] colorH rounded-full flex justify-center items-center">    <img className="w-[15px] h-[15px]  rounded-full" src={require('../img/hou.png')} alt="" /> </span>
                                    <span className="justify-self-end text-green text-white ml-2 font-medium text-sm ">Housing</span>
                                </span>
                                <span className="justify-self-end  rColor font-medium ">  {expH}.00 PKR</span>
                            </div>


                            <div className="flex items-center justify-between mt-2 mb-2 ">
                                <span className="flex">
                                    <span className=" w-[20px] h-[20px] colorL rounded-full flex justify-center items-center">    <img className="w-[15px] h-[15px]  rounded-full" src={require('../img/star.png')} alt="" /> </span>
                                    <span className="justify-self-end text-green text-white ml-2 font-medium text-sm ">Life style</span>
                                </span>
                                <span className="justify-self-end text-green rColor font-medium ">{expF}.00 PKR</span>
                            </div>


                            <div className="flex items-center justify-between mt-2 mb-2 ">
                                <span className="flex">
                                    <span className=" w-[20px] h-[20px] colorP rounded-full flex justify-center items-center">    <img className="w-[15px] h-[15px]  rounded-full" src={require('../img/bag.png')} alt="" /> </span>
                                    <span className="justify-self-end  text-white ml-2 font-medium text-sm ">Shoping</span>
                                </span>
                                <span className="justify-self-end  rColor font-medium "> {expS}.00 PKR</span>
                            </div>


                            <div className="flex items-center justify-between mt-2 mb-2 ">
                                <span className="flex">
                                    <span className=" w-[20px] h-[20px] colorB rounded-full flex justify-center items-center">    <img className="w-[15px] h-[15px]  rounded-full" src={require('../img/bill.png')} alt="" /> </span>
                                    <span className="justify-self-end text-green text-white ml-2 font-medium text-sm ">Bills</span>
                                </span>
                                <span className="justify-self-end text-green rColor font-medium "> {expB}.00 PKR</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}


export default Dashbordd;



// {expA[0].mony}  
// {expA[1].mony}
//{expA[2].mony}
//{expA[3].mony}