import React from 'react'
import { useContext } from 'react'
import { Createcontext } from '../home/HomoContext';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInternetExplorer } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
function Userdata() {
    const datacatch = useContext(Createcontext);

    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
            {
                datacatch.locdata && datacatch.locdata.length ? datacatch.locdata.map((x) => {
                    return (
                        <div className='cardbox'>
                            <div className='imageholder'>
                                <img src={`${x.srclink}`} alt="photo" />
                            </div>
                            <div style={{ paddingLeft: "10px", marginTop: "8px" }}>Location:{x.name}</div>
                            <div style={{ paddingLeft: "10px", marginTop: "8px" }}>Date:{x.date}</div>
                            <div style={{ paddingLeft: "10px", marginTop: "8px" }}>About:{x.Guests}</div>
                            <div style={{ display: "flex", alignItems: "center", width: "100%", height: "20%", justifyContent: "space-evenly" }}>
                                <FaInstagram />
                                <FaLinkedin />
                                <FaInternetExplorer />
                                <SiLeetcode />
                            </div>
                        </div>

                    )
                }) : null
            }



        </div>
    )
}

export default Userdata