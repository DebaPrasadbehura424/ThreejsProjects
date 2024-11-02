import React from 'react'
import { GiGymBag } from "react-icons/gi";
import { FiSend } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { FaShoppingCart } from "react-icons/fa";
import { TbSquareRoundedPlusFilled } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
function Optionbar() {
    return (
        <div className='optiontake  w-full h-[50px] bg-[#dee1ec] absolute bottom-[0%] z-2 flex items-center justify-evenly'>
            <NavLink to='/home'>
                <GiGymBag className='text-[30px] cursor-pointer text-[#1e1e1e] ' />
            </NavLink>
            <NavLink to='/post'>
                <FiSend className='text-[30px] cursor-pointer text-[#1e1e1e]' />
            </NavLink>
            <NavLink to='/mypost'>
                <TbSquareRoundedPlusFilled className=' text-[#1e1e1e] text-[50px] mb-[25px] rounded-[10px] cursor-pointer' />
            </NavLink>
            <NavLink to='/shop'>
                <FaShoppingCart className='text-[30px] cursor-pointer text-[#1e1e1e]' />
            </NavLink>
            <NavLink to='/myacc'>
                <VscAccount className='text-[30px] cursor-pointer text-[#1e1e1e]' />
            </NavLink>
        </div>
    )
}

export default Optionbar;