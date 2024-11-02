import React from 'react'
function Mypost() {
    return (
        <div className='upload  flex items-center justify-center flex-col gap-[20px] ' style={{ fontFamily: "Poppins,sans-serif " }}>
            <div className='hero'>
                <div>Title:</div>
                <input type="text" placeholder='Add title' className='w-[290px] h-[80px] outline-none bg-transparent rounded-lg ' />
            </div>
            <div className='hero'>
                <div>Description:</div>
                <input type="text" placeholder='Add description' className='w-[290px] h-[80px]  outline-none  bg-transparent rounded-lg' />
            </div>
            <div className='hero'>
                <div>Add Photo:</div>
                <input type="file"  accept="image/*" className='w-[300px] h-[80px] ml-[80px] ' />
            </div>
            <div className='hero'>
                <div>Add Vedio:</div>
                <input type="file"  accept="vedio/*"  className='w-[300px] h-[80px] ml-[80px]' />
            </div>

            <button className= 'upload_button  w-[200px] h-[40px]  rounded-lg text-[#fff]'>UPLOAD</button>



        </div>
    )
}

export default Mypost;