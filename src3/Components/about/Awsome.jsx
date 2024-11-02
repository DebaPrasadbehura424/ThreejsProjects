import React, { useEffect, useState } from 'react'

function Awsome() {

  const [rotate, setRoate] = useState(-150);
  const [oparity, setOparity] = useState(0);
  const [bottomsize, setBottomsize] = useState(5);
  const showhipe = () => {
    if (window.scrollY > 30) { setRoate(-50); setOparity(1); setBottomsize(10) }
    else { setRoate(-150); setOparity(0); setBottomsize(5) }

  }
  useEffect(() => {
    showhipe()
  }, [])

  window.addEventListener('scroll', showhipe);
  return (
    <div style={{
      width: "100%", height: "100vh", borderBottom: "2px solid #1e1e1e", fontFamily: "Gloria Hallelujah, cursive", fontWeight: " 400",
      position: "relative", scrollBehavior: "smooth",backgroundColor:"#fff"
    }} >
      <p style={{ margin: "30px" }}> <u>Our Mission</u></p>
      <h1 style={{ fontSize: "40px" }}> <center> All Have Get Equal Rights </center></h1>
      <h1 style={{ position: "absolute", bottom: `${bottomsize}%`, left: "2%", fontSize: "110px", opacity: `${oparity}`, transition: "all 2s ease-in" }}>& To Share</h1>
      <h1 style={{ position: "absolute", bottom: "5%", right: "8%", fontSize: "110px" }}>To Post</h1>
      <img src="https://t3.ftcdn.net/jpg/05/39/19/62/360_F_539196284_HjVcfuaJdmnLWnI5g7qoZAKJZrCmbkJu.jpg" alt="arrow" style={{ position: "absolute", width: "320px", right: "38%", top: "30%", transform: `rotate(${rotate}deg)`, transition: "all 1.5s ease-in" }} className='arrowvita' />

    </div>
  )
}

export default Awsome