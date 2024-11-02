import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa6";
import { FaCommentAlt } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css'
function Vedpost() {
  const [pro, setPro] = useState([]);
  const [loader, setloading] = useState(false);
  async function fetchdata() {
    setloading(true);
    try {
      const res = await fetch('https://dummyjson.com/products?limit=200');
      const data = await res.json();
      if (data && data.products) {
        setPro(data.products);
      }

    } catch (e) {

    }
  }

  function cheaks(ids) {

    let elements = document.querySelectorAll('.ram');
    if (elements[ids].classList.contains('activel')) {
      elements[ids].classList.remove('activel');
    } else {
      elements[ids].classList.add('activel');
    }

  }
  function commentry(ids) {

    let elements = document.querySelectorAll('.commenty');
    if (elements[ids].classList.contains('displayhide')) {
      elements[ids].classList.add('displaybl');
      elements[ids].classList.remove('displayhide');

    } else {
      elements[ids].classList.remove('displaybl');
      elements[ids].classList.add('displayhide');
    }

  }



  useEffect(() => {
    setloading(false);
    setTimeout(() => {
      fetchdata();
    }, 2000)
  }, [setPro])




  const date = new Date();
  const showTime = date.getHours()
    + ':' + date.getMinutes()
    + ":" + date.getSeconds();



  return (
    <div className='w-full flex items-center justify-center flex-col gap-[30px]'>

      {
        loader == true ?
          pro.map((x) => {
            return (
              <div className='w-[520px] h-[700px] bg-[#e3f6f5] flex item-center justify-center flex-col mt-[10px] p-[20px]'>
                <div className='w-[150px] h-[50px] flex items-center justify-between text-[#1e1e1e]'>
                  <FaUserCircle className='text-[30px]' />
                  <div className=' h-full'>
                    {x.brand}
                    <p className='flex items-center'><span>{showTime}:Date:{date.getDate()}</span></p>
                  </div>
                </div>
                <p className='p-[10px] text-justify'>{x.title}</p>
                <p className='p-[10px] text-justify'>{x.description}</p>
                <img src={x.images} alt="products" className=' h-[45%] ' />
                <div className='w-full h-[80px]  bg-[#00ffcc] flex items-center justify-evenly p-[30px]   ' >
                  <div className="  ram  cursor-pointer text-[#fff] text-[20px] " onClick={() => cheaks(x.id - 1)}>
                    <FaHeart className='ml-[5px]' />
                    <p>Like</p>
                  </div>
                  <div className='flex items-center justify-center flex-col text-[#fff] cursor-pointer' onClick={() => commentry(x.id - 1)}>
                    <FaCommentAlt className='text-[20px]' />
                    <p>Comments</p>
                  </div>
                  <div className='flex items-center justify-center flex-col text-[#fff] cursor-pointer' >
                    <FaShareNodes className='text-[20px]' />
                    <p>Share</p>
                  </div>
                </div>
                <div className=' commenty displayhide w-full mt-[20px] bg-[#fff] '>
                  <input type="text" placeholder='comments....' className='w-full outline-none'/>
                </div>
              </div>
            )
          })
          : <button className="btn btn-primary mt-[20px]" type="button" disabled>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
          </button>

      }





    </div>
  )
}

export default Vedpost