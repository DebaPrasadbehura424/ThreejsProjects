import React, { useState } from 'react';
let yogass = [
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



function LastExer() {
    const [run, setRun] = useState(0);
    const [time, setTime] = useState(50);
    setTimeout(timecon, 50000);
    function timecon() {
        setRun(run === 4 ? 4 : run + 1);
    }
    setTimeout(() => {
        setTime(time == 0 ? 50 : time - 1);
    }, 1000)
    return (
        <div className='w-full h-screen flex  justify-center '>
            {
                yogass.map((x, index) => {
                    return (
                        run == index ?
                            <div className='w-full h-screen flex items-center justify-evenly flex-col'>
                                <div className='font-[100px] font-bold text-[#00ffcc]'><h1>00:30Sec :-WORKOUT & 00:20Sec:-REST</h1></div>
                                <div className=' redimage w-[90%] h-[60%]  md:w-[40%] md:h-[70%] bg-[#0f0] mt-[20px] md:mt-[50px] flex items-center justify-center overflow-hidden'>
                                    <img src={x.yoganame} alt="yoga" className=' w-[90%] rounded-lg opacity-[0.8]' />
                                </div>
                                <h1 className='flex items-center gap-[15px] text-[25px] font-bold'>
                                    {x.yoganameS}
                                </h1>
                                <div className='text-5xl font-bold'>00:{time < 10 ? 0 : null}{time}</div>
                            </div>
                            : null
                    )
                })
            }
        </div>
        // <></>
    )
}

export default LastExer;