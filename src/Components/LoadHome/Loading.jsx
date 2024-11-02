import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
window.addEventListener('load', () => {
  let lord = document.getElementById('sload');
  lord.classList.add('solder_active');

})



function Loading() {
  const [butshow, setButshow] = useState(0);
  setTimeout(() => {
    setButshow(1);
  }, 5000);
  return (
    <div className='main_loader'>
      <h1 className='text-7xl text-[#fff] font-bold text-center' >Make Body In  30 Days</h1>
      <p className='text-center text-[#fff]  text-[20px] '>Loading . . .</p>
      <div className='w-[300px] h-[45px]  flex items-center justify-center rounded-full overflow-hidden  '>
        <div className=' sloader w-[300px] h-[45px] bg-[#007BFF]  rounded-[30px]  ' id='sload'>
        </div>
      </div>
      <NavLink to="/home">
        <button className='w-[100px] h-[35px] bg-[#4d12ee] rounded-[20px] font-bold text-[#fff] ' style={{ opacity: `${butshow}` }}>START</button>
      </NavLink>
    </div>
  )
}

export default Loading