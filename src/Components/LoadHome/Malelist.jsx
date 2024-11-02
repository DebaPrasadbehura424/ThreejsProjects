import React from 'react'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { contextuse } from '../Contextrole/context';

let gymoptions =
    [
        {
            id: 1,
            url: "https://media.istockphoto.com/id/612650676/photo/young-man-exercising-yoga.jpg?s=612x612&w=0&k=20&c=2etPhlHi_6hYN7xkrdRlpPx2scZpBIj3PM_kO4v9-zU=",

            alname: "yoga",
            tagname: "YOGA",
            drop: " 😀 It is a pritice that connects the body,breath and mid.It  uses physical postures,breathing exercises, and meditation to improve overall health.Yoga was developed as a spiritual pratice thousands of years ago.Today most Westners who do yoga do it for exercises and reduce stress."

        },
        {
            id: 2,
            url: "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=300",

            alname: "shoulder",
            tagname: "SHOULDERS",
            drop: "😆 Shoulder strength training can reduce your risk of injury by strengthening your core muscles,which makes you more stable and lessens imbalances.Good technique is always key, to healty life."
        },
        {
            id: 3,
            url: "https://images.pexels.com/photos/3837788/pexels-photo-3837788.jpeg?auto=compress&cs=tinysrgb&w=300",

            alname: "CHEST DAY",
            tagname: "CHEST DAY ",
            drop: "😉 Chest exercises are important way to build upper body strength strengthening the muscles making up the chest can help you achiecve a strong."
        },
        {
            id: 4,
            url: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=300",

            alname: "leg",
            tagname: " LEG DAY ",
            drop: " 🤗 Exercises of leg makes you speedier in the track and speeds up your metabolism. To summaarize, the leg exercises benefits are : Maintains good body symmetry. Prevents osteoporsis and maintains good health."
        },
        {
            id: 5,
            url: "https://images.pexels.com/photos/4720794/pexels-photo-4720794.jpeg?auto=compress&cs=tinysrgb&w=300",
            navigate: "/back",
            alname: "back",
            tagname: "BACK EX",
            drop: " 🤩 Back exercises boost flexibility and range of motion . When we focus on making our backs work as effectively as possible,we're ensuring that careful movement we make iss careful mivement that allows our muscles to move naturallly without restriction."
        },
        {
            id: 6,
            url: "https://images.pexels.com/photos/5327535/pexels-photo-5327535.jpeg?auto=compress&cs=tinysrgb&w=300",

            alname: "belly",
            tagname: "Ready for abs(Belly).",
            drop: "😮‍💨😮‍💨 Exercising your abdominal muscles will strengtehn them.However twisting ,Curunching and side bending will not make your abdominal muscles visible if thay are covered by a thick layer of fat"
        },
        {
            id: 7,
            url: "https://images.pexels.com/photos/4325466/pexels-photo-4325466.jpeg?auto=compress&cs=tinysrgb&w=300",

            alname: "healthy body",
            tagname: "WEIGHT LOSS(FOOD)",
            drop: " 🥚🥚Food is any substance consumed to provide nutritional support and energy to an organsim.It can be raw processes ,or formulated and is consumed orally by animals for growth , health and pleasure.Food is mainly composed of water ,lipids,protiens ,and carbohydrates."
        },


    ]


function Malelist() {
    const conmake = useContext(contextuse);
    return (
        <div className='malescrollhide z-[-1] overflow-scroll w-full  h-[500px]'>
            <div className='w-[100%]  h-[1000px] flex justify-evenly items-center flex-col gap-[20px]'>
                {
                    gymoptions.map((op, index) => {
                        return (
                            <>
                                <div className='parent_box w-[80%]  flex    mt-[20px]' onMouseEnter={() => conmake.setDown(op.id)}>
                                    <img src={op.url} alt={op.alname} className=' boxes  h-[120px] md:-[140px]  ' />
                                    <div className='w-full flex items-center justify-center flex-col gap-[1px]'>
                                        <p className=' text-[13px] text-center p-[10px] font-bold  '>{op.tagname}</p>
                                        <NavLink to="/yoga">
                                            <button className='w-[80px] md:w-[100px] h-[40px] rounded-lg 
                                             text-[#fff]  text-[15px] ' onClick={() => conmake.setUrl(index+1== op.id ? op.url : null)}>Enter</button>
                                        </NavLink>
                                    </div>
                                </div>
                                {
                                    conmake.down == op.id ?
                                        < div className=' dropbox w-[80%] h-[150px]  p-[5px] text-white text-center '>{op.drop}</div >
                                        : null
                                }
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Malelist