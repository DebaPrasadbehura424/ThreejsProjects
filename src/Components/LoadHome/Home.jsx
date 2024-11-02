import React, { useState } from 'react';
import Malelist from './Malelist';
import Optionbar from './optionbar';
import Femalelist from './Femalelist';
function Home() {
    const [gender, setGender] = useState(true);

    return (
        <div style={{ fontFamily: "Poppins,sans-serif" }}>
            <div className='genderbox  w-full h-[200px]  p-[10px]'>
                <h1 className='text-4xl text-center text-[#fff]'>What's up Buddy ?</h1>
                <div className='w-full flex items-center justify-evenly mt-[30px] gap-[10px]'>
                    <button className='w-[150px] h-[40px] rounded-lg bg-[#fff] text-[#000]' onClick={() => setGender(true)}>MALE</button>
                    <button className='w-[150px] h-[40px] rounded-lg bg-[#fff] text-[#000]' onClick={() => setGender(false)}>FEMALE</button>
                </div>
            </div>
            {
                gender == true ?
                    <Malelist/>
                    :
                    <Femalelist/>
            }
            <Optionbar />
        </div>
    )
}

export default Home