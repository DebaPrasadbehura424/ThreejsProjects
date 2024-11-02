import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

let gymoptions =
    [
        {
            id: 1,
            url: "https://us.images.westend61.de/0001573992j/female-yoga-teacher-with-eyes-closed-meditating-at-health-club-OCAF00662.jpg",
            navigate: "",
            alname: "yoga",
            tagname: "YOGA wow",
            drop: " 😀 It is a pritice that connects the body,breath and mid.It  uses physical postures,breathing exercises, and meditation to improve overall health.Yoga was developed as a spiritual pratice thousands of years ago.Today most Westners who do yoga do it for exercises and reduce stress."

        },
        {
            id: 2,
            url: "https://www.dmoose.com/cdn/shop/articles/Feature-img.jpg?v=1686318911",
            navigate: "/shoulder",
            alname: "shoulder",
            tagname: "SHOULDERS",
            drop: "😆 Shoulder strength training can reduce your risk of injury by strengthening your core muscles,which makes you more stable and lessens imbalances.Good technique is always key, to healty life."
        },
        {
            id: 3,
            url: "https://c4.wallpaperflare.com/wallpaper/951/825/204/abs-belly-body-dumbbells-wallpaper-preview.jpg",
            navigate: "/chest",
            alname: "BELLY DAY",
            tagname: "BELLY DAY ",
            drop: "😉 Chest exercises are important way to build upper body strength strengthening the muscles making up the chest can help you achiecve a strong."
        },
        {
            id: 4,
            url: "https://www.health.com/thmb/9HSNNzZzDBNhhE4hHjg1kqUsDNA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1468493810-d363ad90686540b7949b9d46d97198fb.jpg",
            navigate: "/leg",
            alname: "leg",
            tagname: " LEG DAY ",
            drop: " 🤗 Exercises of leg makes you speedier in the track and speeds up your metabolism. To summaarize, the leg exercises benefits are : Maintains good body symmetry. Prevents osteoporsis and maintains good health."
        },
        {
            id: 5,
            url: "https://www.rachaelattard.com/wp-content/uploads/2019/07/how-to-lose-belly-fat-in-10-days-ab-workouts.jpg",
            navigate: "/back",
            alname: "back",
            tagname: "BACK EX",
            drop: " 🤩 Back exercises boost flexibility and range of motion . When we focus on making our backs work as effectively as possible,we're ensuring that careful movement we make iss careful mivement that allows our muscles to move naturallly without restriction."
        },
        {
            id: 6,
            url: "https://skinnyms.com/wp-content/uploads/2018/03/12-Best-At-Home-Workout-Plans-for-Women.jpg",
            navigate: "/belly",
            alname: "belly",
            tagname: "Ready for abs(Belly).",
            drop: "😮‍💨😮‍💨 Exercising your abdominal muscles will strengtehn them.However twisting ,Curunching and side bending will not make your abdominal muscles visible if thay are covered by a thick layer of fat"
        },
        {
            id: 7,
            url: "https://img.livestrong.com/375/clsd/getty/79ff08cce6df4392808ff3d254a13ad1",
            navigate: "/food",
            alname: "healthy body",
            tagname: "WEIGHT LOSS(FOOD)",
            drop: " 🥚🥚Food is any substance consumed to provide nutritional support and energy to an organsim.It can be raw processes ,or formulated and is consumed orally by animals for growth , health and pleasure.Food is mainly composed of water ,lipids,protiens ,and carbohydrates."
        },


    ]
function Femalelist() {
    const [down, setDown] = useState(null);
    return (
        <div className='malescrollhide z-[-1] overflow-scroll w-full  h-[500px]'>
            <div className='w-[100%]  h-[1000px] flex justify-evenly items-center flex-col gap-[20px]'>
                {
                    gymoptions.map((op) => {
                        return (
                            <>
                                <div className='parent_box w-[80%]  flex    mt-[20px]' onMouseEnter={() => setDown(op.id)}>
                                    <img src={op.url} alt={op.alname} className=' boxes  h-[120px] md:-[140px]  ' />
                                    <div className='w-full flex items-center justify-center flex-col gap-[1px]'>
                                        <p className=' text-[13px] text-center p-[10px] font-bold  '>{op.tagname}</p>
                                        <NavLink to={op.navigate}>
                                            <button className='w-[80px] md:w-[100px] h-[40px] rounded-lg 
                                             text-[#fff]  text-[15px] '>Enter</button>
                                        </NavLink>
                                    </div>
                                </div>
                                {
                                    down == op.id ?
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

export default Femalelist