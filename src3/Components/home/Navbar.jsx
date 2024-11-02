import React, { useContext } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInternetExplorer } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaAlignCenter } from "react-icons/fa6";
import { Createcontext } from './HomoContext';
import { BiSolidMessageAltCheck } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
function Navbar() {
    const createcontext = useContext(Createcontext)
    return (
        <div className='Navstand'>

            <div className='Activeapps' style={{cursor:"pointer"}}>
                <FaInstagram />
                <FaLinkedin />
                <FaInternetExplorer />
                <SiLeetcode />
            </div>
            <ul className='Navoptions'>
                <NavLink to="/" style={{ textDecoration: "none", color: "#fff", cursor: "pointer" }}> <li>HOME</li></NavLink>
                <NavLink to="/Abouthead" style={{ textDecoration: "none", color: "#fff", cursor: "pointer" }}><li>ABOUT</li></NavLink>
                <NavLink to="/theme" style={{ textDecoration: "none", color: "#fff", cursor: "pointer" }}>  <li>THEMES</li></NavLink>
                <NavLink to="/write" style={{ textDecoration: "none", color: "#fff", cursor: "pointer" }}> <li>WRITE</li></NavLink>
                <NavLink to="/login" style={{ textDecoration: "none", color: "#fff", cursor: "pointer" }}>  <li>LOGIN</li></NavLink>
            </ul>
            <div className='account_section'>
                <div className='myacc'>
                    {
                        <NavLink to='/Account'>
                            <img src="https://i.redd.it/male-random-selfie-27m-v0-s6bd3ohvwx4c1.jpg?width=2208&format=pjpg&auto=webp&s=fee39976344658358256e1679cf8bfe5eff65159" alt="Myphoto" className='myphoto' />
                        </NavLink>

                    }
                </div>

                <FaAlignCenter onClick={() => createcontext.Setseadrop(!createcontext.seadrop)} />
                <NavLink to="/userdata" style={{ color: `${createcontext.locdata == 0 ? '#f00' : '#0f0'}` }}>
                    <BiSolidMessageAltCheck />
                </NavLink>
            
            </div>

        </div>
    )
}




export default Navbar