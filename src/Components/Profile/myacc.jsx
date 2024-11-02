import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from './sidebar';
import Cardsshow from './Cardsshow';
import { GiEmbrassedEnergy } from "react-icons/gi";
import { FaArrowsToDot } from "react-icons/fa6";
import { GiRollingEnergy } from "react-icons/gi";
import Extra from './Extra';

function Myacc() {
  const [side, setSide] = useState(-120);
  console.log(side);
  return (
   

    <div className='w-full realtive'  >
      <div className='w-full h-[70px] bg-[#0D6EFD] flex items-center p-[10px]  justify-between '>
        <GiHamburgerMenu className='text-[40px] text-[#fff] cursor-pointer' onClick={() => setSide(prev => prev == 10 ? -120 : 10)} />
        <div className='w-[50px] h-[50px] bg-[#e9e9e9] rounded-full flex item-center '>
          <img src="https://i.redd.it/male-random-selfie-27m-v0-s6bd3ohvwx4c1.jpg?width=2208&format=pjpg&auto=webp&s=fee39976344658358256e1679cf8bfe5eff65159" alt="profile_pic" className='rounded-full w-full h-full' />
        </div>
      </div>
      <Sidebar side={side} />
      <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-[10px]  w-full' >
        <Cardsshow topx={"Calories Burned"} energy={"12000.00"} percen={"+10%"} doen={"Total Calories burned today"} icons={<GiEmbrassedEnergy />} kcal={"kcal"} />
        <Cardsshow topx={"Workouts"} energy={"5.0"} percen={"+10%"} doen={"Total no of workouts today"} icons={<FaArrowsToDot />} />
        <Cardsshow topx={"Average calories Burned"} energy={"1800.00"} percen={"+10%"} doen={"Calories count each workout"} icons={<GiRollingEnergy />} kcal={"kcal"} />
      </div>
      <Extra />

    </div>

  )
}

export default Myacc