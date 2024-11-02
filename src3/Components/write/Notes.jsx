import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { IoCloudDoneOutline } from "react-icons/io5";
import { FaDeleteLeft } from "react-icons/fa6";
import Foot from '../home/Foot';

let photos = [
    {
        id: 1,
        link: "https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?cs=srgb&dl=pexels-chanwalrus-958546.jpg&fm=jpg"
    },
    {
        id: 2,
        link: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 3,
        link: "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 4,
        link: "https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 5,
        link: "https://images.pexels.com/photos/327394/pexels-photo-327394.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 6,
        link: "https://images.pexels.com/photos/889545/pexels-photo-889545.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 7,
        link: "https://images.pexels.com/photos/339696/pexels-photo-339696.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 8,
        link: "https://images.pexels.com/photos/99567/aircraft-holiday-sun-tourism-99567.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

]


function Notes() {
    const [scroll, setScroll] = useState(0);
    const [count, setCout] = useState(1);
    const [captions, setCaptions] = useState([]);
    const [col, setCol] = useState([]);
    let arr = [" #61b390", "#929aab", "#a6b1e1", "#e2bf81"];




    function handleNotes() {
        let head = document.getElementById('addhead').value;
        let number = document.getElementById('addnum').value;
        let capti = document.getElementById('addcap').value;
        setCaptions([...captions, { head: head, num: number, caps: capti }]);
        setCol(arr[(Math.floor(Math.random() * arr.length))]);
    }
    function handleright() {
        setScroll((prev) => prev == 9450 ? 9450 : prev + 1350);
        setCout((num) => num == 8 ? 8 : num + 1);
        console.log(scroll);

    }
    function handleleft() {
        setScroll((prev) => prev == 0 ? 0 : prev - 1350);
        setCout((num) => num == 1 ? 1 : num - 1);
    }

    return (
        <>

            <div style={{ marginTop: "30px", width: "100%", height: "100%", overflow: "hidden" }}>
                <div className='countingsection' style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "center", gap: "9px", marginTop: "0px" }}>
                    <p style={{ fontSize: "20px", fontWeight: "700", color: "#a2a8d3" }}>0{count}/08</p>
                    <FaArrowLeft style={{ fontSize: "30px", color: "#a2a8d3", cursor: "pointer" }} onClick={handleleft} />
                    <FaArrowRight style={{ fontSize: "30px", color: "#a2a8d3", cursor: "pointer" }} onClick={handleright} />
                </div>
                <div style={{ width: "700%", height: "100%", display: "flex", transition: "all 0.90s", marginLeft: `${-scroll}px` }}>
                    {
                        photos.map((x) => {
                            return (
                                <div style={{ width: "100%", height: "500px", display: "flex", alignItems: "center", justifyContent: "center", }}>
                                    <img src={`${x.link}`} alt="blogs" style={{ height: "500px", width: "80%", marginLeft: "200px", borderRadius: "40px", }} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* 2nd phase */}
            <div style={{ width: "100%", marginTop: "50px" }}>

                <div style={{ width: "100%", height: "100px", }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "45px", gap: "20px" }}>
                        <input type="text" placeholder='Add Heading/Tittle...' style={{ borderRadius: "10px", width: "200px", height: "30px", border: "2px solid #34495e" }} id='addhead' />
                        <input type="number" placeholder='Add number...' style={{ borderRadius: "10px", width: "100px", height: "30px", border: "2px solid #34495e" }} id='addnum' />
                    </div>
                    <div style={{ width: "100%", height: "50px", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                        <input type="text" placeholder='Add caption & write about above choosed photo...' style={{ width: "80%", height: "50px", borderRadius: "10px", border: "2px solid #34495e", marginTop: "20px" }} id='addcap' />
                        <IoCloudDoneOutline style={{ fontSize: "55px", color: "#5c715e",cursor:"pointer" }} onClick={handleNotes} />

                    </div>
                </div>
                {


                    captions.map((notes) => {
                        return (
                            <div style={{
                                width: "90%", margin: "auto", fontFamily: "cursive", borderRadius: "5px",
                                 color: "#392f2f",marginTop:"30px",
                                backgroundColor: col
                            }}>

                                <h1 style={{ textAlign: "center" }}>  <span>{notes.num} : </span>  {notes.head}</h1>
                                <p style={{ fontSize: "15px", padding: "10px" }}>{notes.caps}</p>
                            </div>
                        )
                    })
                }



            </div>
            <Foot/>
        </>
    )
}

export default Notes