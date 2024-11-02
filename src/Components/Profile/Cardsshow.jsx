import React from 'react'
// import { MdEnergySavingsLeaf } from "react-icons/md";
function Cardsshow({ topx, energy, percen, doen, icons, kcal }) {
    return (

            <div className='flex items-center justify-evenly w-[350px] md:w-[400px] h-[200px] shadow-lg shadow-[#000] rounded-lg   mt-[20px] place-self-center'>
                <div className='text-justify ]' style={{ lineHeight: "30px" }}>
                    <h1 className='text-[#0D6EFD] text-[20px]'>{topx}</h1>
                    <h2>{energy} <span className='text-[20px]'>{kcal}</span> <span className='text-[20px] text-[#00ffcc]'>{percen}</span></h2>
                    <p className='text-[#000] opacity-[0.6]'>{doen}</p>
                </div>
                <div className='shadow-[0px_0px_1px_5px] shadow-[#00ffcc] w-[40px] h-[50px] flex items-center justify-center rounded-full text-[#00ffcc] text-[20px]'>
                    {icons}
                </div>
            </div>
    )
}

export default Cardsshow