import React from 'react'
import { useContext } from 'react'
import { contextuse } from '../Contextrole/context';
import { PiCardsThreeFill } from "react-icons/pi";
import { NavLink } from 'react-router-dom';
let yogas = [
    {
        id: 1,
        yoganame: "https://i.gifer.com/origin/d6/d63b4cfa1b8c65f1544a61bdb02ff6a6_w200.webp",
        yoganameS: "STAND AND SIT"


    },
    {
        id: 2,
        yoganame: "https://i.gifer.com/origin/6b/6b6d9b8a116c2ca906a824ae9e103602_w200.webp",
        yoganameS: "LEG SKIPPING"

    },
    {
        id: 3,
        yoganame: "https://i.gifer.com/origin/f8/f8c667efd46c4ca66fe281c3792eb329_w200.webp",
        yoganameS: "SKY CYCLE"

    },
    {
        id: 4,
        yoganame: "https://i.gifer.com/origin/76/76b09a2d854372b90b2258c24c5eb000_w200.webp",
        yoganameS: "HANDLE TURN"

    },
    {
        id: 5,
        yoganame: "https://i.gifer.com/origin/e4/e4c99b05e1b9c10d9addd31af5ffc981_w200.webp",
        yoganameS: " PUSH-UP"

    },
]
function Exer() {
    const datecontext = useContext(contextuse);
    return (
        <div className='dayshere ' style={{ fontFamily: "Roboto Mono, monospace" }}>
            <div className='w-full md:h-[80%] h-[300px] flex items-center justify-center relative'>
                <img src="https://www.bosshunting.com.au/wp-content/uploads/2022/10/Best-Chest-Exercises-for-men.jpg" alt="bodyuilder" className=' h-full opacity-[0.5]' />
                <h1 className='absolute text-8xl font-bold opacity-[0.7]'>Day {datecontext.DAY}</h1>
            </div>
            {/* down section */}
            <div className='parentyoga_holder text-[#00ffcc] flex item-center justify-evenly flex-col mt-[30px]'>
                <NavLink to='/Pratice1' className="text-[#fff]">
                    <button className='flex w-[100%] h-[40px] items-center justify-center rounded-lg bg-[#00ffcc]  text-3xl'>START</button>
                </NavLink>
                {
                    yogas.map((c) => {
                        return (
                            <div className='childsyoga_holder w-full h-[150px]  flex items-center gap-[15px] justify-evenly mt-[30px] '>
                                <PiCardsThreeFill className='text-[30px] ml-[10px] text-[#00ffcc]' />
                                <img src={c.yoganame} alt="exer1" className=' h-full border-t-[1px] border-b-[1px] border-[#7c73e6] border-solid ' />
                                <div className='content_name flex items-center justify-center flex-col h-full w-[340px]  border-t-[1px] border-b-[1px] border-[#7c73e6] border-solid text-center'>
                                    <h1 className='text-[25px] font-bold'>{c.yoganameS}</h1>
                                    <h1 className='text-[20px]'>30:00</h1>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Exer