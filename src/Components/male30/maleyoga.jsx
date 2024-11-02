import React, { useState } from 'react';
import { AiFillThunderbolt } from "react-icons/ai";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import { SiTicktick } from "react-icons/si";
import { MdOutlinePendingActions } from "react-icons/md";
import { NavLink } from 'react-router-dom';

import { useContext } from 'react';
import { contextuse } from '../Contextrole/context';


let days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

function Maleyoga() {
    const usemale = useContext(contextuse);
    return (
        <div>
            <div className='w-full h-[70px]  flex items-center justify-between md:justify-between ' style={{ fontFamily: "Ubuntu, sans-serif" }}>
                <h1 className='font-bold text-[30px] p-[20px] w-[400px] '>MY PLAN</h1>
                <HiMiniAdjustmentsHorizontal className='text-[30px] mr-[20px]' />
            </div>
            <div className='w-full flex items-center justify-center mt-[20px] relative '>
                <img src={usemale.url} alt="yogaphoto" className='rounded-lg md:w-[50%] opacity-[0.8]' />
                <div className='absolute  text-center text-3xl font-bold '>
                    <h1 className='text-[#00ffcc]'>ACHIVE PEACE IN 30 DAYS</h1>
                    <h1 >BOOST YOUR MIND</h1>
                    <div className='w-full flex mt-[10px] items-center justify-center'>
                        <AiFillThunderbolt className='text-[#00ffcc]' />
                        <AiFillThunderbolt />
                        <AiFillThunderbolt className='text-[#00ffcc]' />
                        <AiFillThunderbolt />
                        <AiFillThunderbolt className='text-[#00ffcc]' />
                    </div>
                </div>
            </div>
            {
                days.map((x, index) => {
                    return (
                        <div className='w-full flex items-center justify-center mt-[40px] relative'>
                            <div className='w-[90%] h-[90px] bg-[#00ffcc] rounded-[20px] flex items-center'>
                                <h1 className='text-[33px] p-[20px] text-[#fff] font-bold'>Day {x}</h1>

                                {
                                    usemale.DAY == index ?
                                        <button className='daybut absolute right-[10%] text-[#00ffcc] font-bold text-[27px]  w-[120px] h-[45px] bg-[#fff] rounded-[20px] text-center ' onClick={() => usemale.setDay(day => day + 1)}>
                                            <NavLink to='/excercise1' className="text-[#00ffcc] ">
                                                Start
                                            </NavLink>
                                        </button>

                                        : usemale.DAY - 1 >= index ?
                                            <span className='absolute right-[15%] flex items-center gap-[10px]'>
                                                <p className='text-[#fff]'>Completed</p><SiTicktick className=' text-[#fff] mb-[10px]' />
                                            </span>
                                            :
                                            <span className='absolute right-[15%] flex items-center gap-[5px]'>
                                                <p className='text-[#fff] text-[20px]'>Wait . . .</p>
                                                <MdOutlinePendingActions className=' text-[#fff] rounded-[5px] text-[25px] mb-[20px]' />
                                            </span>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Maleyoga