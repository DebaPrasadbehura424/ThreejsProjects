import React, { useState } from 'react'

function Extra() {
    const [pet, setPet] = useState([]);
    function handleworks() {
        let works = document.getElementById('inputValue').value;
        if (works == " ") {
            setPet([...pet, "🤔 empty 🥚"])
        } else {
            setPet([...pet, works]);

        }
        document.getElementById('inputValue').value = " ";
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-3  gap-[10px]  w-full h-[70vh]  mt-[50px]  ' style={{ fontFamily: "Poppins,sans-serif" }}>
            <img src="https://mathbooks.unl.edu/Contemporary/images/class-interval-histo.png" alt="bar" className='w-[280px] md:w-[370px]  place-self-center shadow-md shadow-[#000] md:mt-[60px]' />
            <div className='flex items-center justify-center flex-col'>
                <p className='text-[#00ffcc] text-[25px]'>Workout Categories</p>
                <div className='flex items-center justify-evenly  place-self-center shadow-md shadow-[#000] md:w-[450px] w-[380px]'>
                    <svg width="250" height="250" viewBox="0 0 435 400" fill="none" xmlns="http://www.w3.org/2000/svg" className='rounded-full  place-self-center md:w-[250px] w-[200px]' >
                        <rect width="435" height="400" fill="#ffffff" />
                        <g id="Desktop - 1">
                            <g clip-path="url(#clip0_0_1)">
                                <rect width="435" height="400" rx="200" fill="white" />
                                <g id="Group 1">
                                    <g id="green" className='cursor-pointer'>
                                        <mask id="path-2-inside-1_0_1" fill="white">
                                            <path d="M383.659 69.8294C404.224 91.8125 419.185 117.596 427.488 145.36C435.79 173.125 437.231 202.193 431.709 230.514C426.187 258.836 413.836 285.719 395.528 309.268C377.221 332.817 353.402 352.457 325.754 366.802L250.542 249.025C259.07 244.601 266.416 238.543 272.063 231.28C277.709 224.017 281.518 215.726 283.222 206.991C284.925 198.256 284.48 189.291 281.92 180.727C279.359 172.164 274.744 164.212 268.402 157.432L383.659 69.8294Z" />
                                        </mask>
                                        <path d="M383.659 69.8294C404.224 91.8125 419.185 117.596 427.488 145.36C435.79 173.125 437.231 202.193 431.709 230.514C426.187 258.836 413.836 285.719 395.528 309.268C377.221 332.817 353.402 352.457 325.754 366.802L250.542 249.025C259.07 244.601 266.416 238.543 272.063 231.28C277.709 224.017 281.518 215.726 283.222 206.991C284.925 198.256 284.48 189.291 281.92 180.727C279.359 172.164 274.744 164.212 268.402 157.432L383.659 69.8294Z" fill="#33FF00" stroke="white" stroke-width="10" mask="url(#path-2-inside-1_0_1)" />
                                    </g>
                                    <g id="purple">
                                        <mask id="path-3-inside-2_0_1" fill="white">
                                            <path d="M0.625748 224.38C-3.26303 195.331 -0.155066 165.853 9.7303 138.026C19.6157 110.199 36.0375 84.7015 57.8369 63.3332C79.6363 41.9649 106.282 25.2463 135.893 14.3574C165.505 3.46846 197.36 -1.32543 229.212 0.314033L220.766 138.412C210.943 137.906 201.118 139.385 191.985 142.743C182.852 146.102 174.634 151.258 167.91 157.849C161.187 164.439 156.122 172.303 153.073 180.886C150.024 189.468 149.065 198.56 150.265 207.519L0.625748 224.38Z" />
                                        </mask>
                                        <path d="M0.625748 224.38C-3.26303 195.331 -0.155066 165.853 9.7303 138.026C19.6157 110.199 36.0375 84.7015 57.8369 63.3332C79.6363 41.9649 106.282 25.2463 135.893 14.3574C165.505 3.46846 197.36 -1.32543 229.212 0.314033L220.766 138.412C210.943 137.906 201.118 139.385 191.985 142.743C182.852 146.102 174.634 151.258 167.91 157.849C161.187 164.439 156.122 172.303 153.073 180.886C150.024 189.468 149.065 198.56 150.265 207.519L0.625748 224.38Z" fill="#5200FF" stroke="white" stroke-width="10" mask="url(#path-3-inside-2_0_1)" />
                                    </g>
                                    <g id="sky">
                                        <mask id="path-4-inside-3_0_1" fill="white">
                                            <path d="M159.102 392.817C117.28 382.247 79.8465 360.471 51.5903 330.274C23.3341 300.077 5.54026 262.833 0.485211 223.306L150.222 207.188C151.781 219.379 157.269 230.866 165.984 240.18C174.698 249.493 186.244 256.21 199.143 259.47L159.102 392.817Z" />
                                        </mask>
                                        <path d="M159.102 392.817C117.28 382.247 79.8465 360.471 51.5903 330.274C23.3341 300.077 5.54026 262.833 0.485211 223.306L150.222 207.188C151.781 219.379 157.269 230.866 165.984 240.18C174.698 249.493 186.244 256.21 199.143 259.47L159.102 392.817Z" fill="#00E0FF" />
                                        <path d="M159.102 392.817C117.28 382.247 79.8465 360.471 51.5903 330.274C23.3341 300.077 5.54026 262.833 0.485211 223.306L150.222 207.188C151.781 219.379 157.269 230.866 165.984 240.18C174.698 249.493 186.244 256.21 199.143 259.47L159.102 392.817Z" fill="#00E0FF" />
                                        <path d="M159.102 392.817C117.28 382.247 79.8465 360.471 51.5903 330.274C23.3341 300.077 5.54026 262.833 0.485211 223.306L150.222 207.188C151.781 219.379 157.269 230.866 165.984 240.18C174.698 249.493 186.244 256.21 199.143 259.47L159.102 392.817Z" fill="#00E0FF" />
                                        <path d="M159.102 392.817C117.28 382.247 79.8465 360.471 51.5903 330.274C23.3341 300.077 5.54026 262.833 0.485211 223.306L150.222 207.188C151.781 219.379 157.269 230.866 165.984 240.18C174.698 249.493 186.244 256.21 199.143 259.47L159.102 392.817Z" stroke="white" stroke-width="10" mask="url(#path-4-inside-3_0_1)" />
                                    </g>
                                    <g id="yellow">
                                        <mask id="path-5-inside-4_0_1" fill="white">
                                            <path d="M324.447 374.02C274.141 400.164 214.574 406.902 158.852 392.754L199.066 259.45C216.252 263.814 234.624 261.735 250.139 253.672L324.447 374.02Z" />
                                        </mask>
                                        <path d="M324.447 374.02C274.141 400.164 214.574 406.902 158.852 392.754L199.066 259.45C216.252 263.814 234.624 261.735 250.139 253.672L324.447 374.02Z" fill="#00E0FF" />
                                        <path d="M324.447 374.02C274.141 400.164 214.574 406.902 158.852 392.754L199.066 259.45C216.252 263.814 234.624 261.735 250.139 253.672L324.447 374.02Z" fill="#00E0FF" />
                                        <path d="M324.447 374.02C274.141 400.164 214.574 406.902 158.852 392.754L199.066 259.45C216.252 263.814 234.624 261.735 250.139 253.672L324.447 374.02Z" fill="#FFC700" />
                                        <path d="M324.447 374.02C274.141 400.164 214.574 406.902 158.852 392.754L199.066 259.45C216.252 263.814 234.624 261.735 250.139 253.672L324.447 374.02Z" stroke="white" stroke-width="10" mask="url(#path-5-inside-4_0_1)" />
                                    </g>
                                    <g id="red">
                                        <mask id="path-6-inside-5_0_1" fill="white">
                                            <path d="M229.099 0.308243C286.827 3.25205 340.916 27.1141 379.467 66.6451L267.109 158.87C255.219 146.678 238.536 139.318 220.732 138.41L229.099 0.308243Z" />
                                        </mask>
                                        <path d="M229.099 0.308243C286.827 3.25205 340.916 27.1141 379.467 66.6451L267.109 158.87C255.219 146.678 238.536 139.318 220.732 138.41L229.099 0.308243Z" fill="#00E0FF" />
                                        <path d="M229.099 0.308243C286.827 3.25205 340.916 27.1141 379.467 66.6451L267.109 158.87C255.219 146.678 238.536 139.318 220.732 138.41L229.099 0.308243Z" fill="#00E0FF" />
                                        <path d="M229.099 0.308243C286.827 3.25205 340.916 27.1141 379.467 66.6451L267.109 158.87C255.219 146.678 238.536 139.318 220.732 138.41L229.099 0.308243Z" fill="#FF0000" />
                                        <path d="M229.099 0.308243C286.827 3.25205 340.916 27.1141 379.467 66.6451L267.109 158.87C255.219 146.678 238.536 139.318 220.732 138.41L229.099 0.308243Z" stroke="white" stroke-width="10" mask="url(#path-6-inside-5_0_1)" />
                                    </g>
                                </g>
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_0_1">
                                <rect width="435" height="400" rx="200" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <div className='flex items-center justify-center flex-col gap-[5px] w-[70px]  h-full'>
                        <abbr title="34%" >
                            <div className='flex items-center gap-[5px] font-bold'><div className='w-[20px] h-[20px] bg-[#0f0]'></div>Legs</div>
                        </abbr>
                        <abbr title="15%">
                            <div className='flex items-center gap-[5px] font-bold'><div className='w-[20px] h-[20px] bg-[#0ff]'></div>Back</div>
                        </abbr>
                        <abbr title="4%">
                            <div className='flex items-center gap-[5px] font-bold'><div className='w-[20px] h-[20px] bg-[#ff0] ml-[5px]'></div>Chest</div>
                        </abbr>
                        <abbr title="5%">
                            <div className='flex items-center gap-[5px] font-bold'><div className='w-[20px] h-[20px] bg-[#f00] ml-[-5px]'></div>hips</div>
                        </abbr>
                        <abbr title="40%">
                            <div className='flex items-center gap-[5px] font-bold'><div className='w-[20px] h-[20px] bg-[#5200FF] ml-[-4px]'></div>ABS</div>
                        </abbr>
                    </div>
                </div>
            </div>

            {/* third boy */}
            <div className='w-[400px] h-[400px]  place-self-center p-[20px] shadow-md shadow-[#000000] flex items-center justify-evenly flex-col'>
                <div className='w-[95%] h-[15%] flex items-center justify-evenly shadow-md shadow-[#000]'>
                    <input type="text" placeholder='Add workouts' className='shadow-xl shadow-[#000000aa] h-[30px] rounded-lg outline-none ' id='inputValue' />
                    <button className='bg-[#00ffcc] w-[100px] h-[30px] rounded-lg text-[#fff]' onClick={handleworks}>Add</button>
                </div>
                <p className='opacity-[0.7] mt-[10px]'>workout</p>
                <div className='w-[90%] h-[80%] border-[#000000ah] border-2 border-solid rounded-md overflow-hidden'>
                    <div className='w-[full] h-full overflow-scroll'>


                        {
                            pet.map((x, index) => {
                                return (
                                    <p className='p-[10px] '><span className='text-[#00ffcc]'>{index + 1}</span>:{x}</p>
                                )
                            })
                        }

                    </div>
                </div>
            </div>



        </div>
    )
}

export default Extra