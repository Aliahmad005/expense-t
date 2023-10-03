import React from 'react'
import PieS from '../peiS/PieS';
import { Line, Circle } from 'rc-progress';
import ProgressBar from "@ramonak/react-progress-bar";
import PieCh from "../pieChart/PieCharte";


const Cat = () => {
    interface ProgressBarProps {
        width: string;
    }

    return (
        <div className='min-h-[900px] '>
            <div className="w-full flex justify-between p-5">
                <p className="text-white text-2xl">Categories ki</p>
                <span >
                    <img src={require('../img/swt.png')} alt="" />

                </span>
            </div>
            <div className='flex  justify-center pt-5'>
                <PieS />
            </div>
            <div>

                <div className='pl-5 pr-5 flex w-full'>
                    <span>
                        <span className=" w-[40px] h-[40px] colorH  rounded-full flex justify-center items-center">    <img className="w-[20px] h-[20px]  rounded-full" src={require('../img/hou.png')} alt="" /> </span>
                    </span>

                    <span className='w-full ml-3 '>
                        <div className='w-full flex justify-between'>
                            <span className='text-white text-lg'>Homes</span>
                            <span className="justify-self-end text-green rColor tracking-wider text-lg "> 565.00 PKR</span>
                        </div>

                        <div className='w-full ' h-50px >

                            <div className="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700">

                                <div className="colorH h-2.5 rounded-full w-1/2" ></div>
                            </div>


                        </div>

                    </span>
                </div>



                <div className='pl-5 pr-5 mt-8 flex w-full'>
                    <span>
                        <span className=" w-[40px] h-[40px] colorL rounded-full flex justify-center items-center">    <img className="w-[20px] h-[20px]  rounded-full" src={require('../img/star.png')} alt="" /> </span>
                    </span>

                    <span className='w-full ml-3 '>
                        <div className='w-full flex justify-between'>
                            <span className='text-white text-lg'>Life Style</span>
                            <span className="justify-self-end text-green rColor tracking-wider text-lg "> 565.00 PKR</span>
                        </div>

                        <div className='w-full ' h-50px >

                            <div className="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700">

                                <div className="colorL h-2.5 rounded-full w-1/2" ></div>
                            </div>


                        </div>

                    </span>
                </div>





                <div className='pl-5 pr-5 mt-8 flex w-full'>
                    <span>
                        <span className=" w-[40px] h-[40px] colorP rounded-full flex justify-center items-center">    <img className="w-[20px] h-[20px]  rounded-full" src={require('../img/bag.png')} alt="" /> </span>
                    </span>

                    <span className='w-full ml-3 '>
                        <div className='w-full flex justify-between'>
                            <span className='text-white text-lg'>Life Style</span>
                            <span className="justify-self-end text-green rColor tracking-wider text-lg "> 565.00 PKR</span>
                        </div>

                        <div className='w-full ' h-50px >

                            <div className="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700">

                                <div className="colorP h-2.5 rounded-full w-1/2" ></div>
                            </div>


                        </div>

                    </span>
                </div>


                <div className='pl-5 pr-5 mb-[50px] mt-8 flex w-full'>
                    <span>
                        <span className=" w-[40px] h-[40px] colorB rounded-full flex justify-center items-center">    <img className="w-[20px] h-[20px]  rounded-full" src={require('../img/bill.png')} alt="" /> </span>
                    </span>

                    <span className='w-full ml-3 '>
                        <div className='w-full flex justify-between'>
                            <span className='text-white text-lg'>Bills</span>
                            <span className="justify-self-end text-green rColor tracking-wider text-lg "> 565.00 PKR</span>
                        </div>

                        <div className='w-full ' h-50px >

                            <div className="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700">

                                <div className="colorB h-2.5 rounded-full w-1/2" ></div>
                            </div>


                        </div>

                    </span>
                </div>
            </div>
         
        </div>
    )
}

export default Cat;